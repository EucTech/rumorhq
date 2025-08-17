"use client";
import { inter } from "@/font";
import Image from "next/image";
import React from "react";
import { IoLocationOutline, IoShareSocialOutline } from "react-icons/io5";
import { LuDot } from "react-icons/lu";
import { MdDateRange } from "react-icons/md";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const HacktonCard = ({ hackton }: { hackton: HacktonProps }) => {
  const router = useRouter();
  return (
    <div className="w-full md:w-[350px] lg:w-[300px] xl:w-[400px] h-fit p-2 rounded-[18px] bg-[#F7F1FE57]">
      <Image
        src={hackton.image}
        alt="Hackton"
        width={500}
        height={500}
        className="w-full h-[178px] object-cover rounded-[18px]"
      />

      <div className="w-full flex items-start flex-col gap-2 pt-6">
        <div className="w-full flex items-center gap-4">
          <span className="flex items-center gap-1">
            <IoLocationOutline size={10} color="#6A0AE4" />{" "}
            <p className="text-[#5E5D6F] text-[9px] font-[400] font-sf">
              {hackton.location}
            </p>
          </span>
          <span className="flex items-center justify-center gap-1">
            <MdDateRange size={13} color="#6A0AE4" />{" "}
            <p className="text-[#5E5D6F] text-[9px] font-[400] font-sf">
              {hackton.date}
            </p>
          </span>
        </div>

        <div className="w-full flex items-center justify-between">
          <h3 className="text-[#232536] font-[400] text-[12px] font-sf ">
            {hackton.title}
          </h3>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-[#6C757D]">
              <LuDot color="#6C757D66" size={30} />
              <IoShareSocialOutline
                size={20}
                color="#6C757D"
                className="-ml-3"
              />
              <p
                className={` text-[#6C757D] text-[11px] font-[400] ${inter.className}`}
              >
                1k+ Joined
              </p>
            </div>
            <div className="flex items-center gap-1 text-[#6C757D]">
              <LuDot color="#6C757D66" size={30} />
              <p
                className={` text-[#6C757D] text-[11px] font-[400] -ml-2 ${inter.className}`}
              >
                | Visual Stories
              </p>
            </div>
          </div>
        </div>

        <p className="text-[#101828] text-[17px] font-clashDisplay-bold">
          $4K-10K USDT
        </p>

        <div className="flex flex-wrap gap-2">
          {hackton.category.map((cat, index: number) => (
            <p
              key={index}
              className="border border-[#7676801F] px-[6px] py-[3px] text-[#191919] font-[400] text-[8px] rounded-[12px]"
            >
              {cat}
            </p>
          ))}
        </div>

        <Button
          onClick={() => {router.push(`/hackton/${hackton.id}`)}}
          className="w-full flex items-center cursor-pointer bg-[#6A0AE4] text-white hover:bg-[#6A0AE4]/80 transition-colors duration-300 px-10 py-5 gap-2 rounded-3xl"
        >
          <p className={`text-[16px] font-[500] ${inter.className}`}>
            Join Challenge
          </p>
        </Button>
      </div>
    </div>
  );
};

export default HacktonCard;
