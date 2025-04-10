import { dm_sans } from "@/font";
import React from "react";
import { RiUserSmileFill } from "react-icons/ri";

interface ServicesCardPropsType {
    iconStyle?: string;
    title: string;
    content: string;
}

const ServicesCardProps: React.FC<ServicesCardPropsType> = ({iconStyle, title, content}) => {
  return (
    <div className={` min-w-[20em] sm:w-[20em] min-h-[15em] flex flex-col items-center text-center gap-3 border border-[#BF91F9] p-5 ${dm_sans.className}`}>
      <div className={`size-14 flex items-center justify-center bg-[#006E88] rounded-full ${iconStyle}`}>
        <RiUserSmileFill className="text-[#fff] size-7" />
      </div>

      <p className="text-white text-[17px] font-bold mt-3">{title}</p>
      <p className="text-white text-[14px] font-[300]">
        {content}
      </p>
    </div>
  );
};

export default ServicesCardProps;
