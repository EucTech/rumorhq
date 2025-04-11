"use client";
import { dm_sans, inter } from "@/font";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { BrandType } from "@/utils/dummyData";
import Image from "next/image";

const GlobalBrands = () => {
  const options = {
    type: "loop",
    drag: "free",
    focus: "center",
    arrows: false,
    pagination: false,
    fixedWidth: "13rem",
    fixedHeight: "6rem",
    width: "100%",
    perPage: 4,
    autoScroll: {
      speed: 2,
    },
    breakpoints: {
      640: {
        perPage: 4,
      },
      850: {
        perPage: 4,
      },
      1024: {
        perPage: 4,
      },
    },
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-5 py-20">
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
            className={`w-fit flex items-center gap-4 font-bold text-[12px] text-tcolor bg-[#FFF6F0] px-5 py-1 rounded-4xl  ${inter.className} `}
          >
            Follow our Journey
          </p>
          <h1
            className={`w-full leading-[1.2] text-[32px] sm:text-[35px] font-bold ${dm_sans.className}`}
          >
            Supported by Global Brands
          </h1>
        </Fade>
      </div>

      <div className="w-full overflow-hidden ">

        <div className="hidden lg:flex w-full items-center justify-center gap-1 xl:gap-4 flex-wrap">
          {BrandType.map((item) => (
            <Image
              key={item.id}
              src={item.image}
              width={1000}
              height={1000}
              alt={item.alt}
              className="w-[200px] h-[100px] object-contain "
              />
          ))}
        </div>

        <div className="w-full lg:hidden block">
          <Splide options={options} extensions={{ AutoScroll }}>
            {BrandType.map((item) => {
              return (
                <SplideSlide
                  key={item.id}
                  style={{
                    overflow: "hidden",
                    // position: "relative",
                    margin: "2rem",
                    marginBottom: "3rem",
                    padding: "1rem",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div className=" w-[200px]">
                    <Image
                      src={item.image}
                      width={1000}
                      height={1000}
                      alt={item.alt}
                      className="w-[100%] h-[100%] object-contain"
                    />
                  </div>
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default GlobalBrands;
