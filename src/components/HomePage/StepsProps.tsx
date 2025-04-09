import { Images } from "@/assets";
import { dm_sans, instrument_sans } from "@/font";
import Image from "next/image";
import React from "react";


interface StepsPropsType {
    title: string;
    content: string;
    className?: string;
}


const StepsProps: React.FC<StepsPropsType> = ({title, content, className}) => {
  return (
    <div
      className={`  max-w-[420px] xl:w-[500px] h-[420px] xl:h-[500px] flex flex-col items-start gap-5 xl:gap-10 rounded-3xl py-5 lg:py-10  px-7 sm:px-10 bg-[#FAFAFA] ${className}`}
    >
      <div className=" bg-[#2D38A81A] size-[5rem] flex items-center justify-center rounded-full">
        <Image
          src={Images.icon1}
          alt="icon"
          width={500}
          height={500}
          className="size-8"
        />
      </div>

      <div className="flex flex-col gap-4">
        <h1 className={` text-[#141011] text-[20px] font-[600] ${-instrument_sans.className}`}>{title}</h1>
        <p className={`text-[#5E5D6F] font-normal text-[18px] ${dm_sans.className}`}>
         {content}
        </p>
      </div>
    </div>
  );
};

export default StepsProps;
