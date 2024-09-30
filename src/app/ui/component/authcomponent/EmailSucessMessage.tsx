"use client";
import React from "react";
import Image from "next/image";
import { playfair, open_sans } from "@/app/ui/fonts/fonts";

const EmailSucessMessage = () => {
  return (
    <div className=" h-[40rem] bg-primary-primary50   md:h-[39.5rem] w-full flex items-center justify-center">
      <div className="w-full bg-white flex flex-col items-center justify-center   max-w-[39rem] h-[30rem]">
        <div className="  flex flex-col items-center justify-center w-[35rem] space-y-4 h-[25rem]">
          <div className="w-[90%] flex justify-center items-center h-1/3 ">
            <div>
              <Image
                src="/images/icons/Vector.svg"
                alt="vector image"
                width={50}
                height={40}
              />
            </div>
          </div>
          <div className="w-[90%] h-1/2  text-center">
            <div>
              <h1
                className={`${playfair.className} font-bold text-[24px] text-lineHeight-[31.99px] text-[#333333]`}
              >
                Email Verified Successfully!{" "}
              </h1>
              <p
                className={`${open_sans.className} font-normal text-[16px] text-lineHeight-[21.79px] text-[#5C5C5C]`}
              >
                Your email has been successfully verified. login to continue
                with ClockPath
              </p>
            </div>
            <div className="h-[6rem] flex items-center justify-center">
              <button
                className={`${open_sans.className} bg-[#6200EE] font-semibold text-[18px] rounded-xl text-white h-[4rem] w-full  max-w-[28rem]`}
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

export default EmailSucessMessage;
