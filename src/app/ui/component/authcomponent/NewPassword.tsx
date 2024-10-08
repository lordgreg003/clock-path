"use client";
import { playfair, open_sans } from "@/app/ui/fonts/fonts";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const NewPassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-white md:bg-primary-primary50 h-[30rem] lg:h-[30rem]   w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full bg-white flex justify-center items-center max-w-[32rem] h-[25rem] rounded-xl">
        <div className="flex flex-col items-center space-y-4 justify-center w-full px-6 py-8">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1
              className={`${playfair.className} text-[#333333] font-bold text-[22px] leading-[28px]`}
            >
              Create New Password
            </h1>
            <p
              className={`${open_sans.className} text-[#5C5C5C] font-normal text-[14px] leading-[20px]`}
            >
              Enter your new password twice to confirm
            </p>
          </div>

          {/* Input Fields */}
          <div className="w-full space-y-4">
            <div className="w-full">
              <h1
                className={`${open_sans.className} font-semibold text-[14px] leading-[20px]`}
              >
                New Password
              </h1>
              <div className="relative rounded-lg border border-[#CCCCCC]">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  className="w-full h-[2.75rem] px-3 text-[13px] outline-none rounded-lg"
                />
                <span
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible className="text-xl text-[#5F6774]" />
                  ) : (
                    <AiOutlineEye className="text-xl text-[#5F6774]" />
                  )}
                </span>
              </div>
            </div>

            <div className="w-full">
              <h1
                className={`${open_sans.className} font-semibold text-[14px] leading-[20px]`}
              >
                Confirm New Password
              </h1>
              <div className="relative rounded-lg border border-[#CCCCCC]">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  className="w-full h-[2.75rem] px-3 text-[13px] outline-none rounded-lg"
                />
                <span
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible className="text-xl text-[#5F6774]" />
                  ) : (
                    <AiOutlineEye className="text-xl text-[#5F6774]" />
                  )}
                </span>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="w-full flex items-center justify-center mt-4">
            <button
              className={`${open_sans.className} bg-[#6200EE] font-semibold text-[16px] rounded-lg text-white h-[3rem] w-full max-w-[24rem]`}
            >
              Set Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
