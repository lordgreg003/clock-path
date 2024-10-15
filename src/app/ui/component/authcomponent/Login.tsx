"use client";
import { useState } from "react";
import Link from "next/link";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submit logic here
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-white md:bg-primary-primary50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-4">Log In</h2>
        <p className="text-center mb-6">
          Enter your credentials to access your account
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter password"
              required
            />
          </div>
          <div className="text-right">
            <Link
              className="text-sm text-purple-600 hover:underline"
              href="/forgot-password"
            >
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Log In
          </button>
        </form>
        <div className="mt-6 text-center">
          <p>
            Don’t have an account?{" "}
            <Link
              className="text-purple-600 font-bold hover:underline"
              href="/signup"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
