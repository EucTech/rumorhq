"use client";
import { instrument_sans } from "@/font";
import React, { useRef } from "react";
import { Fade } from "react-awesome-reveal";

const TalentVideo = () => {
   const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <div className=" overflow-hidden w-full text-center flex flex-col items-center justify-center bg-[#000] gap-8 py-16 sm:px-10 lg:px-20">
      <div className="w-full lg:w-[90%] xl:w-[80%] h-full flex flex-col gap-10 items-center justify-ce bg-white px-5 lg:px-10 py-10">
        <Fade
          damping={0.5}
          triggerOnce
          fraction={0.1}
          duration={1000}
          delay={200}
          direction="up"
          className=" w-full sm:w-[90%] lg:w-[80%]"
        >
          <div className=" flex flex-col items-center justify-center gap-5 overflow-hidden">
            <h1
              className={`text-[35px] sm:text-[40px] text-[#0A0A0A] font-bold ${instrument_sans.className}`}
            >
              Who is this training for?
            </h1>
            <p className="text-[15px] text-[#5E5D6F] font-normal">
              You&apos;re in the right place if you&apos;re a: content creators,
              video editors, marketing strategist, brand managers, social media
              managers, community manager, thumbnail editors, script writers,
              content strategist.
            </p>
          </div>
        </Fade>

        <Fade
          damping={0.5}
          triggerOnce
          fraction={0.1}
          duration={1000}
          delay={400}
          direction="up"
          className=" "
        >
        <div className="w-full h-[30em] rounded-xl overflow-hidden">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            // controls
            autoPlay
            muted
            loop
          >
            <source src="https://videos.pexels.com/video-files/5200349/5200349-uhd_2560_1440_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        </Fade>
      </div>
    </div>
  );
};

export default TalentVideo;
