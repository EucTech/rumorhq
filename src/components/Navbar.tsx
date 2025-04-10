import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { inter } from "@/font";

const Navbar = () => {
  return (
    <div className="fixed z-50 w-full h-[5em] bg-bgcolor backdrop-blur-md flex items-center px-5 md:px-10 lg:px-24 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] ">
      <div className="w-full flex items-center gap-10">
        {/* <Link href="/">
          <Image
            src={Images.logo}
            alt="Quick rent logo"
            width={500}
            height={500}
            className="w-[8em]"
          />
        </Link> */}
        <Link href="/">
        <h1 className="w-[8em] text-white font-bold text-[28px]">Rumorhq</h1>
        </Link>
      </div>

      <div className={` hidden lg:flex items-center gap-6 ${inter.className}`}>
        <ul className=" hidden lg:flex items-center gap-6 text-[15px] text-white font-[500]">
          <Link
            className="hover:text-tcolor-2 transition-colors duration-300"
            href="/creators"
          >
            <li>Creators</li>
          </Link>
          <Link
            className="hover:text-tcolor-2 transition-colors duration-300"
            href="/brands"
          >
            <li>Brands</li>
          </Link>
          <Link
            className="hover:text-tcolor-2 transition-colors duration-300"
            href="/hackathons"
          >
            <li>Hackathons</li>
          </Link>
          <Link
            className="hover:text-tcolor-2 transition-colors duration-300"
            href="/gallery"
          >
            <li>Gallery</li>
          </Link>
        </ul>

        <Link href="#">
          <Button className="flex items-center cursor-pointer bg-tcolor text-white hover:bg-tcolor-2 transition-colors duration-300 px-6! py-5 gap-2 rounded-md">
            <p className="text-[15px] font-[400]">Join our Waitlist</p>
          </Button>
        </Link>
      </div>

      <div className="lg:hidden block  ">
        <Sheet >
          <SheetTrigger asChild>
            <Button variant="outline">
              <GiHamburgerMenu className="lg:hidden block text-[30px] text-tdeepblue" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <VisuallyHidden>
              <SheetTitle>Navbar List</SheetTitle>
              <SheetDescription>Navbar List</SheetDescription>
            </VisuallyHidden>
            <div className={`grid gap-8 py-20 pl-6 ${inter.className}`}>
              <ul className=" flex flex-col gap-6 text-white text-[15px] font-[500]">
                <Link className="hover:text-tblue-2" href="/creators">
                  <li>Creators</li>
                </Link>
                <Link className="hover:text-tblue-2" href="/brands">
                  <li>Brands</li>
                </Link>
                <Link className="hover:text-tblue-2" href="/hackathons">
                  <li>Hackathons</li>
                </Link>
                <Link className="hover:text-tblue-2" href="/gallery">
                  <li>Gallery</li>
                </Link>
              </ul>

              <div className="flex flex-wrap items-center gap-6">
                <Link href="#">
                  <Button className="flex items-center cursor-pointer bg-tcolor transition-colors duration-300 text-white hover:bg-tcolor-2 px-6! py-5 gap-2 rounded-md">
                    <p className="text-[15px] font-[400]">Join our Waitlist</p>
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
