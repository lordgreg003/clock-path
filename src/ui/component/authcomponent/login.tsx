"use client";
import React, { useState } from "react";
import { playfair, open_sans } from "@/ui/fonts/fonts";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Link from "next/link";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-white  h-[32rem] md:bg-primary-primary50 md:h-[31rem] w-full flex flex-col items-center justify-center">
      <div className="text-[#E5E7EB] mb-4">
        <hr />
      </div>
      <div className="w-full py-10 rounded-lg md:bg-white max-w-[36rem]">
        <div className="text-center">
          <h1
            className={`${playfair.className} text-[22px] text-[#101928] font-bold text-lineHeight-custom1`}
          >
            Log In
          </h1>
          <p
            className={`${open_sans.className} font-normal text-[#667185] text-[14px]`}
          >
            Enter your credentials to access your account
          </p>
        </div>
        <div>
          <div className="mt-5 flex flex-col max-w-[28rem] mx-auto">
            <div className="space-y-6 pt-2 w-full">
              <div>
                <h1
                  className={`${open_sans.className} font-semibold text-[14px]`}
                >
                  Email Address
                </h1>
                <div className="relative border border-[#CCCCCC] rounded-lg">
                  <input
                    className="w-full h-[2.75rem] px-3 text-[13px] outline-none rounded-lg"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div>
                <h1
                  className={`${open_sans.className} font-semibold text-[14px]`}
                >
                  Password
                </h1>
                <div className="relative border border-[#CCCCCC] rounded-lg">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    className="w-full h-[2.75rem] px-3 text-[13px] outline-none rounded-lg"
                  />
                  <span
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible className="text-2xl text-[#5F6774]" />
                    ) : (
                      <AiOutlineEye className="text-2xl text-[#5F6774]" />
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-3 w-full flex justify-end">
              <Link
                className={`${open_sans.className} text-right text-[#6200EE] font-normal`}
                href={"/forgottenpassword"}
              >
                Forgot Password?
              </Link>
            </div>
            <div className="mt-6 flex items-center justify-center">
              <button
                className={`${open_sans.className} bg-[#6200EE] font-semibold text-[16px] rounded-lg text-white h-[3rem] w-full max-w-[26rem]`}
              >
                Login
              </button>
            </div>
            <div className="mt-4 flex items-center justify-center">
              <div
                className={`${open_sans.className} font-normal text-[12px] text-[#5C5C5C]`}
              >
                Don’t have an account?
                <span className="ml-1 text-[#6200EE]">Sign Up</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
