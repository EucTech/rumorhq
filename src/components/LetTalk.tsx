import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { FaEnvelope } from "react-icons/fa";
import { dm_sans, inter } from "@/font";

const LetTalk = () => {
  return (
    <div className="w-full h-fit flex flex-col gap-6 items-start justify-center bg-[#BF91F9] py-16 px-5 sm:px-10 md:px-30">
      <h1 className={` text-[45px] text-white font-extrabold ${dm_sans.className} `}>Let's Talk</h1>
      <p className={` w-full sm:w-[80%] md:w-[70%] xl:w-[50%] text-[16px] text-white ${inter.className} `}>
        Go borderless on mobile! Download the app and sign up to enjoy managing
        your bills and utilities from anywhere in the world.
      </p>
      <Link href="#">
        <Button className="flex items-center gap-5 cursor-pointer bg-[#191919] text-white hover:bg-[#191919]/80 transition-colors duration-300 !px-6 py-8 rounded-md">
          <FaEnvelope className="text-[#E1E8ED] size-7" />
          <p className={`text-[16px] font-[400] ${inter.className}`}>support@rumorhq.com</p>
        </Button>
      </Link>
    </div>
  );
};

export default LetTalk;
