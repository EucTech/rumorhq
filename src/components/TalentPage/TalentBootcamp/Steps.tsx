import { dm_sans, instrument_sans } from "@/font";
import React from "react";
import Image from "next/image";
import { Images } from "@/assets";
import { Fade } from "react-awesome-reveal";
import StepsProps from "./StepsProps";

const Steps = () => {
  return (
    <div className="w-full relative flex flex-col items-center gap-6 px-5 sm:px-10 md:px-20 xl:px-40 bg-white py-20">
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
        className=" w-full sm:w-[80%]  flex flex-col items-center gap-2 justify-center text-center"
      >
        <h1
          className={` tracking-[0.1px] text-[30px] font-bold text-[#0A0A0A] ${instrument_sans.className}`}
        >
          Who is this training for?
        </h1>
        <p
          className={` text-[#5E5D6F] font-normal text-[16px] ${dm_sans.className}`}
        >
          You&apos;re in the right place if you&apos;re a: content creators, video
          editors, marketing strategist, brand managers, social media managers,
          thumbnail editors, script writers, and content strategist.
        </p>
      </Fade>

      <div className="w-full flex items-center justify-center gap-6 xl:gap-12 flex-wrap pt-5 sm:pt-10 overflow-hidden">
        <Fade
          triggerOnce
          fraction={0.1}
          duration={1000}
          direction="up"
          delay={200}
          className=""
        >
          <StepsProps
            title="Attend top-tier live workshops with your favorite creators every week."
            content="we&apos;re training the next generation of creators to become skilled, brand-ready professionals whether you&apos;re starting out or leveling up."
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
            title="Create With Purpose"
            content="We help you move beyond trends by creating purposeful content that reflects your voice, aligns with your goals, and connects with real people not just the algorithm."
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
            title="CV Revamp"
            content="You're more than “just a creator.” You're a brand. A business. A professional. We'll help you:"
            content1="Write a professional CV or media kit that reflects your strengths, understand job titles and what recruiters/brands are really looking for"
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
            title="Access to Community "
            content="You&apos;ll join a vibrant, supportive community of creators like you."
            content1="Get feedback, accountability, and job leads from your peers."
            content2="Access weekly live sessions, creative challenges, and collab spaces."
            className="bg-[#FFF6F0]"
          />
        </Fade>
      </div>
    </div>
  );
};

export default Steps;
