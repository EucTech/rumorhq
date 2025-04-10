import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { dm_sans, inter } from "@/font";

const GetStarted = () => {
  return (
    <div className=" w-full text-center flex flex-col items-center justify-center bg-[#000] text-white gap-8 py-16 px-5 sm:px-10 lg:px-20">
      <div className=" w-full sm:w-[80%] md:w-[70%] lg:w-[60%] flex flex-col items-center justify-center gap-5">
        <h1 className={`text-[35px] sm:text-[45px] font-bold ${dm_sans.className}`}>
          Ready to Get <span className="text-[#FDDE90]">Started</span>?
        </h1>
        <p className={`text-[14px] font-normal ${inter.className}`}>
          Sign up now to unlock the power of rideshare advertising with Motion
          365. Join our community of forward-thinking brands and drivers and
          experience the future of advertising today.
        </p>
      </div>

      <Link href="#">
          <Button className="flex items-center cursor-pointer bg-tcolor text-black hover:bg-tcolor/80 transition-colors duration-300 px-10 py-5 gap-2 rounded-3xl">
            <p className={`text-[15px] font-[400] ${inter.className}`}>Sign up Today!</p>
          </Button>
        </Link>
    </div>
  );
};

export default GetStarted;
