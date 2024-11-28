import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { FaExclamationTriangle } from 'react-icons/fa';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <FaExclamationTriangle className="mx-auto h-12 w-12 text-red-500" />
        <h1 className="mt-4 text-2xl font-bold text-gray-900">Something went wrong</h1>
        <p className="mt-2 text-gray-600">{error.message}</p>
        <button
          onClick={resetErrorBoundary}
          className="mt-4 px-4 py-2 bg-primary-400 text-white rounded-lg hover:bg-primary-500 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

function withErrorBoundary(Component) {
  return function WithErrorBoundary(props) {
    return (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
}

export default withErrorBoundary;