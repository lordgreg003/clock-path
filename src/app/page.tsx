import Image from "next/image";
import { coustard, playfair } from "./ui/fonts/fonts";

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
              className={`${playfair.className} flex gap-2 justify-evenly text-[1.5rem]`}
            >
              <li className="text-[#6200EE] font-bold ">Home</li>
              <li className="font-normal w-[50%]">Why Choose ClockPath</li>
              <li className="font-normal ">Pricing</li>
            </ul>
            <div className="flex *:flex-1 gap-5">
              <button className="border-2 border-[#6200EE] p-[.5em_1em] rounded-xl text-[#6200EE]">
                Contact Us
              </button>
              <button className="bg-[#6200EE] text-white p-[.5em_1.5em] rounded-xl">
                Login
              </button>
            </div>
          </nav>
        </div>
      </header>
      <section>
        {" "}
        <div className="bg-[url('/images/Doodle Pattern Palette 2.svg')] bg-cover bg-center bg-no-repeat h-full">
          hello world
        </div>
      </section>
    </>
  );
}
