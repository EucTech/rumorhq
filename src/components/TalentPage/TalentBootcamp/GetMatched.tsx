import { Images } from "@/assets";
import { dm_sans, inter } from "@/font";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

const GetMatched = () => {
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
          className={` leading-[1.2] text-[33px] sm:text-[35px] font-bold ${dm_sans.className}`}
        >
          Why WithAudacious?
        </h1>
        <p
          className={`sm:w-[95%] md:w-[80%] text-[#5E5D6F] text-[15px] font-normal ${inter.className} `}
        >
          At WithAudacious, we understand the creator&apos;s hustle. We&apos;ve
          been there, ghosted by brands, overworked and underpaid.
        </p>
      </Fade>

      <div className="w-full flex flex-wrap items-center justify-center gap-10 pt-10">
        <Fade
          triggerOnce
          fraction={0.1}
          duration={1000}
          direction="up"
          delay={300}
          className=""
        >
          <div className=" sm:w-[450px] h-[500px] border border-[#E6E6E6] rounded-md overflow-hidden">
            <div className="w-full flex flex-col items-start gap-4 p-5 sm:p-8">
              <h1
                className={` text-[18px] text-[#141011] font-bold ${dm_sans.className}`}
              >
                Portfolio Driven Learning
              </h1>
              <p
                className={` text-[14px] text-[#5E5D6F] font-normal ${inter.className}`}
              >
                You don&apos;t just learn, you create. We help you build a
                strong, strategic portfolio that gets you hired.
              </p>
            </div>

            <Image
              src={Images.getmatch}
              alt="get matched image"
              width={500}
              height={500}
              className="w-full"
            />
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
          <div className="w-full sm:w-[450px] h-[500px] border border-[#E6E6E6] rounded-md overflow-hidden">
            <div className="w-full flex flex-col items-start gap-4 p-5 sm:p-8">
              <h1
                className={` text-[18px] text-[#141011] font-bold ${dm_sans.className}`}
              >
                Brand Access and Community
              </h1>
              <p
                className={` text-[14px] text-[#5E5D6F] font-normal ${inter.className}`}
              >
                Get discovered by brands, collaborate with fellow creators, and
                stay inspired through events, mixers, and real partnerships.
              </p>
            </div>

            <Image
              src={Images.getmatch}
              alt="get matched image"
              width={500}
              height={500}
              className="w-full"
            />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default GetMatched;
