import Link from "next/link";
import React from "react";
import { IoMdCheckboxOutline } from "react-icons/io";

interface EventPropsType {
  title: string;
  edate: string;
  eheading: string;
  eweeks: string;
  content1?: string;
  content2?: string;
  content3?: string;
  content4?: string;
  content5?: string;
  content6?: string;
}

const EventProps = ({
  title,
  edate,
  eheading,
  eweeks,
  content1,
  content2,
  content3,
  content4,
  content5,
  content6,
}: EventPropsType) => {
  return (
    <div className="flex flex-col gap-4 w-[26em] h-fit min-h-[30em] rounded-lg border border-[#83838333] py-8 px-4">
      <div className="flex flex-col items-start gap-4">
        <div className="flex flex-wrap items-center justify-between gap-5 font-sf">
          <h2 className="text-[22px] font-[700]">{title}</h2>
          <button className="text-[14px] bg-[#000] text-white py-1 px-3 rounded-4xl ">
            Starting {edate}
          </button>
        </div>
        <p className="w-full sm:w-[80%] text-[#5E5D6F] text-[18px] font-[400] font-sf">
          {eheading}
        </p>
        <div className="flex items-end gap-1 text-[#248C00] font-outfit">
          <h1 className="text-[34px] font-[500] leading-[1.1]">{eweeks}</h1>
          <p className="text-[156x]">weeks</p>
        </div>

        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSdSWD0u7wISFTFCfS36ZgCoReHuUG5rgBv_mNaw6dUzPXtIFw/viewform?usp=header"
          className="w-full flex items-center justify-center text-[14px] bg-tcolor text-white py-2 px-3 rounded-4xl"
        >
          Register
        </Link>
      </div>

      <div className="w-full flex flex-col items-start gap-5 font-outfit">
        <div className="flex items-start gap-2">
          <IoMdCheckboxOutline className="text-tcolor flex-shrink-0 size-6 " />
          <p className="font-[400] text-black text-[15px]">{content1}</p>
        </div>
        <div className="flex items-start gap-2">
          <IoMdCheckboxOutline className="text-tcolor flex-shrink-0 size-6 " />
          <p className="font-[400] text-black text-[15px]">{content2}</p>
        </div>
        <div className="flex items-start gap-2">
          <IoMdCheckboxOutline className="text-tcolor flex-shrink-0 size-6 " />
          <p className="font-[400] text-black text-[15px]">{content3}</p>
        </div>
        <div className="flex items-start gap-2">
          <IoMdCheckboxOutline className="text-tcolor flex-shrink-0 size-6 " />
          <p className="font-[400] text-black text-[15px]">{content4}</p>
        </div>
        <div className="flex items-start gap-2">
          <IoMdCheckboxOutline className="text-tcolor flex-shrink-0 size-6 " />
          <p className="font-[400] text-black text-[15px]">{content5}</p>
        </div>
        <div className="flex items-start gap-2">
          <IoMdCheckboxOutline className="text-tcolor flex-shrink-0 size-6 " />
          <p className="font-[400] text-black text-[15px]">{content6}</p>
        </div>
      </div>
    </div>
  );
};

export default EventProps;
