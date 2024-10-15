"use client";
import { useState } from "react";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const paymentMethods = [
    {
      id: "card",
      label: "Debit card",
      icon: <FaCcVisa className="inline mr-2" />,
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
      // Proceed with the selected method (this is where you'd connect to the API)
      console.log(`Selected Payment Method: ${selectedMethod}`);
      // Example: redirecting to payment integration
      if (selectedMethod === "paystack") {
        // Redirect to Paystack or call Paystack API here
      } else if (selectedMethod === "flutterwave") {
        // Redirect to Flutterwave or call Flutterwave API here
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center  bg-gray-500 py-8 px-4">
      {/* Back Button */}
      <div className="w-full flex bg-primary-primary400 justify-start mb-6">
        <Link href="/plans">
          <span className="text-gray-500 flex items-center cursor-pointer">
            <IoIosArrowBack className="mr-2" />
            Back
          </span>
        </Link>
      </div>

      {/* Payment Form */}
      <div className="bg-white rounded-lg shadow-md p-6 max-w-md w-full text-center">
        <h2 className="text-xl font-semibold mb-6">Choose How To Pay</h2>
        <p className="text-gray-600 mb-4">Select a payment method to proceed</p>

        {/* Payment Methods */}
        {paymentMethods.map((method) => (
          <div key={method.id} className="flex items-center mb-4">
            <input
              type="radio"
              id={method.id}
              name="paymentMethod"
              className="mr-2"
              checked={selectedMethod === method.id}
              onChange={() => handleSelect(method.id)}
            />
            <label
              htmlFor={method.id}
              className={`cursor-pointer ${
                selectedMethod === method.id
                  ? "text-purple-600"
                  : "text-gray-700"
              } flex items-center`}
            >
              {method.icon && method.icon}
              {method.label}
            </label>
          </div>
        ))}

        {/* Proceed Button */}
        <button
          className="w-full py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700"
          onClick={handleSubmit}
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default Payment;
