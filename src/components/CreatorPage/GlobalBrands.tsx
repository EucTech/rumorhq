"use client";
import { dm_sans, inter } from "@/font";
import { BrandType } from "@/utils/dummyData";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const GlobalBrands = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-5 py-20 px-2 sm:px-10 md:px-20">
      <div className="w-full flex flex-col items-center bg-white gap-4 p-5 sm:p-8">
        <Fade
          triggerOnce
          fraction={0.1}
          duration={1000}
          direction="up"
          delay={400}
          className="  flex flex-col items-center text-center justify-center gap-6"
        >
          <p
            className={`w-fit flex items-center gap-4 font-[400] text-[16px] text-tcolor bg-[#BF91F91A] px-5 py-1 rounded-lg  ${inter.className} `}
          >
            Build your team
          </p>
          <h1
            className={`w-full leading-[1.2] text-[32px] sm:text-[35px] font-bold ${dm_sans.className}`}
          >
            The hiring platform built for creators like you
          </h1>
          <p className="w-full sm:w-[80%] lg:w-[70%] text-[#141011] text-[16px] font-sf font-[500]">
            Wearing every hat can drain your creativity. Skip the burnout, build
            your dream team effortlessly and stay focused on what you do best.
          </p>
        </Fade>
      </div>

      <Splide
        options={{
          type: "loop",
          drag: "free",
          focus: "center",
          arrows: false,
          perPage: 6,
          width: "100%",
          gap: "1rem",
          pagination: false,
          autoScroll: {
            speed: 1.5,
          },
          breakpoints: {
            500: {
              perPage: 2,
            },
            640: {
              perPage: 3,
            },
            768: {
              perPage: 5,
            },
            1024: {
              perPage: 6,
            },
            1440: {
              perPage: 5,
            },
          },
        }}
        extensions={{ AutoScroll }}
        className="w-full"
      >
        {BrandType.map((item) => (
          <SplideSlide key={item.id}>
            <div className="w-[10em] h-[8em] flex flex-col items-center justify-center gap-3 rounded-lg border border-[#E1E8EDBA]">
              <Image
                src={item.icon}
                alt={item.alt}
                width={2000}
                height={2000}
                className="w-10"
              />
              <p className="font-sf text-[#000] text-[13px] font-[400]">
                {item.title}
              </p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default GlobalBrands;
