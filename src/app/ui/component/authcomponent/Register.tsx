"use client";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // Importing eye icons
import React from "react";
import { playfair, open_sans } from "@/app/ui/fonts/fonts";
import Link from "next/link";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false); // State to handle password visibility
  const [password, setPassword] = useState(""); // State for password input
  const [passwordError, setPasswordError] = useState(""); // State for password error
  const [confirmPassword, setConfirmPassword] = useState(""); // State for confirm password input
  const [confirmPasswordError, setConfirmPasswordError] = useState(""); // State for confirm password error

  // Handle password change and validation
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputPassword = e.target.value;

    // Restrict to 8 characters max
    if (inputPassword.length <= 8) {
      setPassword(inputPassword);
    }

    // Show error only when the password length is exactly 8 characters
    if (inputPassword.length === 8) {
      setPasswordError("Minimum of 8 characters");
    } else {
      setPasswordError(""); // Clear error when it's not exactly 8 characters
    }
  };

  // Handle confirm password change and validation
  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputConfirmPassword = e.target.value;

    // Restrict to 8 characters max
    if (inputConfirmPassword.length <= 8) {
      setConfirmPassword(inputConfirmPassword);
    }

    // Check if confirm password matches the password
    if (
      inputConfirmPassword.length === 8 &&
      inputConfirmPassword !== password
    ) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError(""); // Clear error when it matches or is not exactly 8 characters
    }
  };

  return (
    <div className="bg-primary-primary50 h-[55rem]  w-full flex flex-col items-center justify-center">
      <div className="w-full bg-white flex justify-center items-center  max-w-[39rem] h-[50rem] md:h-[53rem]">
        <div className="w-[95%] flex flex-col justify-center items-center space-y-2 h-[49rem] md:h-[50rem]">
          <div className="w-[90%] h-[20%] text-center shrink">
            <h1
              className={`${playfair.className} font-bold text-[28px] text-lineHeight-[37.32px] text-[#333333]`}
            >
              Create Your Account
            </h1>
            <p
              className={`${open_sans.className} font-normal text-[16px] text-[#5C5C5C] text-lineHeight-[21.79px] flex-shrink`}
            >
              Enter your credentials to create your HR Admin account
            </p>
          </div>
          <div className="w-[90%] h-[80%]">
            <div className="h-[8rem] w-full">
              <h1
                className={`${open_sans.className} font-semibold text-[16px] text-lineHeight-[21.79px]`}
              >
                Full Name
              </h1>
              <div className="h-[5rem] relative border-2 border-[#CCCCCC] rounded-[16px]">
                <input
                  className="w-full transform translate-y-1 h-[4rem] pl-4 text-[14px] absolute outline-none rounded-[16px]"
                  type="text"
                  placeholder="E.g John Doe"
                />
              </div>
            </div>
            <div className="h-[8rem] w-full">
              <h1
                className={`${open_sans.className} font-semibold text-[16px] text-lineHeight-[21.79px]`}
              >
                Email Address
              </h1>
              <div className="h-[5rem] relative border-2 border-[#CCCCCC] rounded-[16px]">
                <input
                  className="w-full transform translate-y-1 h-[4rem] pl-4 text-[14px] absolute outline-none rounded-[16px]"
                  type="email"
                  placeholder="E.g JohnDoe@gmail.com"
                />
              </div>
            </div>
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
                  value={password}
                  onChange={handlePasswordChange} // Add change handler
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
              {/* Conditionally render the error message */}
              {passwordError && (
                <p className="text-red-500 text-right text-sm mt-1">
                  {passwordError}
                </p>
              )}
            </div>
            <div className="h-[8rem] w-full">
              <h1
                className={`${open_sans.className} font-semibold text-[16px] text-lineHeight-[21.79px]`}
              >
                Confirm Password
              </h1>
              <div className="relative h-[5rem] rounded-[16px] border-2 border-[#CCCCCC]">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  className="w-full h-[4rem] transform translate-y-1 pl-4 text-[14px] absolute outline-none rounded-[16px]"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange} // Add change handler
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
              {/* Conditionally render the error message */}
              {confirmPasswordError && (
                <p className="text-red-500 text-right text-sm mt-1">
                  {confirmPasswordError}
                </p>
              )}
            </div>
          </div>
          <div className="h-[6rem] space-y-2 w-[95%] flex flex-col items-center justify-center">
            <button
              className={`${open_sans.className} bg-[#6200EE] font-semibold text-[18px] rounded-xl text-white h-[4rem] w-full  max-w-[28rem]`}
            >
              Sign Up
            </button>
            <div>
              <p
                className={`${open_sans.className} text-[12px] font-normal text-lineHeight-[16.34px] text-[#5C5C5C]`}
              >
                Already have an account?
                <span className="ml-3">
                  <Link
                    className={`${open_sans.className} font-semibold text-[12px] text-lineHeight-[16.34px] text-[#6200EE]`}
                    href={"/login"}
                  >
                    Login
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
