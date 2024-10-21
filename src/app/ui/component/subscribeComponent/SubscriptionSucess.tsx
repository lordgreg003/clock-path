"use client";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { open_sans, playfair_Display } from "../../fonts/fonts";

const SubscriptionSuccess = () => {
  const handleProceed = () => {
    // Redirect to home or another page
    // router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center  justify-start md:justify-center bg-primary-primary50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        {/* Success Icon */}
        <div className="flex justify-center mb-4">
          <Image
            src="/images/good.png"
            alt="Success Icon"
            width={100}
            height={100}
          />
        </div>
        {/* Heading */}
        <h2
          className={`${playfair_Display.className} text-[24px]  font-bold mb-2 text-[#333333]`}
        >
          Subscription Successful!
        </h2>
        {/* Description */}
        <p
          className={`${open_sans.className} text-[#5C5C5C] mb-4 font-normal text-[18px] text-center`}
        >
          Welcome to{" "}
          <span className={`${open_sans}   text-[#6200EE] font-normal`}>
            ClockPath Premium
          </span>
          . You now have access to your enhanced features.
        </p>
        {/* Proceed Button */}
        <button
          onClick={handleProceed}
          className="bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg w-full hover:bg-purple-700 transition duration-200"
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default SubscriptionSuccess;
