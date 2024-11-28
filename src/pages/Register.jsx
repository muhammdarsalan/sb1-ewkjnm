import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../components/auth/RegisterForm';
import SEOHead from '../components/SEOHead';

function Register() {
  return (
    <>
      <SEOHead 
        title="Register - SaltMarket"
        description="Create your SaltMarket account to start shopping for premium gemstones."
      />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
              Create Account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-primary-400 hover:text-primary-500">
                Sign in
              </Link>
            </p>
          </div>
          <RegisterForm />
        </div>
      </div>
    </>
  );
}

export default Register;