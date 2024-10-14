"use client";
import { playfair, open_sans } from "@/app/ui/fonts/fonts";
import React, { useState } from "react";

const One_time_Verification = () => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));

  const handleChange = (value: string, index: number) => {
    if (/^\d$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;

      setOtp(newOtp);

      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) {
          (nextInput as HTMLInputElement).focus();
        }
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const { key } = e;

    if (key === "Backspace" && otp[index] === "" && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) {
        (prevInput as HTMLInputElement).focus();
      }
    }
  };

  return (
    <div className="h-[35rem] md:h-[32.5rem] bg-white md:bg-primary-primary50 w-full flex flex-col items-center justify-start">
      <div className="w-full bg-white md:bg-primary-primary50 flex flex-col items-center justify-center max-w-md h-[25rem]">
        <div className="w-[90%] rounded-md bg-white space-y-4 p-4 flex flex-col items-center justify-center h-[22rem]">
          <div className="text-center">
            <h1
              className={`${playfair.className} text-[#333333] font-bold text-[20px] md:text-[24px] leading-[32px]`}
            >
              Enter One-Time Password (OTP)
            </h1>
            <p
              className={`${open_sans.className} text-[#5C5C5C] font-normal text-[14px] md:text-[16px] leading-[22px]`}
            >
              We've sent a 6-digit OTP to your email. Please enter it below to
              verify your account.
            </p>
          </div>
          <div className="w-[90%]">
            <div className="flex justify-center items-center space-x-2">
              {otp.map((value, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="number"
                  inputMode="numeric"
                  maxLength={1}
                  value={value}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-10 h-12 md:w-12 md:h-16 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              ))}
            </div>
            <div className="mt-4 flex flex-col items-center justify-center">
              <button
                className={`${open_sans.className} bg-[#6200EE] font-semibold text-[16px] md:text-[18px] rounded-xl text-white h-[3rem] md:h-[4rem] w-full max-w-[20rem] md:max-w-[28rem]`}
              >
                Verify OTP
              </button>
              <div
                className={`${open_sans.className} mt-2 font-normal text-[12px] md:text-[14px] text-[#5C5C5C] leading-[16px]`}
              >
                Didn’t receive any code?
                <span className="ml-1 text-[#6200EE] cursor-pointer">
                  Resend
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default One_time_Verification;
