"use client";
import React from "react";
import { playfair, open_sans } from "@/app/ui/fonts/fonts";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // Importing eye icons

import { useState } from "react";
import Link from "next/link";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false); // State to handle password visibility

  return (
    <div className="bg-white h-[40rem] md:bg-primary-primary50 md:h-[39.5rem] w-full flex flex-col items-center justify-center">
      <div className="text-[#E5E7EB] mb-4">
        <hr />
      </div>
      <div className="w-full md:bg-white  max-w-[39rem]">
        {" "}
        {/* Centered and width-limited div */}
        <div className="text-center">
          <h1
            className={`${playfair.className} text-[24px] text-[#101928] font-bold text-lineHeight-custom1`}
          >
            Log In
          </h1>
          <p
            className={`${open_sans.className} font-normal text-[#667185] text-[16px] text-lineHeight-[21.79px]`}
          >
            Enter your credentials to access your account
          </p>
        </div>
        <div>
          {/* Centered div starts here */}
          <div className=" h-[30rem] mt-5  flex flex-col max-w-[30rem] mx-auto">
            <div className="space-y-8 pt-3 w-full h-auto justify-center">
              <div className="h-[8rem] w-full">
                <h1
                  className={`${open_sans.className} font-semibold text-[16px] text-lineHeight-[21.79px]`}
                >
                  Email Address
                </h1>
                <div className="h-[5rem]  relative border-2 border-[#CCCCCC] rounded-[16px] ">
                  <input
                    className="w-full transform translate-y-1 h-[4rem] pl-4 text-[14px] absolute outline-none rounded-[16px]"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="h-[8rem] w-full">
                <h1
                  className={`${open_sans.className} font-semibold text-[16px] text-lineHeight-[21.79px]`}
                >
                  Password
                </h1>
                <div className="relative h-[5rem] rounded-[16px] border-2 border-[#CCCCCC]">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    className="w-full h-[4rem] transform translate-y-1 pl-4 text-[14px] absolute outline-none rounded-[16px]"
                  />
                  <span
                    className="absolute right-2 top-1/2 transform -translate-y-4 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible className="text-3xl text-[#5F6774]" />
                    ) : (
                      <AiOutlineEye className="text-3xl text-[#5F6774]" />
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="h-8 w-full flex justify-end items-end ">
              <Link
                className={` ${open_sans.className}  text-right text-[#6200EE] font-normal`}
                href={"/login/forgottenpassword"}
              >
                Forgot Password?
              </Link>
            </div>
            <div className="h-[6rem] flex items-center justify-center">
              <button
                className={`${open_sans.className} bg-[#6200EE] font-semibold text-[18px] rounded-xl text-white h-[4rem] w-full  max-w-[28rem]`}
              >
                Login
              </button>
            </div>
            <div className="h-[2rem] flex items-center justify-center">
              <div
                className={`${open_sans.className} font-normal text-[12px] text-[#5C5C5C] text-lineHeight-[16.34px]`}
              >
                Don’t have an account?
                <span className={`${open_sans.className} ml-2 text-[#6200EE]`}>
                  Sign Up
                </span>
              </div>
            </div>
          </div>
          {/* Centered div ends here */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
