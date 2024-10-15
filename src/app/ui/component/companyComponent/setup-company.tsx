"use client";
import React, { useState } from "react";
const SetupCompany: React.FC = () => {
  const [companyName, setCompanyName] = useState<string>("");
  const [companyAddress, setCompanyAddress] = useState<string>("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ companyName, companyAddress });
    // You can perform form submission or navigation here
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Set Up Your Company
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Enter your company details in a few simple steps to get started with
          ClockPath.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="companyName"
            >
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter company name"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="companyAddress"
            >
              Company Address
            </label>
            <input
              type="text"
              id="companyAddress"
              value={companyAddress}
              onChange={(e) => setCompanyAddress(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter company address"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};
export default SetupCompany;
