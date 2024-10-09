"use client";
import { playfair, open_sans } from "@/ui/fonts/fonts";
import React from "react";
import { useState } from "react";
const One_time_Verification = () => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));

  const handleChange = (value: string, index: number) => {
    if (/^\d$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;

      setOtp(newOtp);

      // Move to the next input if a value is entered
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

    // Move to the previous input if backspace is pressed and the current input is empty
    if (key === "Backspace" && otp[index] === "" && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) {
        (prevInput as HTMLInputElement).focus();
      }
    }
  };

  return (
    <div className=" h-[40rem]   md:h-[39.5rem] w-full flex flex-col items-center justify-center">
      <div className="w-full bg-primary-primary50 flex flex-col items-center justify-center  max-w-[39rem] h-[30rem]">
        <div className=" w-[35rem] bg-white space-y-4 flex flex-col items-center justify-center h-[28rem]">
          <div className=" w-[92%] h-1/3  text-center">
            <h1
              className={`${playfair.className} text-[#333333] font-bold text-[24px] text-lineHeight-[31.99px]`}
            >
              Enter One-Time Password (OTP)
            </h1>
            <p
              className={`${open_sans.className}text-[#5C5C5C] font-normal text-[16px] text-lineHeight-[21.79px]`}
            >
              We've sent a 6-digit OTP to your email. Please enter it below to
              verify your account
            </p>
          </div>
          <div className=" w-[92%] h-1/2 ">
            <div className="flex  h-1/2 justify-center items-center space-x-2">
              {otp.map((value, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="number"
                  inputMode="numeric" // Ensure the numeric keypad appears on mobile devices
                  maxLength={1}
                  value={value}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-12 h-16 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              ))}
            </div>
            <div className="h-1/2 flex flex-col items-center justify-center">
              <button
                className={`${open_sans.className} bg-[#6200EE] font-semibold text-[18px] rounded-xl text-white h-[4rem] w-full  max-w-[28rem]`}
              >
                Submit
              </button>
              <div
                className={`${open_sans.className} font-normal text-[12px] text-[#5C5C5C] text-lineHeight-[16.34px]`}
              >
                Didn’t receive any code?
                <span className={`${open_sans.className} ml-2 text-[#6200EE]`}>
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
