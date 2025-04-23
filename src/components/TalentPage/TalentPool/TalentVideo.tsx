import { instrument_sans } from "@/font";
import React from "react";
import { Fade } from "react-awesome-reveal";

const TalentVideo = () => {
  return (
    <div className=" overflow-hidden w-full text-center flex flex-col items-center justify-center bg-[#000] gap-8 py-16 sm:px-10 lg:px-20">
      <div className="w-full lg:w-[90%] xl:w-[80%] h-[40em] flex flex-col gap-10 items-center justify-ce bg-white px-5 lg:px-10 py-10">
        <Fade
          damping={0.5}
          triggerOnce
          fraction={0.1}
          duration={1000}
          delay={200}
          direction="up"
          className=" w-full sm:w-[90%] lg:w-[80%]"
        >
          <div className=" flex flex-col items-center justify-center gap-5">
            <h1
              className={`text-[35px] sm:text-[40px] text-[#0A0A0A] font-bold ${instrument_sans.className}`}
            >
              Who is this training for?
            </h1>
            <p className="text-[14px] text-[#5E5D6F] font-normal">
              You&apos;re in the right place if you&apos;re a: content creators, video
              editors, marketing strategist, brand managers, social media
              managers, community manager, thumbnail editors, script writers,
              content strategist.
            </p>
          </div>
        </Fade>

        <div className="w-full h-full border border-[#696666]">
          VIDEO
        </div>
      </div>
    </div>
  );
};

export default TalentVideo;
