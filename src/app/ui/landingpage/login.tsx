"use client";
import Image from "next/image";
import React from "react";
import { coustard, playfair, open_sans } from "@/app/ui/fonts/fonts";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // Importing eye icons

import { useState } from "react";
import Link from "next/link";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false); // State to handle password visibility

  return (
    <div className=" h-screen w-full">
      <div className="flex h-[8rem] gap-[3.65px] items-center justify-center">
        <Image
          src="/images/icons/clock.svg"
          width={39}
          height={39}
          alt="clockpath logo"
        />
        <p className={`${coustard.className} font-normal text-[18.26px]`}>
          ClockPath
        </p>
      </div>
      <div className="text-[#E5E7EB] mb-4">
        <hr />
      </div>
      <div className="">
        <div className=" text-center ">
          <h1
            className={`${playfair.className} text-[24px] font-bold text-lineHeight-custom1 `}
          >
            Log In
          </h1>
          <p
            className={`${open_sans.className} font-normal text-[16px] text-lineHeight-[21.79px]`}
          >
            Enter your credentials to access your account
          </p>
        </div>
        <div>
          <div className="border-2 h-[30rem] mt-5 border-black flex flex-col">
            <div className="space-y-8 pt-3 w-full  h-auto justify-center ">
              <div className=" h-[8rem]   w-[30rem]   mx-auto">
                <h1
                  className={`${open_sans.className} font-semibold text-[16px] text-lineHeight-[21.79px]`}
                >
                  Email Address
                </h1>
                <div className="h-[5rem] relative border-2 border-[#CCCCCC] rounded-md ">
                  <input
                    className="w-full h-[4rem] pl-4 text-[14px] absolute outline-none rounded-md"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className=" h-[8rem]  w-[30rem]   mx-auto">
                <h1
                  className={`${open_sans.className} font-semibold text-[16px] text-lineHeight-[21.79px]`}
                >
                  Password
                </h1>
                <div className="relative h-[5rem] rounded-md border-2 border-[#CCCCCC]">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    className="w-full h-[4rem] pl-4 text-[14px] absolute outline-none rounded-md"
                  />
                  <span
                    className="absolute right-2 top-1/2 transform -translate-y-4 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible className="text-3xl" />
                    ) : (
                      <AiOutlineEye className="text-3xl" />
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className=" h-8  w-full flex justify-end  items-end  ">
              <Link
                className={` ${open_sans.className} bg-yellow-100 text-right text-[#6200EE]   font-normal`}
                href={""}
              >
                Forgot Password?
              </Link>
            </div>
            <div className=" h-[6rem] flex items-center justify-center">
              <button
                className={`${open_sans.className} bg-[#6200EE] font-semibold text-[18px] rounded-xl text-white h-[5rem] w-[30rem] `}
              >
                Login
              </button>
            </div>
            <div className="  h-[2rem] flex items-center justify-center">
              <div
                className={`${open_sans.className} font-normal text-[12px] text-[#5C5C5C] text-lineHeight-[16.34px]`}
              >
                Don’t have an account?
                <span className={`${open_sans} ml-2 text-[#6200EE]`}>
                  Sign Up
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
