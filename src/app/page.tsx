import Image from "next/image";
import {
  coustard,
  open_sans,
  playfair,
  playfair_Display,
} from "@/ui/fonts/fonts";
import styles from "@/ui/home.module.css";
import Link from "next/link";
import React from "react";

export default function MyHeader() {
  return (
    <>
      <header className="p-[2em_0] border-b border-gray-300">
        <nav className="w-[90%] m-[0_auto] max-w-[1629px]">
          <div className="flex gap-2 lg:gap-0 justify-between items-center lg:*:w-[90%]">
            <div className="flex gap-2">
              <Image
                src="/images/icons/clock.svg"
                width={39}
                height={39}
                alt="clockpath logo"
              />
              <p className={`${coustard.className} antialiased text-[2rem]`}>
                ClockPath
              </p>
            </div>

            <ul
              className={`${playfair.className} hidden lg:flex lg:gap-2 lg:justify-evenly text-[1.5rem]`}
            >
              <li className="text-[#6200EE] font-bold ">Home</li>
              <li className="font-normal w-[50%]">Why Choose ClockPath</li>
              <li className="font-normal ">Pricing</li>
            </ul>
            <div className="hidden lg:flex lg:*:flex-1 lg:gap-5 ">
              <Link
                href="/contactUs"
                className="border-2 border-[#6200EE] p-[.5em_1em] rounded-xl text-[#6200EE] text-center"
              >
                Contact Us
              </Link>
              <Link
                href="/login"
                className="bg-[#6200EE] text-white p-[.5em_1.5em] rounded-xl text-center"
              >
                Login
              </Link>
            </div>
            <button className="lg:hidden w-12 p-2">
              <Image
                src="/images/icons/menu.svg"
                width={6}
                height={6}
                alt="logo for navigation"
                className="w-8 h-8 "
              />
            </button>
          </div>
        </nav>
      </header>
      <main>
        <section className={`${styles.my_element} `}>
          <div className="w-[80%] m-[0_auto] pt-[5em] ">
            <div className="space-y-10 leading-tight">
              <div className="text-center space-y-5">
                <h1
                  className={`${playfair_Display.className} font-bold text-xl sm:text-3xl md:text-5xl `}
                >
                  Effortless{" "}
                  <span className="z-0 relative">
                    <span className="before:block before:absolute before:left-0 before:bottom-[0.15em] before:h-[0.40em] before:w-full before:bg-[#FFCF88] before:z-[-10] whitespace-nowrap">
                      Time Tracking
                    </span>
                  </span>{" "}
                  and{" "}
                  <span className="z-0 relative">
                    <span className="before:block before:absolute before:left-0 before:bottom-[0.15em] before:h-[0.40em] before:w-full before:bg-[#FFCF88] before:z-[-10] whitespace-nowrap">
                      Payroll Management
                    </span>
                  </span>{" "}
                  for Modern Workplaces
                </h1>
                <p
                  className={`${open_sans.className} font-normal text-[#5C5C5C] text-xl sm:text-[2rem]`}
                >
                  Clock in, manage out-of-office requests, and streamline
                  payroll—all in one intuitive app
                </p>
              </div>
              <div className="flex flex-col items-center space-y-12 md:space-y-48 xl:space-y-48">
                {/* Buttons Section */}
                <div className="text-center space-y-5 sm:space-y-0 sm:space-x-3 flex flex-col sm:flex-row items-center">
                  <button
                    className={`${open_sans.className} bg-[#6200EE] border-2 border-[#6200EE] text-white font-semibold p-[.5em_2.5em] rounded-xl`}
                  >
                    Get Started
                  </button>
                  <button
                    className={`${open_sans.className} border-2 border-[#6200EE] text-[#6200EE] font-semibold p-[.5em_2.5em] rounded-xl sm:ml-3`}
                  >
                    Schedule a Demo
                  </button>
                </div>
                <div className="flex h-[350px]">
                  {/* Image Section */}
                  <div className=" self-end">
                    {/* Large screen image */}
                    <Image
                      src="/images/Group 39924.svg"
                      width={1282}
                      height={940}
                      alt="image of different clockpath screens"
                      className=" hidden sm:block"
                    />
                    {/* Small screen image */}
                    <Image
                      src="/images/smallscrn.svg"
                      width={362}
                      height={270}
                      alt="image of different clockpath screens"
                      className=" mx-auto block sm:hidden"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="p-[4em_0]">
          <div className="w-[90%] m-[0_auto] max-w-[1750px]">
            <div className="space-y-20 md:space-y-0 md:flex md:justify-between md:gap-10">
              <div className="space-y-4 leading-tight">
                <div className="">
                  <h1
                    className={`${playfair_Display.className} font-bold text-[1.5rem] sm:text-[2rem] text-center md:text-left`}
                  >
                    <div className="relative inline-block whitespace-nowrap">
                      <span className="before:block before:absolute before:left-0 before:bottom-[0.15em] before:h-[0.40em] before:w-full before:bg-[#FFCF88] before:z-[-10]">
                        Time Tracking{" "}
                      </span>
                    </div>
                    <div className="relative inline-block">
                      <span className="before:block before:absolute before:left-0 before:bottom-[0.15em] before:h-[0.40em] before:w-full before:bg-[#FFCF88] before:z-[-10]">
                        Simplified
                      </span>
                    </div>
                  </h1>
                  <p
                    className={`${open_sans.className} font-semibold text-[1.5rem] text-[#5C5C5C] text-center md:text-left`}
                  >
                    Track Time, Stay Efficient
                  </p>
                </div>
                <div className="space-y-5">
                  <div
                    className={`${open_sans.className} font-normal text-[1rem] text-[#5C5C5C] flex gap-5 mt-[3em] md:mt-0`}
                  >
                    <Image
                      src="/images/Frame 1618868008.png"
                      width={48}
                      height={48}
                      alt="a clock logo"
                      className="self-start"
                    />
                    <p className="w-[50%]  max-w-[700px] ">
                      Employees can clock in and out with ease using the
                      ClockPath mobile app
                    </p>
                  </div>{" "}
                  <div
                    className={`${open_sans.className} font-normal text-[1rem] text-[#5C5C5C] flex gap-5`}
                  >
                    {" "}
                    <Image
                      src="/images/Frame 1618868008 (1).png"
                      width={48}
                      height={48}
                      alt="a clock logo"
                      className="self-start"
                    />
                    <p className="w-[50%] max-w-[700px]">
                      GPS-based manual entries ensure accuracy for remote teams
                    </p>
                  </div>{" "}
                  <div
                    className={`${open_sans.className} font-normal text-[1rem] text-[#5C5C5C] flex gap-5`}
                  >
                    <div>
                      {" "}
                      <Image
                        src="/images/Frame 1618868008 (2).png"
                        width={48}
                        height={48}
                        alt="a clock logo"
                        className="self-start"
                      />
                    </div>
                    <p className="w-[50%]">
                      View detailed clock-in and clock-out histories
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-[#EFE6FD] rounded-xl h-[400px] flex justify-center">
                  {" "}
                  <Image
                    src="/images/Dashboard.png"
                    width={572}
                    height={407}
                    alt="a clock logo"
                    className="self-end"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-20 md:space-y-0 md:flex md:justify-between md:gap-10 bg-green-500">
              <div>
                {" "}
                <div className="bg-[#EFE6FD] rounded-xl h-[400px] flex justify-center">
                  {" "}
                  <Image
                    src="/images/Dashboard.png"
                    width={572}
                    height={407}
                    alt="a clock logo"
                    className="self-end"
                  />
                </div>
              </div>
              <div className="space-y-4 leading-tight bg-blue-500">
                <div className="">
                  <h1
                    className={`${playfair_Display.className} font-bold text-[1.5rem] sm:text-[2rem] text-center md:text-left`}
                  >
                    <div className="relative inline-block whitespace-nowrap">
                      <span className="before:block before:absolute before:left-0 before:bottom-[0.15em] before:h-[0.40em] before:w-full before:bg-[#FFCF88] before:z-[-10]">
                        Time Tracking{" "}
                      </span>
                    </div>
                    <div className="relative inline-block">
                      <span className="before:block before:absolute before:left-0 before:bottom-[0.15em] before:h-[0.40em] before:w-full before:bg-[#FFCF88] before:z-[-10]">
                        Simplified
                      </span>
                    </div>
                  </h1>
                  <p
                    className={`${open_sans.className} font-semibold text-[1.5rem] text-[#5C5C5C] text-center md:text-left`}
                  >
                    Track Time, Stay Efficient
                  </p>
                </div>
                <div className="space-y-5">
                  <div
                    className={`${open_sans.className} font-normal text-[1rem] text-[#5C5C5C] flex gap-5 mt-[3em] md:mt-0`}
                  >
                    <Image
                      src="/images/Frame 1618868008.png"
                      width={48}
                      height={48}
                      alt="a clock logo"
                      className="self-start"
                    />
                    <p className="w-[50%]  max-w-[700px] ">
                      Employees can clock in and out with ease using the
                      ClockPath mobile app
                    </p>
                  </div>{" "}
                  <div
                    className={`${open_sans.className} font-normal text-[1rem] text-[#5C5C5C] flex gap-5`}
                  >
                    {" "}
                    <Image
                      src="/images/Frame 1618868008 (1).png"
                      width={48}
                      height={48}
                      alt="a clock logo"
                      className="self-start"
                    />
                    <p className="w-[50%] max-w-[700px]">
                      GPS-based manual entries ensure accuracy for remote teams
                    </p>
                  </div>{" "}
                  <div
                    className={`${open_sans.className} font-normal text-[1rem] text-[#5C5C5C] flex gap-5`}
                  >
                    <div>
                      {" "}
                      <Image
                        src="/images/Frame 1618868008 (2).png"
                        width={48}
                        height={48}
                        alt="a clock logo"
                        className="self-start"
                      />
                    </div>
                    <p className="w-[50%]">
                      View detailed clock-in and clock-out histories
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-20 md:space-y-0 md:flex md:justify-between md:gap-10">
              <div className="space-y-4 leading-tight">
                <div className="">
                  <h1
                    className={`${playfair_Display.className} font-bold text-[1.5rem] sm:text-[2rem] text-center md:text-left`}
                  >
                    <div className="relative inline-block whitespace-nowrap">
                      <span className="before:block before:absolute before:left-0 before:bottom-[0.15em] before:h-[0.40em] before:w-full before:bg-[#FFCF88] before:z-[-10]">
                        Time Tracking{" "}
                      </span>
                    </div>
                    <div className="relative inline-block">
                      <span className="before:block before:absolute before:left-0 before:bottom-[0.15em] before:h-[0.40em] before:w-full before:bg-[#FFCF88] before:z-[-10]">
                        Simplified
                      </span>
                    </div>
                  </h1>
                  <p
                    className={`${open_sans.className} font-semibold text-[1.5rem] text-[#5C5C5C] text-center md:text-left`}
                  >
                    Track Time, Stay Efficient
                  </p>
                </div>
                <div className="space-y-5">
                  <div
                    className={`${open_sans.className} font-normal text-[1rem] text-[#5C5C5C] flex gap-5 mt-[3em] md:mt-0`}
                  >
                    <Image
                      src="/images/Frame 1618868008.png"
                      width={48}
                      height={48}
                      alt="a clock logo"
                      className="self-start"
                    />
                    <p className="w-[50%]  max-w-[700px] ">
                      Employees can clock in and out with ease using the
                      ClockPath mobile app
                    </p>
                  </div>{" "}
                  <div
                    className={`${open_sans.className} font-normal text-[1rem] text-[#5C5C5C] flex gap-5`}
                  >
                    {" "}
                    <Image
                      src="/images/Frame 1618868008 (1).png"
                      width={48}
                      height={48}
                      alt="a clock logo"
                      className="self-start"
                    />
                    <p className="w-[50%] max-w-[700px]">
                      GPS-based manual entries ensure accuracy for remote teams
                    </p>
                  </div>{" "}
                  <div
                    className={`${open_sans.className} font-normal text-[1rem] text-[#5C5C5C] flex gap-5`}
                  >
                    <div>
                      {" "}
                      <Image
                        src="/images/Frame 1618868008 (2).png"
                        width={48}
                        height={48}
                        alt="a clock logo"
                        className="self-start"
                      />
                    </div>
                    <p className="w-[50%]">
                      View detailed clock-in and clock-out histories
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-[#EFE6FD] rounded-xl h-[400px] flex justify-center">
                  {" "}
                  <Image
                    src="/images/Dashboard.png"
                    width={572}
                    height={407}
                    alt="a clock logo"
                    className="self-end"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
