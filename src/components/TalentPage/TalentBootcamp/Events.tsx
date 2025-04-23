import React from "react";
import EventProps from "./EventProps";

const Events = () => {
  return (
    <div className="w-full flex flex-wrap items-center justify-center gap-16 py-10 px-3 sm:px-10">
      <EventProps
        title="Creator to Career™"
        edate="June 1, 2025"
        eheading="An accelerator that helps creators build skills, a portfolio, and get
          hired by brands."
        eweeks="6"
        content1="How to shoot clean videos using your phone"
        content2="Framing, lighting, and setting up your content space"
        content3="Intro to video storytelling for social media"
        content4="Working with brand guidelines & moodboards"
        content5="Working with brand guidelines & moodboards"
      />
      <EventProps
        title="The Creator Lab"
        edate="August 1, 2025"
        eheading="An accelerator that helps creators build skills, a portfolio, and get
          hired by brands."
        eweeks="4"
        content1="How to shoot clean videos using your phone"
        content2="Framing, lighting, and setting up your content space"
        content3="Intro to video storytelling for social media"
        content4="Working with brand guidelines & moodboards"
        content5="Working with brand guidelines & moodboards"
      />
    </div>
  );
};

export default Events;
