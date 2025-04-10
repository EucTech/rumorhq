import { Images } from "@/assets";
import { dm_sans, inter } from "@/font";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

const HackathonInfoCard = () => {
  return (
    <div className="w-full flex flex-wrap items-center justify-center bg-[#fff] gap-10 py-20 px-5 overflow-hidden">
      <Fade
        triggerOnce
        fraction={0.1}
        duration={1000}
        direction="up"
        delay={300}
        className=""
      >
        <div className=" w-full sm:w-[450px] h-full sm:h-[500px] border border-[#E6E6E6] rounded-md overflow-hidden">
          <div className="w-full flex flex-col items-start bg-white gap-4 p-5 sm:p-8">
            <h1
              className={` text-[18px] text-[#141011] font-bold ${dm_sans.className}`}
            >
              Purchase Airtime & Data
            </h1>
            <p
              className={` text-[14px] text-[#5E5D6F] font-normal ${inter.className}`}
            >
              Stay connected with easy airtime and data purchases for any
              network—anytime, anywhere, all in one app.
            </p>
          </div>

          <Image
            src={Images.getmatch}
            alt="get matched image"
            width={500}
            height={500}
            className="w-full h-full"
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
        <div className="w-full sm:w-[450px] h-full sm:h-[500px] border border-[#E6E6E6] rounded-md overflow-hidden">
          <div className="w-full flex flex-col items-start bg-white gap-4 p-5 sm:p-8">
            <h1
              className={` text-[18px] text-[#141011] font-bold ${dm_sans.className}`}
            >
              Purchase Airtime & Data
            </h1>
            <p
              className={` text-[14px] text-[#5E5D6F] font-normal ${inter.className}`}
            >
              Stay connected with easy airtime and data purchases for any
              network—anytime, anywhere, all in one app.
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
  );
};

export default HackathonInfoCard;
