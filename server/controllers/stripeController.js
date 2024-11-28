import Stripe from 'stripe';
import dotenv from 'dotenv';
import Order from '../models/Order.js';

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createPaymentIntent = async (req, res) => {
  try {
    const { amount } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Convert to cents
      currency: 'usd',
      metadata: {
        userId: req.user.id
      }
    });

    res.json({
      clientSecret: paymentIntent.client_secret
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating payment intent' });
  }
};

export const handleWebhook = async (req, res) => {
  const sig = req.headers['stripe-signature'];

  try {
    const event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );

    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object;
        await handleSuccessfulPayment(paymentIntent);
        break;
      case 'payment_intent.payment_failed':
        const failedPayment = event.data.object;
        await handleFailedPayment(failedPayment);
        break;
    }

    res.json({ received: true });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Webhook error' });
  }
};

async function handleSuccessfulPayment(paymentIntent) {
  const order = await Order.findOne({
    'payment.paymentIntentId': paymentIntent.id
  });

  if (order) {
    order.paymentStatus = 'completed';
    order.status = 'processing';
    await order.save();
  }
}

async function handleFailedPayment(paymentIntent) {
  const order = await Order.findOne({
    'payment.paymentIntentId': paymentIntent.id
  });

  if (order) {
    order.paymentStatus = 'failed';
    order.status = 'cancelled';
    await order.save();
  }
}