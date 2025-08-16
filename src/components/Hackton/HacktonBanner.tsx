import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Images } from "@/assets";
import { inter, poppins } from "@/font";
import { FaEyeSlash } from "react-icons/fa";

const HacktonBanner = () => {
    const earned = 100;
  return (
    <div className="w-full flex items-center justify-center gap-4 :gap-16 flex-col lg:flex-row mt-[5em] ">
      <div className="w-full h-[305px] rounded-[20px] relative flex sm:flex-row flex-col items-center justify-center p-5 sm:p-8 overflow-hidden">
        <Image
          src={Images.hacktonHero}
          alt="Background"
          fill
          className="absolute inset-0 object-cover rounded-[20px] z-10"
        />

        <div className="z-20 flex flex-col items-start gap-5">
          <h3 className="font-clashDisplay-semibold text-[15px] text-[#fff]">Campaign</h3>
          <p className="font-sf text-[15px] font-[400] text-[#fff]">
            Join our global hackathon and earn bounties how to monetize and
            reach more audience through
          </p>
          <Button className={`w-full flex items-center cursor-pointer bg-[#6A0AE4] text-white hover:bg-[#6A0AE4]/80 transition-colors duration-300 px-10 py-5 gap-2 rounded-3xl ${inter.className}`}>
            <p className="text-[16px] font-[500]">Get Started</p>
          </Button>
        </div>

        <Image
          src={Images.hacktonImage}
          alt="Foreground"
          width={1000}
          height={1000}
          quality={100}
          className="z-20 mx-auto w-[150px] h-[150px] sm:w-[225px] lg:w-[419px] sm:h-[225px] object-cover"
        />
      </div>

      <div className="w-full lg:w-[40%] h-[200px] rounded-[20px] relative flex items-center justify-between px-8 overflow-hidden">
        <Image
          src={Images.hacktonHero}
          alt="Background"
          fill
          className="absolute inset-0 object-cover rounded-[20px] z-10"
        />

        <div className="z-20 w-full flex flex-col items-center justify-center gap-4">
          <h3 className="font-[400] text-[#FFFFFF]/70 font-sf text-[14px]">Total Earn</h3>
          <div className="w-full font-[500] text-[24px] flex items-center justify-center gap-10 text-[#FFFFFF]">
            <p className={` ${poppins.className}`}>USDT {earned}</p>
            <FaEyeSlash />
          </div>
          <Button className="flex items-center cursor-pointer bg-[#6A0AE4] text-white hover:bg-[#6A0AE4]/80 transition-colors duration-300 px-10 py-5 gap-2 rounded-3xl">
            <p className={`text-[16px] font-[500] ${poppins.className}`}>Withdraw Fund</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HacktonBanner;
