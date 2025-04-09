import React from "react";
import { Images } from "@/assets";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { abhaya_libre, inter } from "@/font";
import { GoDotFill } from "react-icons/go";
import { Fade } from "react-awesome-reveal";

const HeroSection = () => {
  return (
    <div className="w-full h-full relative lg:h-[35em] flex flex-col lg:flex-row items-center justify-center overflow-hidden">
      <div className="w-full relative flex flex-col gap-4 justify-center items-center lg:items-start min-h-[25em] lg:h-full flex-1  bg-[#FFF6F0] px-4 sm:px-10 md:px-44 lg:px-16 xl:px-20">
        <Fade
          damping={0.5}
          triggerOnce
          fraction={0.1}
          duration={1000}
          direction="up"
          className="w-full flex flex-col gap-4 justify-center items-center lg:items-start"
        >
          <p
            className={`flex items-center gap-2 font-bold text-[12px] text-[#71391E] bg-[#713a1e1c] px-5 py-1 rounded-4xl  ${inter.className} `}
          >
            <GoDotFill className="" /> <span>B2B Influencers for Brand </span>
          </p>
          <h1
            className={` text-[40px] sm:text-[50px] xl:text-[70px] 2xl:text-[90px] font-extrabold leading-[1.3] lg:text-start text-center ${abhaya_libre.className}`}
          >
            Get matched with LinkedIn Creators for
          </h1>
        </Fade>

        <Link href="#">
          <Button className="flex items-center cursor-pointer bg-tcolor text-white hover:bg-tcolor-2 transition-colors duration-300 px-10 py-5 gap-2 rounded-3xl">
            <p className="text-[15px] font-[400]">Join our Waitlist</p>
          </Button>
        </Link>
        
        <Image
          src={Images.cc}
          alt="hero image"
          width={500}
          height={500}
          className=" size-[20em] absolute left-[300px]  -bottom-20"
        />
        <Image
          src={Images.black_star}
          alt="hero image"
          width={500}
          height={500}
          className=" size-[1.4em] absolute lg:right-[200px] right-[50px] bottom-20"
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
        className=" size-[1.4em] absolute left-[50px] lg:left-[200px] top-14"
      />
    </div>
  );
};

export default HeroSection;
