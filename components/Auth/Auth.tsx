"use client"
import React, { useState } from 'react';
import { Input } from '../ui/Input';
import { useLogin, useRegister } from '@/lib/api/auth/auth-quary';
import { withGuest } from '@/lib/withGuest';

const Auth = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false); // новое состояние для переключения форм

  const registerMutation = useRegister();
  const loginMutation = useLogin()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('name:', name)
    if (isSignUp) {
      registerMutation.mutate({ username, email, password, name });
      console.log("Register submit");
    } else {
      const identifier = email
      loginMutation.mutate({ identifier, password });
      console.log("Login submit");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">{isSignUp ? "Register" : "Login"}</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <div>
              <label htmlFor="name" className="block text-md font-medium text-gray-700 mb-3">Name</label>
              <Input
                title='Enter your name'
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}

          {isSignUp && (
            <div>
              <label htmlFor="username" className="block text-md font-medium text-gray-700 mb-3">Username</label>
              <Input
                title='Enter your username'
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-md font-medium text-gray-700 mb-3">Email</label>
            <Input
              title='Enter your email'
              id='email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-md font-medium text-gray-700 mb-3">Password</label>
            <Input
              title='Enter your password'
              id='password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">
                Remember for 30 days
              </label>
            </div>

            {!isSignUp && (
              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot Password?
                </a>
              </div>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isSignUp ? "Sign up" : "Log in"}
            </button>
          </div>
        </form>

        <div className="mt-6">
          <button
            type="button"
            className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              alt="Google logo"
              className="h-5 w-5 mr-2"
            />
            {isSignUp ? "Sign up with Google" : "Log in with Google"}
          </button>
        </div>

        <div className="flex justify-center mt-6">
          <p className="text-center text-sm text-gray-600">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{' '}
            <span
              className="ml-1 font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"
              onClick={() => setIsSignUp(!isSignUp)} // переключаем состояние
            >
              {isSignUp ? "Sign in" : "Sign up"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default withGuest(Auth);
