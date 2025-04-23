import Link from "next/link";
import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { dm_sans, inter } from "@/font";
import { Button } from "../ui/button";

const BrandsLetTalk = () => {
  return (
    <div className="w-full h-fit flex flex-col gap-6 items-start justify-center bg-[#BF91F9] py-16 px-5 sm:px-10 md:px-30">
      <h1
        className={` text-[45px] text-white font-extrabold ${dm_sans.className} `}
      >
        Let&apos;s Talk
      </h1>
      <p
        className={` w-full sm:w-[80%] md:w-[70%] xl:w-[50%] text-[16px] text-white ${inter.className} `}
      >
        Join 100+ creators and companies using rumour to hire all creative roles
        without the hassle.
      </p>
      <Link href="https://docs.google.com/forms/d/e/1FAIpQLScJm4k1ViHbzkuUyF6G7QAzcZPuH_UmyGABVJcRQ1CQ0e6nHw/viewform?usp=header">
        <Button className="flex items-center gap-5 cursor-pointer bg-[#191919] text-white hover:bg-[#191919]/80 transition-colors duration-300 !px-6 py-8 rounded-md">
          <FaEnvelope className="text-[#E1E8ED] size-7" />
          <p className={`text-[16px] font-[400] ${inter.className}`}>
            Book a Call
          </p>
        </Button>
      </Link>
    </div>
  );
};

export default BrandsLetTalk;
