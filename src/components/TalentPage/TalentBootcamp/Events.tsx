import React from "react";
import EventProps from "./EventProps";

const Events = () => {
  return (
    <div className="w-full flex flex-wrap items-start justify-center gap-16 py-10 px-3 sm:px-10">
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
        content5="Personal Branding & Niche Clarity Position yourself as a credible, memorable creator with a niche that stands out."
        content6="Monetizing Your Skillset Explore career paths agency work, influencer deals, or starting your own business."
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
        content5="Copywriting and Caption development"
        content6="One Portfolio to dhow prove of Work"
      />
    </div>
  );
};

export default Events;
