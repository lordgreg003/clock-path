"use client";
import { playfair, open_sans } from "@/app/ui/fonts/fonts";

const ForgottenPassword = () => {
  return (
    <div className="bg-white md:bg-primary-primary50 h-[40rem]    md:h-[39.5rem] w-full flex flex-col items-center justify-center">
      <div className="w-full bg-white  flex flex-col justify-center items-center  max-w-[39rem] h-[30rem]">
        <div className=" w-[30rem] h-[25rem]  space-y-3 flex flex-col justify-center items-center">
          <div className=" h-1/3 w-[92%] text-center ">
            <h1
              className={`${playfair.className} font-bold text-[24px] text-[#333333] text-lineHeight-[31.99px]`}
            >
              Forgot Your Password?
            </h1>
            <p
              className={`${open_sans.className} text-[#5C5C5C] font-normal text-[16px] text-lineHeight-[21.79px]`}
            >
              Don't worry! Enter your email to receive instructions on how to
              reset your password
            </p>
          </div>
          <div className="  h-1/1  w-[92%] ">
            <div className="h-[8rem] w-full">
              <h1
                className={`${open_sans.className} font-semibold text-[16px] text-lineHeight-[21.79px]`}
              >
                Email Address
              </h1>
              <div className="h-[5rem] relative border-2 border-[#CCCCCC] rounded-[16px] ">
                <input
                  className="w-full transform translate-y-1 h-[4rem] pl-4 text-[14px] absolute outline-none rounded-[16px]"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="h-[6rem] flex items-center justify-center">
              <button
                className={`${open_sans.className} bg-[#6200EE] font-semibold text-[18px] rounded-xl text-white h-[4rem] w-full  max-w-[28rem]`}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgottenPassword;
