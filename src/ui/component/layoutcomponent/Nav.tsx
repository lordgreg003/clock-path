"use client";
import Image from "next/image";
import { coustard } from "@/ui/fonts/fonts";

const Nav = () => {
  return (
    <div className="flex h-[6rem]   items-center justify-center">
      <Image
        src="/images/icons/clock.svg"
        width={39}
        height={39}
        alt="clockpath logo"
      />
      <p className={`${coustard.className} font-normal text-[18.26px]`}>
        ClockPath
      </p>
    </div>
  );
};

export default Nav;