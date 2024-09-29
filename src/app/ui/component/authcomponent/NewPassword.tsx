"use client";
import { playfair, open_sans } from "@/app/ui/fonts/fonts";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // Importing eye icons

const NewPassword = () => {
  const [showPassword, setShowPassword] = useState(false); // State to handle password visibility

  return (
    <div className="bg-primary-primary50 h-[40rem]   md:h-[39.5rem] w-full flex flex-col items-center justify-center">
      <div className="w-full bg-white flex justify-center items-center  max-w-[39rem] h-[38rem]">
        <div className=" flex flex-col items-center space-y-2 justify-center h-[36rem] w-full md:w-[35rem] ">
          <div className="w-[90%]  h-1/4 text-center py-5 space-y-3">
            <h1
              className={`${playfair.className} text-[#333333] font-bold text-[24px] text-lineHeight-[31.99px]`}
            >
              Create New Password
            </h1>
            <p
              className={`${open_sans} text-[#5C5C5C] font-light text-[16px] text-lineHeight-[21.79px] `}
            >
              Enter your new password twice to confirm
            </p>
          </div>
          <div className="w-[90%] space-y-3  h-[25rem] ">
            <div className="h-[8rem] w-full">
              <h1
                className={`${open_sans.className} font-semibold text-[16px] text-lineHeight-[21.79px]`}
              >
                New Password
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
            <div className="h-[8rem] w-full">
              <h1
                className={`${open_sans.className} font-semibold text-[16px] text-lineHeight-[21.79px]`}
              >
                Confirm New Password
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
            <div className="h-[6rem] flex items-center justify-center">
              <button
                className={`${open_sans.className} bg-[#6200EE] font-semibold text-[18px] rounded-xl text-white h-[4rem] w-full  max-w-[28rem]`}
              >
                Set Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
