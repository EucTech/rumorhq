import { Images } from "@/assets";
import { instrument_sans, inter } from "@/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { Button } from "../../ui/button";

const SimpleStep = () => {
  return (
    <div className="w-full overflow-hidden flex flex-col items-center justify-center gap-10 lg:gap-20 py-14 sm:py-20 md:py-40 px-5 sm:px-10 lg:px-20 xl:px-30 2xl:px-40 bg-[#000]">
      <div className="w-full flex flex-col lg:flex-row lg:items-start justify-center gap-20">
        <div className=" w-full sm:w-[90%] lg:w-[40%] flex-1 flex flex-col  items-start gap-10 sm:gap-16">
          <Fade
            damping={0.5}
            triggerOnce
            fraction={0.1}
            duration={1000}
            delay={200}
            direction="up"
            className=""
          >
            <div className="flex items-center justify-center gap-4 ">
              <div className=" bg-white size-[4rem] sm:size-[6rem] flex items-center justify-center rounded-full">
                <Image
                  src={Images.icon1}
                  alt="icon"
                  width={500}
                  height={500}
                  className="size-4 sm:size-6"
                />
              </div>
              <div className="flex-1 flex flex-col items-start gap-3">
                <h1
                  className={` text-[20px] font-bold text-white ${instrument_sans.className}`}
                >
                  Set up your creator Account
                </h1>
                <p className={` text-white text-[15px] ${inter.className} `}>
                  Tell us what you do—YouTuber, designer, storyteller,
                  podcaster, editor? This is your digital resume.
                </p>
              </div>
            </div>
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
            <div className="flex items-center justify-center gap-4 ">
              <div className=" bg-white size-[4rem] sm:size-[6rem] flex items-center justify-center rounded-full">
                <Image
                  src={Images.icon1}
                  alt="icon"
                  width={500}
                  height={500}
                  className="size-4 sm:size-6"
                />
              </div>
              <div className="flex-1 flex flex-col items-start gap-3">
                <h1
                  className={` text-[20px] font-bold text-white ${instrument_sans.className}`}
                >
                  Apply for Paid Campaigns
                </h1>
                <p className={` text-white text-[15px] ${inter.className} `}>
                  Access weekly opportunities from brands looking for creators
                  like you social challenges, content bounties, design gigs, and
                  more.
                </p>
              </div>
            </div>
          </Fade>

          <Fade
            damping={0.5}
            triggerOnce
            fraction={0.1}
            duration={1000}
            delay={600}
            direction="up"
            className=""
          >
            <div className="flex items-center justify-center gap-4 ">
              <div className=" bg-white size-[4rem] sm:size-[6rem] flex items-center justify-center rounded-full">
                <Image
                  src={Images.icon1}
                  alt="icon"
                  width={500}
                  height={500}
                  className="size-4 sm:size-6"
                />
              </div>
              <div className="flex-1 flex flex-col items-start gap-3">
                <h1
                  className={` text-[20px] font-bold text-white ${instrument_sans.className}`}
                >
                  Get Rewarded
                </h1>
                <p className={` text-white text-[15px] ${inter.className} `}>
                  Submit your work, get approved, and earn money directly to
                  your wallet or account. No long waits. No hidden stress.
                </p>
              </div>
            </div>
          </Fade>

          <Fade
            damping={0.5}
            triggerOnce
            fraction={0.1}
            duration={1000}
            delay={800}
            direction="up"
            className=""
          >
            <Link
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSeG7bng5pEu0hgLzlFtSt9HfUup-MI4qzwH7D0P9gMtWdNhjQ/viewform?usp=header"
              className="w-full"
            >
              <Button className="w-full flex items-center cursor-pointer bg-tcolor text-white hover:bg-tcolor/90 transition-colors duration-300 px-16 py-6 gap-2 rounded-4xl">
                <p className="text-[15px] font-[400]">Get Started</p>
              </Button>
            </Link>
          </Fade>
        </div>

        <Fade
          damping={0.5}
          triggerOnce
          fraction={0.1}
          duration={1000}
          delay={400}
          direction="right"
          className=""
        >
          <Image
            src={Images.step1}
            alt="steps image"
            height={2000}
            width={2000}
            className=" mx-auto w-[400px]"
          />
        </Fade>
      </div>
    </div>
  );
};

export default SimpleStep;
