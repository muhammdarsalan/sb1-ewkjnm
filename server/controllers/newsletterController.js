import Newsletter from '../models/Newsletter.js';

export const subscribe = async (req, res) => {
  try {
    const { email } = req.body;

    let subscription = await Newsletter.findOne({ email });
    if (subscription) {
      if (subscription.isSubscribed) {
        return res.status(400).json({ message: 'Email already subscribed' });
      }
      subscription.isSubscribed = true;
      await subscription.save();
    } else {
      subscription = new Newsletter({ email });
      await subscription.save();
    }

    res.status(201).json({ message: 'Successfully subscribed to newsletter' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

export const unsubscribe = async (req, res) => {
  try {
    const { email } = req.body;

    const subscription = await Newsletter.findOne({ email });
    if (!subscription || !subscription.isSubscribed) {
      return res.status(400).json({ message: 'Email not found in subscription list' });
    }

    subscription.isSubscribed = false;
    await subscription.save();

    res.json({ message: 'Successfully unsubscribed from newsletter' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};