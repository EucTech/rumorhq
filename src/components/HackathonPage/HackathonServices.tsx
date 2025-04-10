import { Images } from "@/assets";
import { instrument_sans, inter } from "@/font";
import Image from "next/image";
import React from "react";

const HackathonServices = () => {
  return (
    <div className="w-full  flex flex-col lg:flex-row items-startjustify-center gap-20 bg-[#fff] py-20 px-5 sm:px-10 lg:px-20">
      <div className=" w-full sm:w-[80%] md:w-[70%] flex-1 flex flex-col  items-start gap-6">
        <div className="flex flex-col items-start gap-">
          <Image
            src={Images.icon2}
            alt="person image"
            width={1000}
            height={1000}
            className="size-12"
          />
          <h1
            className={` text-[20px] font-bold mt-4 ${instrument_sans.className}`}
          >
            Create the Buzz
          </h1>
          <p className={` text-[#3B3B3B] text-[15px] ${inter.className} `}>
            We help you craft a creative, buzz-worthy brief.
          </p>
        </div>
        <div className="flex flex-col items-start gap-">
          <Image
            src={Images.icon3}
            alt="person image"
            width={1000}
            height={1000}
            className="size-12 "
          />
          <h1
            className={` text-[20px] font-bold mt-4 ${instrument_sans.className}`}
          >
            Creators Compete
          </h1>
          <p className={` text-[#3B3B3B] text-[15px] ${inter.className} `}>
            From TikTokers to designers to storytellers — they&apos;ll produce
            content around your brand, product, or mission.
          </p>
        </div>
        <div className="flex flex-col items-start gap-">
          <Image
            src={Images.icon4}
            alt="person image"
            width={1000}
            height={1000}
            className="size-12"
          />
          <h1
            className={` text-[20px] font-bold mt-4 ${instrument_sans.className}`}
          >
            The world watches.
          </h1>
          <p className={` text-[#3B3B3B] text-[15px] ${inter.className} `}>
            Content spreads. Engagement skyrockets. Your brand wins.
          </p>
        </div>
      </div>

      <Image
        src={Images.person1}
        alt="person image"
        width={1000}
        height={1000}
        className=" w-full sm:w-[500px] xl:w-[500px] 2xl:w-[600px]"
      />
    </div>
  );
};

export default HackathonServices;
