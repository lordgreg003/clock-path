"use client";
import React from "react";
import Image from "next/image";
import { playfair, open_sans } from "@/app/ui/fonts/fonts";

const EmailSuccessMessage = () => {
  return (
    <div className="bg-white  md:bg-primary-primary50 w-full flex items-center justify-center h-[30rem] lg:h-[25rem]">
      <div className="w-full bg-white flex flex-col items-center justify-center max-w-[30rem]  h-[20rem]">
        <div className="flex flex-col items-center justify-center w-[90%] space-y-4 h-[25rem]">
          <div className="flex justify-center items-center h-1/3">
            <div>
              <Image
                src="/images/icons/Vector.svg"
                alt="vector image"
                width={50}
                height={40}
              />
            </div>
          </div>
          <div className="h-1/2 text-center">
            <h1
              className={`${playfair.className} font-bold text-[20px] md:text-[24px] text-lineHeight-[31.99px] text-[#333333]`}
            >
              Email Verified Successfully!
            </h1>
            <p
              className={`${open_sans.className} font-normal text-[14px] md:text-[16px] text-lineHeight-[21.79px] text-[#5C5C5C]`}
            >
              Your email has been successfully verified. Log in to continue with
              ClockPath.
            </p>
            <div className="h-[6rem] flex items-center justify-center">
              <button
                className={`${open_sans.className} bg-[#6200EE] font-semibold text-[16px] md:text-[18px] rounded-xl text-white h-[4rem] w-full max-w-[28rem]`}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSuccessMessage;
