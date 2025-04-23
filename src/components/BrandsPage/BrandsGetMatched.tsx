import { Images } from "@/assets";
import { dm_sans, inter } from "@/font";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

const BrandsGetMatched = () => {
  return (
    <div className="w-full overflow-hidden flex flex-col items-center justify-center gap-5 sm:gap-8 bg-white px-5 sm:px-10 lg:px-20 pb-20">
      <Fade
        triggerOnce
        fraction={0.1}
        duration={1000}
        direction="up"
        delay={400}
        className="  flex flex-col items-center text-center justify-center gap-6"
      >
        <p
          className={`w-fit flex items-center gap-4 font-bold text-[12px] text-tcolor bg-[#FFF6F0] px-5 py-1 rounded-4xl  ${inter.className} `}
        >
          Packed with powerful features 🔥
        </p>
        <h1
          className={`w-full sm:w-[80%] leading-[1.2] text-[32px] sm:text-[35px] font-bold ${dm_sans.className}`}
        >
          Go viral with{" "}
          <span className="text-tcolor">3 simple steps</span>
        </h1>
        <p
          className={`sm:w-[95%] md:w-[70%] text-[#5E5D6F] text-[15px] font-normal ${inter.className} `}
        >
          Hackathons allow you to launch your own custom hiring competition and
          instantly attract real, skilled applicants who submit their work
          within hours.
        </p>
      </Fade>

      <div className="w-full flex xl:flex-nowrap flex-wrap items-center justify-center gap-5 pt-10">
        <Fade
          triggerOnce
          fraction={0.1}
          duration={1000}
          direction="up"
          delay={300}
          className=""
        >
          <div className=" sm:w-[400px] h-full border border-[#E6E6E6] rounded-md overflow-hidden">
            <Image
              src={Images.getmatch}
              alt="get matched image"
              width={500}
              height={500}
              className="w-full h-40"
            />
            <div className="w-full flex flex-col items-start gap-4 p-5">
              <h1
                className={` text-[18px] text-[#141011] font-bold ${dm_sans.className}`}
              >
                Creator-led = Trust & Virality
              </h1>
              <p
                className={` text-[14px] text-[#5E5D6F] font-normal ${inter.className}`}
              >
                Once the challenge is live, we activate our community of global
                creators, from content creators, video editors, and storytellers
                to designers and influencers.
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
          <div className="w-full sm:w-[400px] h-full border border-[#E6E6E6] rounded-md overflow-hidden">
            <Image
              src={Images.getmatch}
              alt="get matched image"
              width={500}
              height={500}
              className="w-full h-40"
            />
            <div className="w-full flex flex-col items-start gap-4 p-5">
              <h1
                className={` text-[18px] text-[#141011] font-bold ${dm_sans.className}`}
              >
                Competitive = High-quality content
              </h1>
              <p
                className={` text-[14px] text-[#5E5D6F] font-normal ${inter.className}`}
              >
                Every creator shares their challenge submission on social media,
                tagging your brand and using your custom hashtags.
              </p>
            </div>
          </div>
        </Fade>
        <Fade
          triggerOnce
          fraction={0.1}
          duration={1000}
          direction="up"
          delay={500}
          className=""
        >
          <div className="w-full sm:w-[400px] h-full border border-[#E6E6E6] rounded-md overflow-hidden">
            <Image
              src={Images.getmatch}
              alt="get matched image"
              width={500}
              height={500}
              className="w-full h-40"
            />
            <div className="w-full flex flex-col items-start gap-4 p-5">
              <h1
                className={` text-[18px] text-[#141011] font-bold ${dm_sans.className}`}
              >
                Reward-based
              </h1>
              <p
                className={` text-[14px] text-[#5E5D6F] font-normal ${inter.className}`}
              >
                Top-performing creators get rewarded with cash, prizes,
                features, and opportunities to work with your brand long-term.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default BrandsGetMatched;
