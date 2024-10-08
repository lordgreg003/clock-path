"use client";
import { playfair, open_sans } from "@/app/ui/fonts/fonts";

const ForgottenPassword = () => {
  return (
    <div className="bg-white md:bg-primary-primary50 h- w-full h-[40rem] lg:h-[30rem] flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full bg-white flex flex-col justify-center items-center max-w-[36rem] lg:h-[70%] rounded-xl h-[59%]">
        <div className="w-full h-full space-y-4 flex flex-col justify-center items-center px-4">
          <div className="text-center">
            <h1
              className={`${playfair.className} font-bold text-[22px] text-[#333333] leading-[28px]`}
            >
              Forgot Your Password?
            </h1>
            <p
              className={`${open_sans.className} text-[#5C5C5C] font-normal text-[14px] leading-[20px]`}
            >
              Don't worry! Enter your email to receive instructions on how to
              reset your password.
            </p>
          </div>
          <div className="w-full">
            <div className="space-y-3 w-full">
              <h1
                className={`${open_sans.className} font-semibold text-[14px] leading-[20px]`}
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
            <div className="mt-6 flex items-center justify-center">
              <button
                className={`${open_sans.className} bg-[#6200EE] font-semibold text-[16px] rounded-lg text-white h-[3rem] w-full max-w-[26rem]`}
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
