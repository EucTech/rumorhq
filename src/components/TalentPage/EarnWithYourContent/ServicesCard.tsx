import { Images } from "@/assets";
import { inter } from "@/font";
import Image from "next/image";
import React from "react";
import ServicesCardProps from "./ServicesCardProps";
import { Fade } from "react-awesome-reveal";

const ServicesCard = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#000] py-20 px-10 lg:px-20">
      <div className="w-full min-h-[32em] flex flex-wrap justify-center gap-14 md:gap-20">
        <Fade
          damping={0.5}
          triggerOnce
          fraction={0.1}
          duration={1000}
          delay={100}
          direction="up"
          className=""
        >
          <div className=" w-[20em] h-full flex flex-col items-center justify-center bg-[#191919] gap-5 p-4 border border-[#BF91F9]">
            <Image
              src={Images.service}
              alt="image"
              width={1000}
              height={1000}
              className=""
            />
            <div
              className={`flex flex-col items-center text-center justify-center gap-2 ${inter.className}`}
            >
              <p className="text-white text-[17px] font-bold">Testimonials</p>
              <p className="text-white text-[14px] font-[300]">
                Capture the attention of thousands of potential customers as
                your video ads are displayed by drivers.
              </p>
            </div>
          </div>
        </Fade>

        <div className=" grid grid-cols-1 md:grid-cols-2 justify-items-center gap-8 px-5">
          <Fade
            damping={0.5}
            triggerOnce
            fraction={0.1}
            duration={1000}
            delay={200}
            direction="up"
            className=""
          >
            <ServicesCardProps
              title="Targeted Exposure"
              content="Content creation (TikTok, YouTube, Instagram)"
            />
          </Fade>
          <Fade
            damping={0.5}
            triggerOnce
            fraction={0.1}
            duration={1000}
            delay={300}
            direction="up"
            className=""
          >
            <ServicesCardProps
              title="Cost-Effective"
              content="Social media shoutouts or trend participation"
            />
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
            <ServicesCardProps
              title="Creative Storytelling"
              content="whether it's scripting for videos, writing engaging captions, crafting compelling brand stories, or even sharing your personal journey in a relatable way."
              iconStyle="bg-[#FDDE90]"
            />
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
            <ServicesCardProps
              title="Design, memes, and short-form video"
              content="If you're a visual storyteller or meme genius, there&apos;s a space (and cash) waiting for you here."
            />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
