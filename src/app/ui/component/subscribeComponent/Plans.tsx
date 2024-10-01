"use client";
import React from "react";
import { playfair, open_sans } from "@/app/ui/fonts/fonts";

const Plans = () => {
  return (
    <div className="bg-primary-primary200 h-screen">
      <div className="h-[15%] bg-green-500 w-full"></div>
      <div className="h-[85%] flex justify-center items-center bg-red-500 w-full">
        <div className="w-[95%] flex flex-col justify-center gap-3 items-center h-[90%] bg-slate-400">
          <div className="bg-purple-600 text-center w-[60%] h-[20%]">
            <h1
              className={`${playfair.className} font-bold text-[36px] text-lineHeight-[47.99px] text-[#333333]`}
            >
              Choose your Subscription plan
            </h1>
            <p
              className={`${open_sans.className} font-normal text-[18px] text-lineHeight-[24.51px]  text-[#5C5C5C]`}
            >
              Select the subscription plan that best suits your needs and
              continue with ClockPath
            </p>
          </div>
          <div className="bg-blue-500 w-[80%] h-[75%]">
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
