import { dm_sans, instrument_sans, inter } from "@/font";
import React from "react";
import Image from "next/image";
import { Images } from "@/assets";
import { Fade } from "react-awesome-reveal";

const CreatorSteps = () => {
  return (
    <div className="overflow-hidden w-full relative flex flex-col items-center gap-6 px-5 sm:px-10 md:px-20 xl:px-40 bg-[#E5DBFF] py-16 sm:py-24">
      <Image
        src={Images.pink_star}
        alt="hero image"
        width={500}
        height={500}
        className=" size-[2em] absolute left-[30px] lg:left-[100px] top-8 lg:top-20"
      />
      <Image
        src={Images.pink_spark}
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
        className=" w-full sm:w-[80%] xl:w-[70%]  flex flex-col items-center gap-2 justify-center text-center"
      >
        <h1
          className={` tracking-[0.1px] text-[30px] font-bold text-[#0A0A0A] ${instrument_sans.className}`}
        >
          Building Borderless Creators economy
        </h1>
        <p
          className={` text-[#5E5D6F] font-normal text-[16px] ${dm_sans.className}`}
        >
          We&apos;re building a new kind of creators economy — one that’s
          borderless, scalable, and built for modern brands. Whether you need a
          content strategist in Berlin, a B2B storyteller in Nairobi, or a
          design genius in São Paulo, we help you discover and hire top creators
          with real results. <br />
          No gatekeepers. No geography limits. Just global talent, ready to grow
          with you.
        </p>
      </Fade>

      <div className="w-full flex xl:flex-nowrap flex-wrap items-center justify-center gap-5 pt-10">
      <Fade
          triggerOnce
          fraction={0.1}
          duration={1000}
          direction="up"
          delay={500}
          className=""
        >
          <div className="w-full sm:w-[400px] max-h-[450px] h-[450px] border border-[#B3B3B3] rounded-2xl overflow-hidden">
            <Image
              src={Images.c3}
              alt="get matched image"
              width={500}
              height={500}
              className="w-full h-60"
            />
            <div className="w-full h-full flex flex-col items-start bg-white gap-4 p-5 overflow-hidden">
              <h1
                className={` text-[18px] text-[#141011] font-bold ${dm_sans.className}`}
              >
                We manage the end to end hiring
              </h1>
              <p
                className={` text-[14px] text-[#5E5D6F] font-normal ${inter.className}`}
              >
                Upon arrival, the payment process is simple. The payment is
                processed and you can pay cash
              </p>
            </div>
          </div>
        </Fade>
        <Fade
          triggerOnce
          fraction={0.1}
          duration={1000}
          direction="up"
          delay={300}
          className=""
        >
          <div className=" sm:w-[400px] max-h-[450px] h-[450px] border border-[#B3B3B3] rounded-2xl overflow-hidden">
            <Image
              src={Images.c1}
              alt="get matched image"
              width={500}
              height={500}
              className="w-full h-60"
            />
            <div className="w-full h-full flex flex-col items-start bg-white gap-4 p-5 overflow-hidden">
              <h1
                className={` text-[18px] text-[#141011] font-bold ${dm_sans.className}`}
              >
                Access to vetted creators
              </h1>
              <p
                className={` text-[14px] text-[#5E5D6F] font-normal ${inter.className}`}
              >
                Stop wasting your time with spam applications and irrelevant
                candidates. Our AI will match you with top candidates who have
                experience working with brands similar to you.
              </p>
            </div>
          </div>
        </Fade>
        <Fade
          triggerOnce
          fraction={0.1}
          duration={1000}
          direction="up"
          delay={400}
          className=""
        >
          <div className="w-full sm:w-[400px] max-h-[450px] h-[450px] border border-[#B3B3B3] rounded-2xl overflow-hidden">
            <Image
              src={Images.c2}
              alt="get matched image"
              width={500}
              height={500}
              className="w-full h-60"
            />
            <div className="w-full h-full flex flex-col items-start bg-white gap-4 p-5 overflow-hidden">
              <h1
                className={` text-[18px] text-[#141011] font-bold ${dm_sans.className}`}
              >
                Making Hiring Easy
              </h1>
              <p
                className={` text-[14px] text-[#5E5D6F] font-normal ${inter.className}`}
              >
                No one wants to sort through thousands of portfolios. Use our
                free applicant tracking software to easily compare candidates.
              </p>
            </div>
          </div>
        </Fade>
       
      </div>
    </div>
  );
};

export default CreatorSteps;
