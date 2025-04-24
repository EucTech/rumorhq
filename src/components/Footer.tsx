import { dm_sans, inter } from "@/font";
import Link from "next/link";
import React from "react";
import {
  GrFacebookOption,
  GrInstagram,
  GrLinkedinOption,
  GrTwitter,
} from "react-icons/gr";

const Footer = () => {
  return (
    <div className=" relative overflow-hidden w-full flex flex-col items-center gap-4 pt-20 bg-no-repeat bg-cover bg-[url('/footer.png')]">
      
      <div className="w-full z-30 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 text-[#bcc9f3]  gap-5 sm:gap-10  px-10 md:px-20 pb-4">
        <div className="flex flex-col gap-4">
          <h1 className={`text-white font-bold text-lg ${dm_sans.className}`}>
            Platforms
          </h1>
          <ul
            className={`flex flex-col gap-2 text-[15px] font-normal ${inter.className}`}
          >
            <Link className="hover:text-white text-[#CBCBCC]" href={"/creators"}>
              <li>Creators</li>
            </Link>
            <Link className="hover:text-white text-[#CBCBCC]" href={"/brands"}>
              <li>Brands</li>
            </Link>
            <Link className="hover:text-white text-[#CBCBCC]" href="/talents">
              <li>Talents </li>
            </Link>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className={`text-white font-bold text-lg ${dm_sans.className}`}>
            Features
          </h1>
          <ul
            className={`flex flex-col gap-2 text-[15px] font-normal ${inter.className}`}
          >
            <Link className="hover:text-white text-[#CBCBCC]" href={"/"}>
              <li>Talent Pipeline</li>
            </Link>
            <Link className="hover:text-white text-[#CBCBCC]" href={"/"}>
              <li>Hackathon </li>
            </Link>
            <Link className="hover:text-white text-[#CBCBCC]" href={"/"}>
              <li>Payout</li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className={`text-white font-bold text-lg ${dm_sans.className}`}>
            Company
          </h1>
          <ul
            className={`flex flex-col gap-2 text-[15px] font-normal ${inter.className}`}
          >
            <Link className="hover:text-white text-[#CBCBCC]" href={"/"}>
              <li>About us </li>
            </Link>
            <Link className="hover:text-white text-[#CBCBCC]" href={"/"}>
              <li>Privacy policy </li>
            </Link>
            <Link className="hover:text-white text-[#CBCBCC]" href={"/"}>
              <li>Term of use </li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className={`text-white font-bold text-lg ${dm_sans.className}`}>
            Resources
          </h1>
          <ul
            className={`flex flex-col gap-2 text-[15px] font-normal ${inter.className}`}
          >
            <Link className="hover:text-white text-[#CBCBCC]" href={"https://withaudacious.substack.com/publish/home?utm_source=menu"}>
              <li>Newsletter</li>
            </Link>
            <Link className="hover:text-white text-[#CBCBCC]" href={"/"}>
              <li>Community</li>
            </Link>
            <Link className="hover:text-white text-[#CBCBCC]" href={"/"}>
              <li>Press release</li>
            </Link>

            <Link className="hover:text-white text-[#CBCBCC]" href={"/"}>
              <li>FAQ</li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className={`text-white font-bold text-lg ${dm_sans.className}`}>
            Contact
          </h1>
          <ul
            className={`flex flex-col gap-2 text-[15px] font-normal text-[#CBCBCC] ${inter.className}`}
          >
            <Link
              className="hover:text-white text-[#CBCBCC]"
              href={"mailto:Support@creatorsavenue.com"}
            >
              <li>support@creatorsavenue.com</li>
            </Link>
            <li>+2348101832699</li>
            <li>Applewood Estate1, Orchid Road Lekki, Lagos State </li>
          </ul>
        </div>
      </div>

      <div className="w-[90%] h-2 border-b border-[#898A8C] z-30" />

      <div className="w-full z-30 text-white bg-tdeepblue flex flex-col md:flex-row gap-5 items-center justify-between py-5 px-5 md:px-20">
        <p className=" text-center text-sm">
          &copy;2025 Creators avenue. All right reserved
        </p>

        <div className="flex items-center gap-4">
          <p className={`text-white text-[16px] sm:text-[18px] font-medium ${dm_sans.className}`}>Follow Us</p>
          <div className="flex items-center gap-4 ">
            <Link href="#" className=" size-8 sm:size-10 flex items-center justify-center rounded-full border border-[#898A8C]">
              <GrFacebookOption className="hover:text-[#898A8C] text-[#fff] size-3 sm:size-4" />
            </Link>
            <Link href="https://www.instagram.com/mendhq/profilecard/?igsh=N2NlOG5udzdtMzRt" className=" size-8 sm:size-10 flex items-center justify-center rounded-full border border-[#898A8C]">
              <GrInstagram className="hover:text-[#898A8C] text-[#fff] size-3 sm:size-4" />
            </Link>
            <Link href="#" className=" size-8 sm:size-10 flex items-center justify-center rounded-full border border-[#898A8C]">
              <GrTwitter className="hover:text-[#898A8C] text-[#fff] size-3 sm:size-4" />
            </Link>
            <Link href="#" className=" size-8 sm:size-10 flex items-center justify-center rounded-full border border-[#898A8C]">
              <GrLinkedinOption className="hover:text-[#898A8C] text-[#fff] size-3 sm:size-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className=" absolute w-[20em] h-[20em] bg-[#BF91F9]/20 blur-3xl rounded-full translate-y-30   -bottom-[150px]  "></div>
    </div>
  );
};

export default Footer;
