import { Images } from "@/assets";
import { dm_sans, instrument_sans, inter } from "@/font";
import Image from "next/image";
import React from "react";
import { GoDotFill } from "react-icons/go";

const CreatorServices = () => {
  return (
    <div className="w-full  flex flex-col lg:flex-row items-start justify-center gap-20 bg-[#fff] py-10 sm:py-20 px-5 sm:px-10 xl:px-20">
      <div className=" w-full sm:w-[80%] md:w-[70%] flex-1 flex flex-col  items-start gap-10 sm:gap-16">
        <div className="flex flex-1 flex-col items-start gap-6 mb-2">
          <div className="flex items-center sm:gap-5 gap-3 text-tcolor py-2 px-6 rounded-4xl  bg-[#71391E0F] font-bold text-[20px]">
            <GoDotFill className="text-[30px]" />
            <p className={`  ${dm_sans.className} `}>Figure how to use</p>
          </div>
          <p
            className={`text-black text-[26px] tracking-tight sm:text-[35px] xl:text-[40px] font-bold ${dm_sans.className}`}
          >
            Our end to end <span className="text-tcolor">Process</span>
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 ">
          <div className=" bg-[#2D38A81A] size-[4rem] sm:size-[6rem] flex items-center justify-center rounded-full">
            <Image
              src={Images.icon1}
              alt="icon"
              width={500}
              height={500}
              className="size-4 sm:size-6"
            />
          </div>
          <div className="flex-1 flex flex-col items-start gap-3 sm:gap-6">
            <h1
              className={` text-[20px] font-bold ${instrument_sans.className}`}
            >
              Share your Brief
            </h1>
            <p className={` text-[#3B3B3B] text-[15px] ${inter.className} `}>
              Post your job description and let us know what you&apos;re looking
              for.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 ">
          <div className=" bg-[#2D38A81A] size-[4rem] sm:size-[6rem] flex items-center justify-center rounded-full">
            <Image
              src={Images.icon1}
              alt="icon"
              width={500}
              height={500}
              className="size-4 sm:size-6"
            />
          </div>
          <div className="flex-1 flex flex-col items-start gap-3 sm:gap-6">
            <h1
              className={` text-[20px] font-bold ${instrument_sans.className}`}
            >
              Match
            </h1>
            <p className={` text-[#3B3B3B] text-[15px] ${inter.className} `}>
              Our AI instantly matches you to top recommendations so you can
              start hiring.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 ">
          <div className=" bg-[#2D38A81A] size-[4rem] sm:size-[6rem] flex items-center justify-center rounded-full">
            <Image
              src={Images.icon1}
              alt="icon"
              width={500}
              height={500}
              className="size-4 sm:size-6"
            />
          </div>
          <div className="flex-1 flex flex-col items-start gap-3 sm:gap-6">
            <h1
              className={` text-[20px] font-bold ${instrument_sans.className}`}
            >
              Hire
            </h1>
            <p className={` text-[#3B3B3B] text-[15px] ${inter.className} `}>
              Choose your hire from your recommendations or list of applicants!
            </p>
          </div>
        </div>
      </div>

      <Image
        src={Images.step1}
        alt="person image"
        width={1000}
        height={1000}
        className=" w-full sm:w-[450px] xl:w-[500px] 2xl:w-[500px]"
      />
    </div>
  );
};

export default CreatorServices;
