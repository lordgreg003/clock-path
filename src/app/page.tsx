import Image from "next/image";
import {
  coustard,
  open_sans,
  playfair,
  playfair_Display,
} from "./ui/fonts/fonts";
import styles from "@/app/ui/home.module.css";
import Link from "next/link";

export default function MyHeader() {
  return (
    <>
      <header className=" p-[2em_0] border-b border-gray-300">
        <div className="w-[90%] m-[0_auto]">
          <nav className="flex  items-center *:w-[90%] ">
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
            <div className="hidden md:flex md:*:flex-1 md:gap-5 ">
              <Link
                href="/contactUs"
                className="border-2 border-[#6200EE] p-[.5em_1em] rounded-xl text-[#6200EE]"
              >
                Contact Us
              </Link>
              <Link
                href="/login"
                className="bg-[#6200EE] text-white p-[.5em_1.5em] rounded-xl"
              >
                Login
              </Link>
            </div>
            <button className="lg:hidden p-2 bg-red-500">
              <Image
                src="/images/icons/menu.svg"
                width={6}
                height={6}
                alt="logo for navigation"
                className="w-6 h-6 "
              />
            </button>
          </nav>
        </div>
      </header>
      <section>
        <div className={`${styles.my_element} `}>
          <div className="w-[80%] m-[0_auto] p-[3em_0]">
            <div className="space-y-10 ">
              <div className="text-center">
                <p
                  className={`${playfair_Display.className} font-bold text-2xl md:text-5xl `}
                >
                  Effortless Time Tracking and Payroll Management for Modern
                  Workplaces
                </p>
                <p
                  className={`${open_sans.className} font-normal text-[#5C5C5C] text-[2rem]`}
                >
                  Clock in, manage out-of-office requests, and streamline
                  payroll—all in one intuitive app
                </p>
              </div>
              <div className="md:space-y-48 xl:space-y-48">
                <div className="text-center space-x-3">
                  <button
                    className={`${open_sans.className} bg-[#6200EE] border-2 border-[#6200EE] text-white font-semibold p-[.5em_2.5em] rounded-xl `}
                  >
                    Get Started
                  </button>
                  <button
                    className={`${open_sans.className} border-2 border-[#6200EE] text-[#6200EE] font-semibold p-[.5em_2.5em] rounded-xl`}
                  >
                    Schedule a Demo
                  </button>
                </div>
                {/* Grid container with bottom alignment for images */}
                <div className="grid place-items-center h-[400px]">
                  <div className="self-end">
                    {/* Large screen image */}
                    <Image
                      src="/images/Group 39924.svg"
                      width={1282}
                      height={940}
                      alt="image of different clockpath screens"
                      className="mx-auto hidden sm:block max-w-[100%]"
                    />
                    {/* Small screen image */}
                    <Image
                      src="/images/smallscrn.svg"
                      width={362}
                      height={270}
                      alt="image of different clockpath screens"
                      className="mx-auto block sm:hidden"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
