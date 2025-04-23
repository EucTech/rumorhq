import Link from "next/link";
import React from "react";
import { dm_sans, inter } from "@/font";
import { Button } from "@/components/ui/button";
import { Fade } from "react-awesome-reveal";

const TalentGetStarted = () => {
  return (
    <div className=" overflow-hidden w-full text-center flex flex-col items-center justify-center bg-[#000] text-white gap-8 py-16 px-5 sm:px-10 lg:px-20">
      <Fade
        damping={0.5}
        triggerOnce
        fraction={0.1}
        duration={1000}
        delay={200}
        direction="up"
        className=" w-full sm:w-[80%] md:w-[70%] lg:w-[60%]"
      >
        <div className=" flex flex-col items-center justify-center gap-5">
          <h1
            className={`text-[35px] sm:text-[45px] font-bold ${dm_sans.className}`}
          >
            🚀 Start Earning with Your Talent
          </h1>
          <p className={`text-[14px] font-normal ${inter.className}`}>
            Sign up now to unlock the power of rideshare advertising with Motion
            365. Join our community of forward-thinking brands and drivers and
            experience the future of advertising today.
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
        className=""
      >
        <Link
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSeG7bng5pEu0hgLzlFtSt9HfUup-MI4qzwH7D0P9gMtWdNhjQ/viewform?usp=header"
        >
          <Button className="flex items-center cursor-pointer bg-tcolor text-white hover:bg-tcolor/80 transition-colors duration-300 px-10 py-5 gap-2 rounded-3xl">
            <p className={`text-[15px] font-[400] ${inter.className}`}>
              Join the Talent Pool
            </p>
          </Button>
        </Link>
      </Fade>
    </div>
  );
};

export default TalentGetStarted;
