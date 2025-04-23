import { Button } from "@/components/ui/button";
import { inter } from "@/font";
import Link from "next/link";
import React from "react";
import { Fade } from "react-awesome-reveal";

const TalentPoolHeroSection = () => {
  return (
    <div className=" relative overflow-hidden w-full min-h-[550px] flex flex-col gap-10 text-center items-center justify-center text-[#FFF6F0] bg-[#000] py-20 px-5 sm:px-20 ">
      <Fade
        damping={0.5}
        triggerOnce
        fraction={0.1}
        duration={1000}
        delay={200}
        direction="up"
        className=""
      >
        <p
          className={`w-fit flex items-center gap-4 font-bold text-[14px] sm:text-[15px] text-tcolor bg-[#121515] px-2 sm:px-5 py-2 rounded-lg  ${inter.className} `}
        >
          100+ Companies and brand seeking to hire
        </p>
      </Fade>

      <Fade
        damping={0.5}
        triggerOnce
        fraction={0.1}
        duration={1000}
        delay={300}
        direction="up"
        className="w-full lg:w-[90%]"
      >
        <h1 className="w-full  text-[35px] sm:text-[50px] xl:text-[70px] 2xl:text-[90px] text-center font-lato font-[600] leading-[1.1] tracking-tight">
          The Hiring Platforms <br /> top companies & creators use
        </h1>
      </Fade>
      <Fade
        damping={0.5}
        triggerOnce
        fraction={0.1}
        duration={1000}
        delay={400}
        direction="up"
        className="w-full sm:w-[80%] md:w-[70%] lg:w-[50%]"
      >
        <p className="text-[17px] sm:text-[20px] text-center font-normal font-lato">
          Work with the world's biggest creators, companies whether that's
          freelance or full-time role.
        </p>
      </Fade>
      <Fade
        damping={0.5}
        triggerOnce
        fraction={0.1}
        duration={1000}
        delay={500}
        direction="up"
        className=""
      >
        <div className=" flex items-center justify-center flex-wrap gap-6">
          <Link
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSeG7bng5pEu0hgLzlFtSt9HfUup-MI4qzwH7D0P9gMtWdNhjQ/viewform?usp=header"
          >
            <Button className="flex items-center cursor-pointer bg-tcolor text-white hover:bg-tcolor/80 transition-colors duration-300 px-20 py-6 gap-2 rounded-3xl">
              <p className="text-[16px] font-[500]">Apply</p>
            </Button>
          </Link>
        </div>
      </Fade>

      <div className=" absolute w-[30em] h-[30em] bg-[#BF91F9]/20 blur-3xl rounded-full translate-x-[650px]   -top-[250px]  "></div>
      <div className=" absolute w-[30em] h-[30em] bg-[#DBCDFFBA]/15 blur-3xl rounded-full -translate-x-[630px]   top-[100px]  "></div>
    </div>
  );
};

export default TalentPoolHeroSection;
