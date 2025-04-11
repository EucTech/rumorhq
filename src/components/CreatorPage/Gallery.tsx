"use client";
import * as React from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { Images } from "@/assets";

const data = [
  {
    src: Images.customer1.src,
  },
  {
    src: Images.customer2.src,
  },
  {
    src: Images.customer3.src,
  },
  {
    src: Images.customer2.src,
  },
  {
    src: Images.customer3.src,
  },
];

export default function Gallery() {
  return (
    <div className="w-full overflow-hidden">
      <Splide
        options={{
          type: "loop",
          drag: "free",
          focus: "center",
          arrows: false,
          pagination: false,
          perPage: 4,
          autoScroll: {
            speed: 2,
          },
          breakpoints: {
            640: {
              perPage: 2,
            },
            1024: {
              perPage: 4,
            },
          },
        }}
        extensions={{ AutoScroll }}
      >
        {data.map((item, index) => (
          <SplideSlide key={index} style={{ margin: "1rem" }}>
            <Image
              src={item.src}
              alt={`Image ${index + 1}`}
              width={1000}
              height={1000}
              className="w-[300px] h-[400px] object-cover rounded-lg shadow "
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
