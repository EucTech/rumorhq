import { abhaya_libre, dm_sans, inter } from "@/font";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import { Images } from "@/assets";

const HackathonHeroSection = () => {
  return (
    <div className=" relative overflow-hidden w-full min-h-[550px] flex flex-col gap-10 text-center items-center justify-center text-[#FFF6F0] bg-[#fff] py-20 px-5 sm:px-20 ">
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
          className={`w-fit flex items-center gap-4 font-normal text-[15px] text-[#191919] bg-[#E5DBFF] px-5 py-2 rounded-lg  ${dm_sans.className} `}
        >
          Where brand and creators get rewarded
        </p>
      </Fade>

      <Fade
        damping={0.5}
        triggerOnce
        fraction={0.1}
        duration={1000}
        delay={300}
        direction="up"
        className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%]"
      >
        <h1
          className={` w-full text-[#000] text-[40px] sm:text-[50px] xl:text-[70px] 2xl:text-[90px] font-extrabold leading-[1.3] ${abhaya_libre.className}`}
        >
          Go Viral with Hackathon
        </h1>
      </Fade>
      <Fade
        damping={0.5}
        triggerOnce
        fraction={0.1}
        duration={1000}
        delay={400}
        direction="up"
        className="sm:w-[70%]"
      >
        <p className={`  text-[18px] font-normal text-[#5E5D6F] ${dm_sans.className}`}>
          List a Content challenge or hire creators for your project and find
          your next contributor withaudacious hackathon
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
          <Link href="#">
            <Button className="flex items-center cursor-pointer bg-tcolor text-white hover:bg-tcolor/80 transition-colors duration-300 px-10 py-5 gap-2 rounded-3xl">
              <p className="text-[16px] font-[500]">Get Started </p>
            </Button>
          </Link>

      </Fade>

       <Image
                src={Images.black_star}
                alt="hero image"
                width={500}
                height={500}
                className=" size-[1.4em] absolute lg:right-[200px] right-[50px] bottom-20"
              />
       <Image
                src={Images.black_star}
                alt="hero image"
                width={500}
                height={500}
                className=" size-[1.4em] absolute lg:left-[200px] left-[50px] bottom-20"
              />
       <Image
                src={Images.black_star}
                alt="hero image"
                width={500}
                height={500}
                className=" size-[1.4em] absolute lg:left-[200px] left-[50px] top-10 sm:top-20"
              />

      <div className=" absolute w-[30em] h-[30em] bg-[#BF91F9]/20 blur-3xl rounded-full translate-x-[650px]   -top-[250px]  "></div>
      <div className=" absolute w-[30em] h-[30em] bg-[#DBCDFFBA]/15 blur-3xl rounded-full -translate-x-[630px]   top-[100px]  "></div>
    </div>
  );
};

export default HackathonHeroSection;
