"use client";
import React, { useState } from "react";
import { open_sans, playfair_Display } from "@/app/ui/fonts/fonts";

const SetupCompany: React.FC = () => {
  const [companyName, setCompanyName] = useState<string>("");
  const [companyAddress, setCompanyAddress] = useState<string>("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ companyName, companyAddress });
    // You can perform form submission or navigation here
  };
  return (
    <div className="flex justify-center items-center h-screen bg-primary-primary50">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2
          className={`${playfair_Display.className} text-[28px] font-bold text-center text-[#333333] mb-6`}
        >
          Set Up Your Company
        </h2>
        <p
          className={`${open_sans.className} text-[#5C5C5C] font-normal text-[18px] text-center mb-6`}
        >
          Enter your company details in a few simple steps to get started with
          ClockPath.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className={`${open_sans.className}  font-semibold block text-[16px] text-[#333333]`}
              htmlFor="companyName"
            >
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className={`${open_sans.className}  mt-1 block w-full px-3 py-2 border border-[#CCCCCC] rounded-xl shadow-sm focus:outline-none text-[#5C5C5C] font-normal focus:ring-[#6200EE] focus:border-[#6200EE] sm:text-[14px]`}
              placeholder="Enter company name"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className={`${open_sans.className} block text-[16px] font-semibold text-[#333333]`}
              htmlFor="companyAddress"
            >
              Company Address
            </label>
            <input
              type="text"
              id="companyAddress"
              value={companyAddress}
              onChange={(e) => setCompanyAddress(e.target.value)}
              className={`${open_sans.className} mt-1 block w-full px-3 py-2 border border-[#CCCCCC] rounded-xl shadow-sm text-[#5C5C5C] focus:outline-none focus:ring-[#6200EE] focus:border-[#6200EE] font-normal text-sm`}
              placeholder="Enter company address"
              required
            />
          </div>
          <button
            type="submit"
            className={`${open_sans.className} w-full bg-[#6200EE] text-white py-2 px-4 rounded-xl   text-[18px]`}
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};
export default SetupCompany;
