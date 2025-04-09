import { dm_sans, instrument_sans } from "@/font";
import React from "react";
import StepsProps from "./StepsProps";
import Image from "next/image";
import { Images } from "@/assets";
import { Fade } from "react-awesome-reveal";

const Steps = () => {
  return (
    <div className="w-full relative flex flex-col items-center gap-6 px-5 sm:px-10 md:px-20 bg-white py-20">
      <Image
        src={Images.brown_star}
        alt="hero image"
        width={500}
        height={500}
        className=" size-[2em] absolute left-[30px] lg:left-[100px] top-8 lg:top-20"
      />
      <Image
        src={Images.spark}
        alt="hero image"
        width={500}
        height={500}
        className=" size-[5em] absolute lg:right-[100px] right-[30px] top-5 lg:top-20"
      />

      <Fade
        damping={0.5}
        triggerOnce
        fraction={0.1}
        duration={1000}
        direction="up"
        className=" w-full sm:w-[80%] xl:w-[60%]  flex flex-col items-center gap-2 justify-center text-center"
      >
        <h1
          className={` tracking-[0.1px] text-[30px] font-bold text-[#0A0A0A] ${instrument_sans.className}`}
        >
          Get Started in 3 Simple Steps
        </h1>
        <p
          className={` text-[#5E5D6F] font-normal text-[16px] ${dm_sans.className}`}
        >
          Discover and hire content creators, video editors, marketing
          strategist, brand managers, social media managers, thumbnail editors,
          script writers, content strategist from withaudacious.
        </p>
      </Fade>

      <div className="w-full flex items-center justify-center gap-6 flex-wrap pt-5 sm:pt-10">
        <Fade
          triggerOnce
          fraction={0.1}
          duration={1000}
          direction="up"
          delay={200}
          className=""
        >
          <StepsProps
            title="Match"
            content=" We help you discover and match with vetted Creators (out of the 1B
            users on LinkedIn) in of our global Creator network based on brand
            objectives, values, and target reach for powerful collaborations."
          />
        </Fade>

        <Fade
          triggerOnce
          fraction={0.1}
          duration={1000}
          direction="up"
          delay={300}
          className="  "
        >
          <StepsProps
            title="Manage"
            content="We manage the brand-creator relationships, handling the heavy lifting to ensure a smooth and successful partnership, including content review. We will handle all communications, follow ups, and reminders to give you time back."
            className="bg-[#FFF6F0]"
          />
        </Fade>
        <Fade
          triggerOnce
          fraction={0.1}
          duration={1000}
          direction="up"
          delay={400}
          className="  "
        >
          <StepsProps
            title="Monitize"
            content="We manage monetization through win-win rate card negotiations. Plus, we handle contracting and payouts to each of the individual Creators so that Brands only have work with us versus multiple Creators."
            className="bg-[#FFF6F0]"
          />
        </Fade>
        <Fade
          triggerOnce
          fraction={0.1}
          duration={1000}
          direction="up"
          delay={500}
          className="  "
        >
          <StepsProps
            title="Measure"
            content="We measure reach, engagement, conversions, and more to optimize the LinkedIn campaign and connect efforts to business impact. "
            className="bg-[#FFF6F0]"
          />
        </Fade>
      </div>
    </div>
  );
};

export default Steps;
