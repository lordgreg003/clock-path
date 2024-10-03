"use client";
import React from "react";
import { open_sans, playfair_Display } from "@/app/ui/fonts/fonts";
import { FaArrowRight } from "react-icons/fa6";
import { GrStatusGood } from "react-icons/gr";
import Link from "next/link";

const Plans = () => {
  return (
    <div className="bg-primary-primary50 h-screen">
      <div className="h-[15%] flex items-center justify-end w-full">
        <div className="flex mr-10 justify-center items-center">
          <div
            className={`${open_sans.className} font-semibold text-[18px] text-lineHeight-[24.51px] text-[#6200EE]`}
          >
            Skip
          </div>
          <FaArrowRight className="text-[24px] text-[#6200EE]" />
        </div>
      </div>
      <div className="h-screen flex justify-center items-center  w-full">
        <div className="w-[95%] flex flex-col  gap-3 items-center h-screen">
          <div className=" p-2 text-center max-w-[50rem] mt-3">
            <h1
              className={`${playfair_Display} font-bold text-[#333333] 
             text-[20px] leading-[30px] sm:text-[30px] sm:leading-[36px] 
             md:text-[36px] md:leading-[47.99px] lg:text-[40px] lg:leading-[50px]`}
            >
              Choose your Subscription plan
            </h1>
            <p
              className={`${open_sans.className} font-normal text-[16px] 
      leading-[22px] sm:text-[18px] sm:leading-[24.51px] text-[#5C5C5C]`}
            >
              Select the subscription plan that best suits your needs and
              continue with ClockPath
            </p>
          </div>
          <div className=" flex flex-wrap w-full justify-center gap-6">
            <Link href={"/login"}>
              <div className="border-2 h-[20rem] w-[15rem] transform transition duration-300 hover:scale-110 cursor-pointer border-[#E0E0E0] hover:border-[#6200EE] rounded-xl">
                <h1
                  className={` ${open_sans.className} flex items-center rounded-t-xl font-normal text-[#6200EE] bg-[#EFE6FD] h-[20%] px-3 text-[18px]`}
                >
                  Current Plan
                </h1>
                <div className="flex  justify-center items-start h-[80%] w-full">
                  <div className=" flex flex-col space-y-3  h-[70%] w-[90%]">
                    <div className="">
                      <h1
                        className={`${open_sans} font-normal text-[24px] text-[#333333]`}
                      >
                        Free Plan
                      </h1>
                      <h2
                        className={`${open_sans} text-[#6200EE] text-[24px] text-lineHeight-[32.68px] font-bold`}
                      >
                        0 NGN
                        <span
                          className={`${open_sans} text-[#333333] text-[24px] text-lineHeight-[32.68px] font-bold`}
                        >
                          /
                        </span>
                        <span
                          className={`${open_sans} text-[#333333] font-normal text-[16px] text-lineHeight-[32.68px]`}
                        >
                          month
                        </span>
                      </h2>
                    </div>
                    <hr className="text-[#E0E0E0]" />
                    <div className="flex ">
                      <GrStatusGood className="mt-1" />
                      <p
                        className={`${open_sans.className} font-normal ttext-[18px] text-[#5C5C5C]`}
                      >
                        Manage up to 10 employees
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link href={"/login"}>
              <div className="border-2 border-[#E0E0E0] hover:border-[#6200EE] rounded-xl h-[20rem] w-[15rem] flex items-center justify-center transform transition duration-300 hover:scale-110 cursor-pointer">
                <div className="w-[90%] h-[80%] border-2 border-black">
                  <div className=""></div>
                  <div className=""></div>
                </div>
              </div>
            </Link>
            <Link href={"/login"}>
              <div className="border-2 border-[#E0E0E0] hover:border-[#6200EE] rounded-xl h-[20rem] w-[15rem] flex items-center justify-center transform transition duration-300 hover:scale-110 cursor-pointer">
                <div className="w-[90%] h-[80%] border-2 border-black"></div>
              </div>
            </Link>
            <Link href={"/login"}>
              <div className="border-2 border-[#E0E0E0] hover:border-[#6200EE] rounded-xl h-[20rem] w-[15rem] flex items-center justify-center transform transition duration-300 hover:scale-110 cursor-pointer">
                <div className="w-[90%] h-[80%] border-2 border-black"></div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
