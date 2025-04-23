import React from "react";
import { Images } from "@/assets";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { inter } from "@/font";
import { GoDotFill } from "react-icons/go";
import { Fade } from "react-awesome-reveal";

const BootcampHeroSection = () => {
  return (
    <div className="w-full h-full relative lg:h-[35em] flex flex-col lg:flex-row items-center justify-center overflow-hidden">
      <div className="w-full relative flex flex-col gap-4 justify-center items-center lg:items-start min-h-[25em] lg:h-full flex-1  bg-[#FFF6F0] py-10 px-4 sm:px-10 md:px-44 lg:px-16 xl:px-20">
        <Fade
          damping={0.5}
          triggerOnce
          fraction={0.1}
          duration={1000}
          delay={300}
          direction="up"
          className="w-full flex flex-col gap-4 justify-center items-center lg:items-start"
        >
          <p
            className={`flex items-center gap-2 font-bold text-[15px] text-[#71391E] bg-[#713a1e1c] px-5 py-1 rounded-4xl  ${inter.className} `}
          >
            <GoDotFill className="" /> <span>Next cohort starts June 1st.</span>
          </p>
          <h1
            className={` text-[40px] sm:text-[50px] xl:text-[60px] 2xl:text-[90px] font-bold leading-[1.3] tracking-tight lg:text-start text-center `}
          >
            Learn, Create & Get hired
          </h1>
          <p className=" lg:text-start text-center w-full xl:w-[80%] font-sf text-[18px] text-[#5E5D6F]">
            We don&apos;t just teach you how to create. <br /> We show you how to build
            a brand, package your work into a powerful portfolio, and connect
            you to real brands looking for what you do.
          </p>
        </Fade>

        <Fade
          damping={0.5}
          triggerOnce
          fraction={0.1}
          duration={1000}
          delay={400}
          direction="up"
          className=""
        >
          <div className="w-full flex sm:flex-row flex-col gap-4 lg:justify-start justify-center items-center lg:items-start mt-5 z-30">
            <Link target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeG7bng5pEu0hgLzlFtSt9HfUup-MI4qzwH7D0P9gMtWdNhjQ/viewform?usp=header">
              <Button className="flex items-center text-[18px] font-[400] cursor-pointer bg-tcolor text-white hover:bg-tcolor/80 transition-colors duration-300 px-16 sm:px-20 py-[26px] gap-2 rounded-3xl">
                Apply
              </Button>
            </Link>
          </div>
        </Fade>

        <Image
          src={Images.cc}
          alt="hero image"
          width={500}
          height={500}
          className=" size-[20em] absolute left-[400px] object-cover rounded-full z-10 -bottom-20 animate-spin [animation-duration:5s]"
        />
        <Image
          src={Images.black_star}
          alt="hero image"
          width={500}
          height={500}
          className=" size-[1.4em] absolute lg:right-[200px] 2-10 right-[50px] bottom-20"
        />
      </div>

      <div className="w-full lg:w-fit flex items-center justify-center bg-[#FFF6F0] overflow-hidden">
        <Image
          src={Images.hero}
          alt="hero image"
          width={500}
          height={500}
          className="  object-cover "
        />
      </div>
      <Image
        src={Images.black_star}
        alt="hero image"
        width={500}
        height={500}
        className=" size-[1.4em] absolute left-[50px] z-10 lg:left-[200px] top-14"
      />
    </div>
  );
};

export default BootcampHeroSection;
