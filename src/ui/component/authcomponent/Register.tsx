"use client";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import React from "react";
import { playfair, open_sans } from "@/ui/fonts/fonts";
import Link from "next/link";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputPassword = e.target.value;
    if (inputPassword.length <= 8) {
      setPassword(inputPassword);
    }
    setPasswordError(
      inputPassword.length === 8 ? "Minimum of 8 characters" : ""
    );
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputConfirmPassword = e.target.value;
    if (inputConfirmPassword.length <= 8) {
      setConfirmPassword(inputConfirmPassword);
    }
    setConfirmPasswordError(
      inputConfirmPassword.length === 8 && inputConfirmPassword !== password
        ? "Passwords do not match"
        : ""
    );
  };

  return (
    <div className="bg-white  md:bg-primary-primary50 h-[30rem] lg:h-[32rem] w-full flex items-center justify-center p-4">
      <div className="w-full bg-white flex justify-center items-center h-[31rem] max-w-[28rem] p-4 shadow-lg rounded-xl">
        <div className="w-full flex flex-col items-center space-y-4">
          <div className="w-full text-center">
            <h1
              className={`${playfair.className} font-bold text-[24px] text-[#333333]`}
            >
              Create Your Account
            </h1>
            <p
              className={`${open_sans.className} font-normal text-[14px] text-[#5C5C5C]`}
            >
              Enter your credentials to create your HR Admin account
            </p>
          </div>

          <div className="w-full space-y-4">
            <div>
              <h1
                className={`${open_sans.className} font-semibold text-[14px]`}
              >
                Full Name
              </h1>
              <div className="relative border-2 border-[#CCCCCC] rounded-lg">
                <input
                  className="w-full h-10 p-2 text-[14px] outline-none rounded-lg"
                  type="text"
                  placeholder="E.g John Doe"
                />
              </div>
            </div>

            <div>
              <h1
                className={`${open_sans.className} font-semibold text-[14px]`}
              >
                Email Address
              </h1>
              <div className="relative border-2 border-[#CCCCCC] rounded-lg">
                <input
                  className="w-full h-10 p-2 text-[14px] outline-none rounded-lg"
                  type="email"
                  placeholder="E.g JohnDoe@gmail.com"
                />
              </div>
            </div>

            <div>
              <h1
                className={`${open_sans.className} font-semibold text-[14px]`}
              >
                New Password
              </h1>
              <div className="relative border-2 border-[#CCCCCC] rounded-lg">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  className="w-full h-10 p-2 text-[14px] outline-none rounded-lg"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <span
                  className="absolute right-2 top-2/4 transform -translate-y-2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible className="text-2xl text-[#5F6774]" />
                  ) : (
                    <AiOutlineEye className="text-2xl text-[#5F6774]" />
                  )}
                </span>
              </div>
              {passwordError && (
                <p className="text-red-500 text-right text-sm mt-1">
                  {passwordError}
                </p>
              )}
            </div>

            <div>
              <h1
                className={`${open_sans.className} font-semibold text-[14px]`}
              >
                Confirm Password
              </h1>
              <div className="relative border-2 border-[#CCCCCC] rounded-lg">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  className="w-full h-10 p-2 text-[14px] outline-none rounded-lg"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
                <span
                  className="absolute right-2 top-2/4 transform -translate-y-2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible className="text-2xl text-[#5F6774]" />
                  ) : (
                    <AiOutlineEye className="text-2xl text-[#5F6774]" />
                  )}
                </span>
              </div>
              {confirmPasswordError && (
                <p className="text-red-500 text-right text-sm mt-1">
                  {confirmPasswordError}
                </p>
              )}
            </div>
          </div>

          <div className="w-full space-y-2 flex flex-col items-center">
            <button
              className={`${open_sans.className} bg-[#6200EE] font-semibold text-[16px] rounded-lg text-white h-12 w-full`}
            >
              Sign Up
            </button>
            <p className={`${open_sans.className} text-[12px] text-[#5C5C5C]`}>
              Already have an account?
              <Link
                href={"/login"}
                className="text-[#6200EE] ml-2 font-semibold"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
