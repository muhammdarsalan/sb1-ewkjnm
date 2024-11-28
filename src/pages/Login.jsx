import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/auth/LoginForm';
import SEOHead from '../components/SEOHead';

function Login() {
  return (
    <>
      <SEOHead 
        title="Login - SaltMarket"
        description="Login to your SaltMarket account to access your orders, wishlist, and more."
      />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
              Welcome Back
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <Link to="/register" className="text-primary-400 hover:text-primary-500">
                create a new account
              </Link>
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    </>
  );
}

export default Login;