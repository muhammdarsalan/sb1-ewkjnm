import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { FaTimes, FaTrash } from 'react-icons/fa';
import useCartStore from '../store/cartStore';
import toast from 'react-hot-toast';

function Cart() {
  const { items, isOpen, toggleCart, removeItem, updateQuantity, getTotal, clearCart } = useCartStore();

  const handleCheckout = () => {
    toast.success('Proceeding to checkout...');
    clearCart();
    toggleCart();
  };

  const formattedTotal = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(getTotal());

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={toggleCart} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="transform transition ease-in-out duration-300"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition ease-in-out duration-300"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <div className="fixed inset-y-0 right-0 flex">
            <Dialog.Panel className="w-full max-w-md bg-white shadow-xl">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <Dialog.Title className="text-lg font-bold">Shopping Cart</Dialog.Title>
                  <button 
                    onClick={toggleCart} 
                    className="p-2 hover:text-primary-400 transition-colors"
                  >
                    <FaTimes />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4">
                  {items.length === 0 ? (
                    <p className="text-center text-gray-500">Your cart is empty</p>
                  ) : (
                    <div className="space-y-4">
                      {items.map((item) => (
                        <div key={item.id} className="flex items-center space-x-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold">{item.name}</h3>
                            <p className="text-primary-400">
                              {new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD'
                              }).format(item.price)}
                            </p>
                            <div className="flex items-center space-x-2 mt-2">
                              <button
                                onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                className="px-2 py-1 border rounded hover:bg-gray-100"
                              >
                                -
                              </button>
                              <span>{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="px-2 py-1 border rounded hover:bg-gray-100"
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-2 text-red-500 hover:text-red-700"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="border-t p-4">
                  <div className="flex justify-between mb-4">
                    <span className="font-bold">Total:</span>
                    <span className="font-bold">{formattedTotal}</span>
                  </div>
                  <button
                    onClick={handleCheckout}
                    disabled={items.length === 0}
                    className="w-full bg-primary-400 text-white py-2 rounded-lg hover:bg-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}

export default Cart;