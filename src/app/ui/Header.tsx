import React from "react";

import Image from "next/image";

import Link from "next/link";

const Header = () => {
  return (
    <nav className="h-screen bg-slate-900 w-full">
      <div className=" flex ">
        <div className="">
          <Image
            src="/images/icons/clock.svg"
            width={40}
            height={50}
            alt="clock-img"
          />
        </div>
        <div>
          <p className="font-coustard">ClockPath</p>
        </div>
      </div>
      <nav></nav>
      <div>
        <Link href={"login"}></Link>
        <Link href={"register"}></Link>
      </div>
    </nav>
  );
};

export default Header;
