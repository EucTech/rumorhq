"use client";
import { Images } from "@/assets";
import { dm_sans, inter } from "@/font";
import Image from "next/image";
import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";

const TestimonialGrid = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Testimonials = [
    {
      quote:
        "What stood out for me was how easy it was to find fresh opportunities that matched my style. The team really cares about helping you win.",
      author: "Founder, Solarcorp",
    },
    {
      quote:
        "The platform connected me with clients I never would have found otherwise. It's been transformative for my business.",
      author: "Designer, Creativo",
    },
    {
      quote:
        "What stood out for me was how easy it was to find fresh opportunities that matched my style. The team really cares about helping you win.",
      author: "Founder, Luxury Homes",
    },
    {
      quote:
        "The platform connected me with clients I never would have found otherwise. It's been transformative for my business.",
      author: "Designer, Artistry",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + Testimonials.length) % Testimonials.length
    );
  };

  return (
    <div className="w-full h-full flex flex-col xl:gap-1 gap-8 items-center justify-center py-10 px-5 md:px-10 lg:px-20">
      <div className="w-full flex flex-col items-center mt-10 bg-white gap-4 p-5 sm:p-8">
        <Fade
          triggerOnce
          fraction={0.1}
          duration={1000}
          direction="up"
          delay={400}
          className="  flex flex-col items-center text-center justify-center gap-6"
        >
          <p
            className={`w-fit flex items-center gap-4 font-[400] text-[18px] text-tcolor bg-[#BF91F91A] px-5 py-1 rounded-lg  ${inter.className} `}
          >
            Testimonials
          </p>
          <h1
            className={`w-full leading-[1.2] text-[32px] sm:text-[35px] font-bold ${dm_sans.className}`}
          >
            Discover and Hire
          </h1>
          <p className="w-full sm:w-[80%] lg:w-[70%] text-[#141011] text-[16px] font-sf font-[500]">
            Tap into experts who create viral content for the biggest creators
            in the world, whether that&apos;s freelance or full-time.
          </p>
        </Fade>
      </div>

      <div className="w-full flex items-start justify-center gap-2">
        <Image
          src={Images.t1}
          alt="image"
          width={2000}
          height={2000}
          className="w-[100%] object-cover xl:block hidden"
        />
        <Image
          src={Images.t2}
          alt="image"
          width={2000}
          height={2000}
          className="w-[100%] object-cover"
        />
        <Image
          src={Images.t3}
          alt="image"
          width={2000}
          height={2000}
          className="w-[100%] object-cover xl:block hidden"
        />
      </div>

      <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[50%] text-center font-outfit gap-5 xl:-mt-20 flex flex-col items-center justify-center">
        <p className="text-[#191A15] font-[600] text-[22px]">
          {Testimonials[currentSlide].author}
        </p>
        <p className="text-[#191A15]/80 font-[400] text-[16px]">
          &quot;{Testimonials[currentSlide].quote}&quot;
        </p>

        <div className="flex items-center justify-center gap-5 mt-5">
          <button
            className=""
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <IoArrowBackCircle className="size-12 text-tcolor cursor-pointer" />
          </button>
          <button
            className=""
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <IoArrowForwardCircle className="size-12 text-tcolor cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialGrid;
