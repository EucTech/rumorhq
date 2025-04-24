"use client";
import React from "react";
import VideoPlayer from "./VideoPlayer";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const CreatorsVideos = () => {
  return (
    <section className="w-full mx-auto rounded-3xl mb-10 py-20  flex gap-5 items-center justify-center bg-[#F3F3F3]">
    <Splide
  options={{
    type: "loop",
    drag: "free",
    focus: "center",
    arrows: false,
    perPage: 4,
    width: "100%",
    gap: "1rem",
    pagination: false,
    autoScroll: {
      speed: 1.5,
    },
    breakpoints: {
      500: {
        perPage: 1,
      },
      640: {
        perPage: 2,
      },
      768: {
        perPage: 3,
      },
      1024: {
        perPage: 4,
      },
    },
  }}
  extensions={{ AutoScroll }}
  className="w-full flex items-center justify-center gap-5"
>
  <SplideSlide>
    <VideoPlayer
      link="/videos/v1.mp4"
      className="w-full"
    />
  </SplideSlide>
  <SplideSlide>
    <VideoPlayer
      link="/videos/v2.mp4"
      className="w-full"
    />
  </SplideSlide>
  <SplideSlide>
    <VideoPlayer
      link="/videos/v3.mp4"
      className="w-full"
    />
  </SplideSlide>
  <SplideSlide>
    <VideoPlayer
      link="/videos/v4.mp4"
      className="w-full"
    />
  </SplideSlide>
  <SplideSlide>
    <VideoPlayer
      link="/videos/v5.mp4"
      className="w-full"
    />
  </SplideSlide>
  <SplideSlide>
    <VideoPlayer
      link="/videos/v6.mp4"
      className="w-full"
    />
  </SplideSlide>
  <SplideSlide>
    <VideoPlayer
      link="/videos/v7.mp4"
      className="w-full"
    />
  </SplideSlide>
  <SplideSlide>
    <VideoPlayer
      link="/videos/v8.mp4"
      className="w-full"
    />
  </SplideSlide>
  <SplideSlide>
    <VideoPlayer
      link="/videos/v9.mp4"
      className="w-full"
    />
  </SplideSlide>
</Splide>
    </section>
  );
};

export default CreatorsVideos;
