"use client";
import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { GrFormNextLink } from "react-icons/gr";

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const paymentMethods = [
    {
      id: "card",
      label: "Debit card",

      visaIcon: (
        <Image
          src="/images/Paystack.png"
          alt="visaCard"
          width={50}
          height={50}
        />
      ),
      masterIcon: (
        <Image
          src="/images/masterCard.png"
          alt="masterCard"
          width={50}
          height={50}
        />
      ),
    },
    { id: "paystack", label: "Paystack" },
    { id: "flutterwave", label: "Flutterwave" },
  ];

  const handleSelect = (method: string) => {
    setSelectedMethod(method);
  };

  const handleSubmit = () => {
    if (!selectedMethod) {
      alert("Please select a payment method");
    } else {
      console.log(`Selected Payment Method: ${selectedMethod}`);

      if (selectedMethod === "paystack") {
      } else if (selectedMethod === "flutterwave") {
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center  bg-primary-primary50 py-8 px-4">
      {/* Back Button */}
      <div className="w-full flex justify-start mb-6">
        <Link href="/plans" className="flex items-center cursor-pointer">
          <div>
            <IoIosArrowRoundBack className="text-2xl text-[#6200EE]" />
          </div>
          <div className="text-[#6200EE] font-semibold hover:underline cursor-pointer">
            Back
          </div>
        </Link>
      </div>

      {/* Payment Form */}
      <div className="bg-white rounded-md shadow-md p-6 max-w-md w-full text-center flex flex-col justify-center items-center">
        <h2 className="text-xl font-semibold mb-6">Choose How To Pay</h2>
        <p className="text-gray-600 mb-4">Select a payment method to proceed</p>
        {/* Payment Methods */}
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className={` flex py-3 w-[80%] h-[3rem] items-center flex-row border-2 border-[#CCCCCC] hover:border-[#6200EE] mb-4 text-sm sm:text-lg whitespace-nowrap md:text-lg rounded-xl group has-[:checked]:bg-indigo-50  has-[:checked]:text-indigo-900 has-[:checked]:border-[#6200EE] `}
          >
            <input
              type="radio"
              id={method.id}
              name="paymentMethod"
              className="mx-2 sm:mx-3 "
              checked={selectedMethod === method.id}
              onChange={() => handleSelect(method.id)}
            />
            <label
              htmlFor={method.id}
              className={`cursor-pointer ${
                selectedMethod === method.id
                  ? "text-purple-600"
                  : "text-gray-700"
              } flex items-center sm:gap-5 w-[80%] gap-2  `}
            >
              {method.masterIcon && method.masterIcon}
              {method.visaIcon && method.visaIcon}
              {method.label}
            </label>
          </div>
        ))}
        {/* Proceed Button */}
        <button
          className="w-[80%] h-[3rem] py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700"
          onClick={handleSubmit}
        >
          Proceed
        </button>
        <div></div>
      </div>
    </div>
  );
};

export default Payment;
