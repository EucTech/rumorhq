import { Images } from "@/assets";
import { dm_sans, inter } from "@/font";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { GoDotFill } from "react-icons/go";

const SimpleStep = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-20 py-10 px-5 sm:px-10 lg:px-20 xl:px-30 2xl:px-40 bg-[#000]">
      <div className="w-full flex flex-col items-center justify-center text-center gap-6">
        <Fade
          triggerOnce
          fraction={0.1}
          duration={1000}
          direction="up"
          delay={400}
          className="  flex flex-col items-center text-center justify-center gap-6"
        >
          <p
            className={`w-fit flex items-center gap-4 font-bold text-[12px] text-tcolor bg-[#FFF6F0] px-5 py-1 rounded-4xl  ${inter.className} `}
          >
            Packed with powerful features 🔥
          </p>
          <h1
            className={` leading-[1.2] text-white text-[30px] sm:text-[35px] font-bold ${dm_sans.className}`}
          >
            Go viral with
            <span className="text-tcolor">3 simple step</span>
          </h1>
          <p
            className={`sm:w-[95%] md:w-[70%] text-[#fff] text-[15px] font-normal ${inter.className} `}
          >
            Hackathons allow you to launch your own custom hiring competition
            and instantly attract real, skilled applicants who submit their work
            within hours.
          </p>
        </Fade>
      </div>
      <div className="w-full flex flex-col-reverse lg:flex-row lg:items-start justify-center gap-20">
        <div className="flex flex-1 flex-col items-start gap-10">
            <div className="flex items-center sm:gap-5 gap-3 text-tcolor font-bold text-[26px]"><GoDotFill className="" /><p className={`${dm_sans.className}`}>Figure how to use</p></div>
            <p className={`text-white text-[26px] sm:text-[35px] md:text-[40px] font-bold ${dm_sans.className}`}>Our end to end <span className="text-tcolor">Process</span></p>
        </div>

        <div className="">
            <Image src={Images.step1} alt="steps image" height={1000} width={1000} className=" mx-auto size-full sm:size-[80%] lg:size-full" />
        </div>
      </div>
    </div>
  );
};

export default SimpleStep;
