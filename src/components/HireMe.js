import React from "react";
import Image from "next/image";
// import CircularText from "../../public/images/svgs/circular-text1.svg";
import Link from "next/link";
import { CircularText } from "./Icons";
const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute">
      <div className="w-48 h-auto flex items-center justify-center relative md:w-24 ">
        <CircularText
          className={
            "animate-spin animate-spin-slow fill-dark dark:fill-light dark:text-light"
          }
        />
        <Link
          href="mailto:phoebesu85@yahoo.com.tw"
          className="flex items-center justify-center
        absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border-solid border-dark rounded-full w-20 h-20 font-semibold hover:bg-opacity-[0.3] hover:text-dark
        
        dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
        
        md:w-12 md:h-12 md:text-[10px]"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
