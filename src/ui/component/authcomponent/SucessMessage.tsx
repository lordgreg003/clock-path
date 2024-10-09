"use client";
import React from "react";
import Image from "next/image";
import { playfair, open_sans } from "@/ui/fonts/fonts";

const SuccessMessage = () => {
  return (
    <div className="h-[30rem] lg:h-[28rem] bg-primary-primary50 w-full flex items-center justify-center">
      <div className="w-full bg-white flex flex-col items-center justify-center max-w-[32rem] rounded-xl h-[25rem] p-6">
        <div className="flex flex-col items-center space-y-4 w-full text-center">
          {/* Success Icon */}
          <div className="flex justify-center items-center">
            <Image
              src="/images/icons/Vector.svg"
              alt="Success Icon"
              width={50}
              height={40}
            />
          </div>

          {/* Success Message */}
          <div className="space-y-2">
            <h1
              className={`${playfair.className} font-bold text-[22px] leading-[28px] text-[#333333]`}
            >
              Password Set Successfully!
            </h1>
            <p
              className={`${open_sans.className} font-normal text-[14px] leading-[20px] text-[#5C5C5C]`}
            >
              Your account is now secure. You're all set to log in and start
              using ClockPath.
            </p>
          </div>

          {/* Login Button */}
          <div className="w-full flex items-center justify-center mt-4">
            <button
              className={`${open_sans.className} bg-[#6200EE] font-semibold text-[16px] rounded-lg text-white h-[3rem] w-full max-w-[24rem]`}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;
