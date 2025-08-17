"use client";
import { Images } from "@/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { inter } from "@/font";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { LiaMedalSolid } from "react-icons/lia";
import { BsShieldFillCheck } from "react-icons/bs";
import { TbExclamationCircleFilled } from "react-icons/tb";

interface Props {
  hackton: HacktonProps;
}

const HacktonDetails = ({ hackton }: Props) => {
  const targetDate = new Date("2025-08-20T23:59:59").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: "00", hours: "00", minutes: "00" });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );

        setTimeLeft({
          days: String(days).padStart(2, "0"),
          hours: String(hours).padStart(2, "0"),
          minutes: String(minutes).padStart(2, "0"),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const avatars = [
    Images.c1,
    Images.c2,
    Images.c3,
    Images.customer1,
    Images.customer2,
  ];

  const extraCount = 134;
  const totalJoined = 148;

  return (
    <div className="bg-[#f8f8f8] w-full h-full flex gap-6 px-10 pt-10 pb-10">
      <div className="w-[350px] flex flex-col gap-4">
        {/* 1 */}
        <div className="w-full flex flex-col rounded-[8px] overflow-hidden shadow">
          <Image
            src={Images.hactkonDetailImage}
            alt="Image"
            width={1000}
            height={1000}
            quality={100}
            className="w-full h-[100px]"
          />
          <div className="w-full flex items-center justify-between gap-3 bg-[#fff] px-4 py-4">
            <div className="flex flex-col items-start font-sf gap-1">
              <h3 className="text-[20px] text-[#000] font-clashDisplay-semibold ">
                {hackton.title}
              </h3>
              <p className="text-[#525252] text-[14px] font-[400]">
                African food delivery App
              </p>
            </div>

            <div className="flex items-center gap-2">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaYoutube color="#FF0000" className="w-[23px] h-[16px]" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-[16px] text-[#1877F2]" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaSquareInstagram color="#d62976" className="text-[16px]" />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-4 bg-[#fff] p-6 rounded-[8px] shadow">
          <div className="flex items-center justify-between">
            <p className="text-[#000000] text-[14px] font-[400] font-sf">
              Submission window 3 days
            </p>
            <button className="bg-[#12B76A] text-[#FFFFFF] text-[12px] rounded-[4px] px-4 py-[2px]">
              Started
            </button>
          </div>
          <div className="bg-[#B7ABFF]/5 flex flex-col gap-2 items-center justify-center rounded-[8px] py-4">
            <p className="text-[16px] text-[#000000] font-[600] font-sf">
              Hackathon ends in
            </p>
            <div className="flex justify-center gap-6">
              {/* Days */}
              <div className="flex flex-col items-center">
                <span className="text-[20px] text-[#000000] font-[700] font-sf">
                  {timeLeft.days}
                </span>
                <span className="text-[16px] font-[400] font-sf text-[#000000]">
                  Day
                </span>
              </div>
              {/* Hours */}
              <div className="flex flex-col items-center">
                <span className="text-[20px] text-[#000000] font-[700] font-sf">
                  {timeLeft.hours}
                </span>
                <span className="text-[16px] font-[400] font-sf text-[#000000]">
                  Hours
                </span>
              </div>
              {/* Minutes */}
              <div className="flex flex-col items-center">
                <span className="text-[20px] text-[#000000] font-[700] font-sf">
                  {timeLeft.minutes}
                </span>
                <span className="text-[16px] font-[400] font-sf text-[#000000]">
                  Minutes
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-[#000000] text-[14px] font-[400] font-sf">
              Participants
            </p>
            <button className="bg-[#12B76A] text-[#FFFFFF] text-[12px] rounded-[4px] px-4 py-[2px]">
              Started
            </button>
          </div>

          {/* Avatar Stack */}
          <div>
            <div className="flex -space-x-6">
              {avatars.map((src, index) => (
                <div
                  key={index}
                  className="w-12 h-12 rounded-full border border-white overflow-hidden"
                >
                  <Image
                    src={src}
                    alt={`User ${index + 1}`}
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}

              {/* Extra Count */}
              <div className="w-12 h-12 rounded-full border border-white bg-[#B4B4B4] flex items-center justify-center text-sm font-[400] text-[#000000]">
                +{extraCount}
              </div>
            </div>

            {/* Text */}
            <p className="text-[16px] text-[#000000] font-[400] font-sf mt-2">
              {totalJoined} people have joined
            </p>
          </div>

          <button className="w-full flex items-center justify-center cursor-pointer bg-[#6A0AE4] text-white hover:bg-[#6A0AE4]/80 transition-colors duration-300 px-10 py-3 mt-4 gap-2 rounded-3xl">
            <p className={`text-[16px] font-[500] ${inter.className}`}>
              Join Hackathon
            </p>
          </button>
        </div>

        <div className="w-full flex flex-col gap-4 bg-[#fff] p-6 rounded-[8px] shadow">
          <h2 className="font-clashDisplay-semibold text-[#6A0AE4] text-[16px]">
            Prizes
          </h2>

          <div className="flex flex-col gap-2">
            <span className="flex items-center gap-3">
              <LiaMedalSolid color="#F9B091" size={20} />
              <p className="text-[#363853] text-[16px] font-[400] font-sf">
                $100 + Winner
              </p>
            </span>
            <span className="flex items-center gap-3">
              <LiaMedalSolid color="#F9B091" size={20} />
              <p className="text-[#363853] text-[16px] font-[400] font-sf">
                $50 + 1st Runner up
              </p>
            </span>
            <span className="flex items-center gap-3">
              <LiaMedalSolid color="#F9B091" size={20} />
              <p className="text-[#363853] text-[16px] font-[400] font-sf">
                $50 + 2nd Runner up
              </p>
            </span>
            <span className="flex items-center gap-3">
              <LiaMedalSolid color="#F9B091" size={20} />
              <p className="text-[#363853] text-[16px] font-[400] font-sf">
                Top 10 receive personalized feedback
              </p>
            </span>
          </div>
        </div>

        <div className="w-full flex flex-col gap-4 bg-[#fff] p-6 rounded-[8px] shadow">
          <h2 className="font-clashDisplay-semibold text-[#6A0AE4] text-[16px]">
            Prizes
          </h2>

          <div className="flex flex-wrap gap-2">
            {hackton?.skills?.map((cat, index: number) => (
              <p
                key={index}
                className="border border-[#7676801F] px-[6px] py-[3px] text-[#191919] font-[400] text-[10px] rounded-[12px]"
              >
                {cat}
              </p>
            ))}
          </div>
        </div>

        <div className="w-full flex flex-col gap-4  border border-[#FFC433] bg-[#FFF8EF] p-6 rounded-[8px]">
          <h3 className="text-[#232949] text-[14px] font-[500] font-sf">
            Want to reach more customers{" "}
          </h3>
          <div className=" w-full flex items-start gap-3">
            <BsShieldFillCheck color="#FFC433" size={20} />
            <p className="flex-1 text-[#232949] text-[14px] text-left font-[500] font-sf">
              Start a creator led campaign that will go vrial and drive more
              sales and engagement for your brand
            </p>
          </div>
          <div className=" w-full flex items-start gap-3">
            <TbExclamationCircleFilled color="#FFC433" size={20} />
            <p className="flex-1 text-[#232949] text-[14px] text-left font-[500] font-sf">
              Minimum fund amount N500
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex flex-col gap-6 font-inter">
        <div className="w-full relative h-[213px] flex items-center justify-center rounded-[8px] overflow-hidden">
          {/* Background Image */}
          <div
            style={{
              backgroundImage: `url(${Images.himage.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="absolute inset-0"
          ></div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-black/85"></div>

          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <video
              src="https://videos.pexels.com/video-files/3156778/3156778-hd_1920_1080_30fps.mp4"
              controls
              className="w-[300px] h-[180px] object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1 bg-[#fff] p-6 rounded-[16px]">
          <h2 className="text-[#000000] text-[16px] font-[700] font-sf">
            About the Hackathon
          </h2>
          <p className="text-[#000000] text-[14px] font-[500] font-sf">
            Do Good Media Shorts Editor Hackathon
          </p>
          <div className="flex items-center gap-6 ">
            <p className="text-[#000000] text-[16px] font-[400] font-sf">
              Start - 1:00 PM
            </p>
            <p className="text-[#000000] text-[16px] font-[400] font-sf">
              End - 3:00 PM
            </p>
          </div>
          <div className="flex items-center gap-6 ">
            <p className="text-[#000000] text-[16px] font-[700] font-sf">
              Jun 16th (Mon)
            </p>
            <p className="text-[#000000] text-[16px] font-[700] font-sf">
              Jun 19th (Thu)
            </p>
          </div>
          <div>
            <p className="text-[#616161] text-[14px] font-[400]">
              Do Good Media is growing and we are looking for Shorts editor that
              has a passion for creating shorts that celebrate stories of
              ordinary people doing extraordinary things. <br /> <br />
              For this hackathon you will be taking a long form piece that aired
              on CBS and was published on David's Youtube channel and
              thoughtfully re-edit into a high performing short form piece that
              3 minutes or less. The ideal destination platform would be
              Instagram, Facebook, TikTok and Youtube Shorts. <br /> <br />
              David loves providing feedback, so the top 5 winners will get a 10
              minute feedback call with David - a CBS Morning correspondent who
              produces weekly network television segments!
            </p>
          </div>

          <button className="w-full flex items-center justify-center cursor-pointer bg-[#6A0AE4] text-white hover:bg-[#6A0AE4]/80 transition-colors duration-300 px-10 py-3 mt-4 gap-2 rounded-3xl">
            <p className={`text-[16px] font-[500] ${inter.className}`}>
              Join Hackathon
            </p>
          </button>
        </div>

        <div className="flex flex-col gap-1 bg-[#fff] p-6 rounded-[16px]">
          <h2 className="text-[#000000] text-[16px] font-[700] font-sf">
            Job Description
          </h2>
          <p className="text-[#616161] text-[16px] font-[400]">
            Earn a spot on one growing team making heartfelt content that stirs
            the soul. <br />
            David Begnaud has over 2M followers, and his shorts on Instagram,
            FB, and Youtube perform extraordinarily. We are looking for you to
            help increase our volume! We&apos;re looking for passionate,
            detail-oriented editors who can match our unique voice and are ready
            to commit fully to shaping the future of viral content! Budget: $100
            per video
          </p>

          <p className="font-[400] text-[#090909] text-[16px]">
            Budget: <span className="text-[#616161] ]">$100 per video</span>
          </p>
        </div>

        <div className="flex flex-col gap-1 bg-[#fff] p-6 rounded-[16px]">
          <h2 className="text-[40px] text-[#000] font-sf font-[700]">
            Frequently asked questions
          </h2>
          <Accordion
            type="single"
            defaultValue="item-1"
            collapsible
            className="w-full flex flex-col gap-4"
          >
            <AccordionItem
              className="border-b data-[state=open]:border-tcolor p-2"
              value="item-1"
            >
              <AccordionTrigger className="text-[#0D0D0D] font-[600] text-[16px]">
                Question text to be here
              </AccordionTrigger>
              <AccordionContent className="text-[15px] font-[400] text-[#4E4E4E]">
                Discover personalized workouts, track your progress, and achieve
                your goals with our all-in-one fitness app.Discover personalized
                workouts, track your progress, and achieve your goals with our
                all-in-one fitness app.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="border-b data-[state=open]:border-tcolor p-2"
              value="item-2"
            >
              <AccordionTrigger className="text-[#0D0D0D] font-[600] text-[16px]">
                Do you offer support with campaign planning?
              </AccordionTrigger>
              <AccordionContent className="text-[15px] font-[400] text-[#4E4E4E]">
                Yes! Our in-house team can help you refine your campaign brief
                and match you with the right creators or strategists to achieve
                your goal.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="border-b data-[state=open]:border-tcolor p-2"
              value="item-3"
            >
              <AccordionTrigger className="text-[#0D0D0D] font-[600] text-[16px]">
                Is there a minimum budget required to hire creators?
              </AccordionTrigger>
              <AccordionContent className="text-[15px] font-[400] text-[#4E4E4E]">
                No strict minimum, but we recommend setting realistic budgets
                based on content type and creator tier. You can always start
                small and scale up.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="border-b data-[state=open]:border-tcolor p-2"
              value="item-4"
            >
              <AccordionTrigger className="text-[#0D0D0D] font-[600] text-[16px]">
                Can I request creators in specific regions or languages?
              </AccordionTrigger>
              <AccordionContent className="text-[15px] font-[400] text-[#4E4E4E]">
                Yes! We allow you to filter by location, language, and audience
                demographic so you can localize your campaigns as needed.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="border-b data-[state=open]:border-tcolor p-2"
              value="item-4"
            >
              <AccordionTrigger className="text-[#0D0D0D] font-[600] text-[16px]">
                CHow long does it take to get matched with a creator?
              </AccordionTrigger>
              <AccordionContent className="text-[15px] font-[400] text-[#4E4E4E]">
                Usually within 24-72 hours. We aim for quick matches, but we
                also prioritize quality and alignment, especially for niche
                projects.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default HacktonDetails;
