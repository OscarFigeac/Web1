"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function AuthForms() {
  const [isRegistering, setIsRegistering] = useState(false);
  const router = useRouter();

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  const handleRegisterSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    router.push('./page/page.tsx'); // Redirect to page.tsx
  };

  const handleLoginSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    router.push('./page/page.tsx'); // Redirect to page.tsx
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-2xl font-semibold text-center mb-6">
        {isRegistering ? 'Create an Account' : 'Log In'}
      </h2>
      <div className="max-w-md mx-auto bg-white rounded-md shadow-md p-8">
        <button
          onClick={toggleForm}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
        >
          {isRegistering ? 'Already have an account? Log in' : 'Don\'t have an account? Register'}
        </button>

        {isRegistering ? (
          <form onSubmit={handleRegisterSubmit} className="space-y-4">
            <div>
              <label htmlFor="register-username" className="block text-gray-700 text-sm font-bold mb-2">
                Username:
              </label>
              <input
                type="text"
                id="register-username"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <label htmlFor="register-email" className="block text-gray-700 text-sm font-bold mb-2">
                Email:
              </label>
              <input
                type="email"
                id="register-email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <label htmlFor="register-password" className="block text-gray-700 text-sm font-bold mb-2">
                Password:
              </label>
              <input
                type="password"
                id="register-password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <label htmlFor="register-confirm-password" className="block text-gray-700 text-sm font-bold mb-2">
                Confirm Password:
              </label>
              <input
                type="password"
                id="register-confirm-password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Register
            </button>
          </form>
        ) : (
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label htmlFor="login-identifier" className="block text-gray-700 text-sm font-bold mb-2">
                Username or Email:
              </label>
              <input
                type="text"
                id="login-identifier"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <label htmlFor="login-password" className="block text-gray-700 text-sm font-bold mb-2">
                Password:
              </label>
              <input
                type="password"
                id="login-password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Log In
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default AuthForms;