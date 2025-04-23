import React, { useState } from "react";
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
import { usePathname } from "next/navigation";
import TalentModal from "./TalentPage/TalentModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeSheet = () => setIsOpen(false);
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname == path ? "text-tcolor font-bold" : "";

  return (
    <div className="fixed z-50 w-full h-[5em] bg-bgcolor backdrop-blur-md flex items-center px-5 md:px-10 lg:px-24 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="w-full flex items-center gap-10">
        <Link href="/">
          <h1 className="w-[8em] text-white font-bold text-[28px]">Rumorhq</h1>
        </Link>
      </div>

      <div className={`hidden lg:flex items-center gap-6 ${inter.className}`}>
        <ul className="flex items-center gap-6 text-[15px] text-white font-[500]">
          <Link
            className={`hover:text-tcolor transition-colors duration-300 ${isActive(
              "/brands"
            )}`}
            href="/brands"
          >
            <li>Brands</li>
          </Link>
          <div>
            <TalentModal />
          </div>
          <Link
            className={`hover:text-tcolor transition-colors duration-300 ${isActive(
              "/creators"
            )}`}
            href="/creators"
          >
            <li>Creators</li>
          </Link>
          <Link
            className={`hover:text-tcolor transition-colors duration-300 ${isActive(
              "/resources"
            )}`}
            href="/resources"
          >
            <li>Resources</li>
          </Link>
          {/* <Link className="hover:text-tcolor transition-colors duration-300" href="/gallery">
            <li>Gallery</li>
          </Link> */}
        </ul>

        <Link href="#">
          <Button className="flex items-center cursor-pointer bg-tcolor text-white hover:bg-tcolor/70 transition-colors duration-300 px-6! py-5 gap-2 rounded-md">
            <p className="text-[15px] font-[400]">Join our Waitlist</p>
          </Button>
        </Link>
      </div>

      <div className="lg:hidden block">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
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
              <ul className="flex flex-col gap-6 text-white text-[15px] font-[500]">
                <Link href="/brands" className={`${isActive("/brands")}`}>
                  <li className="hover:text-tblue-2" onClick={closeSheet}>
                    Brands
                  </li>
                </Link>
                <div>
                  <TalentModal onClose={closeSheet} />
                </div>
                <Link href="/creators" className={`${isActive("/creators")}`}>
                  <li className="hover:text-tblue-2" onClick={closeSheet}>
                    Creators
                  </li>
                </Link>
                <Link href="/resources" className={`${isActive("/resources")}`}>
                  <li className="hover:text-tblue-2" onClick={closeSheet}>
                    Resources
                  </li>
                </Link>
              </ul>

              <div className="flex flex-wrap items-center gap-6">
                <Link href="#">
                  <Button
                    onClick={closeSheet}
                    className="flex items-center cursor-pointer bg-tcolor transition-colors duration-300 text-white hover:bg-tcolor/70 px-6! py-5 gap-2 rounded-md"
                  >
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
