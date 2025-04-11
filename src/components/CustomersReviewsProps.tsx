import { inter } from "@/font";
import Image from "next/image";
import React from "react";

interface CustomerReviewPropsType {
  name: string;
  review: string;
  image: string;
  location: string;
}

const CustomersReviewsProps: React.FC<CustomerReviewPropsType> = ({
  name,
  review,
  image,
  location,
}) => {
  return (
    <div className=" w-full sm:w-[26em]  min-h-[10em] mx-auto flex flex-col items-center gap-8 justify-center rounded-2xl p-6 shadow bg-white  ">
      <p className={`text-[14px] text-[#141011] font-[300] ${inter.className}`}>{review}</p>

      <div className="sm:w-full  flex text-nowrap gap-3 items-center justify-center">
        <Image
          src={image}
          alt="Cusromer Image"
          width={1000}
          height={1000}
          className="size-14 object-cover rounded-full"
        />
        <div className="flex flex-col gap-1 items-start justify-center">
          <h3 className={`text-tcolor font-[500] text-[15px] ${inter.className}`}>{name}</h3>
          <p className={`text-[#808080] font-normal text-[14px] ${inter.className}`}>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomersReviewsProps;
