"use client";
import React, { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { Images } from "@/assets";

const TalentModal = ({ onClose }: { onClose?: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const popoverRef = useRef<HTMLDivElement>(null); // Ref for the popover content
  const backdropRef = useRef<HTMLDivElement>(null); // Ref for the backdrop

  const pathname = usePathname();

  const handleClick = (link: string) => {
    setIsOpen(false);
    if (onClose) onClose();
    router.push(link);
  };

  // Close the popover when clicking outside the popover
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        backdropRef.current &&
        !backdropRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // Add event listener to the document to handle outside clicks
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Clean up the event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isActive = (path: string) =>
    pathname == path ? "text-tcolor font-bold" : "";

  return (
    <div className="relative">
      <div
        className={`flex items-center gap-2 cursor-pointer hover:text-tcolor ${pathname.startsWith("/talents") ? "text-tcolor" : "text-white"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p>Talents</p>
        <ChevronDown className="size-5" />
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          ref={backdropRef}
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Popover content */}
      {isOpen && (
        <div
          ref={popoverRef}
          className="lg:w-[35em] h-fit flex flex-col gap-8 absolute font-sf z-20 top-13 left-0 lg:-left-50 lg:right-3 bg-black text-white p-6 rounded-lg shadow-lg"
        >
          <div className="flex items-center justify-center gap-4 ">
            <div className=" bg-[#BF91F9]/10 size-[3rem] flex items-center justify-center rounded-full">
              <Image
                src={Images.icon1}
                alt="icon"
                width={500}
                height={500}
                className="size-5"
              />
            </div>
            <div
              onClick={() => handleClick("/talents/earn-with-your-content")}
              className={`flex-1 flex flex-col items-start gap-3 cursor-pointer group ${isActive("/talents/earn-with-your-content")}`}
            >
              <h1 className="text-[15px] font-bold group-hover:text-tcolor">
                Earn with your Content
              </h1>
              <p className="text-[14px]">
                Post your job description and let us know what you&apos;re
                looking for.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 ">
            <div className=" bg-[#BF91F9]/10 size-[3rem] flex items-center justify-center rounded-full">
              <Image
                src={Images.icon1}
                alt="icon"
                width={500}
                height={500}
                className="size-5"
              />
            </div>
            <div
              onClick={() => handleClick("/talents/join-our-talent-pool")}
              className={`flex-1 flex flex-col items-start gap-3 cursor-pointer group ${isActive("/talents/join-our-talent-pool")}`}
            >
              <h1 className="text-[15px] font-bold group-hover:text-tcolor">
                Join our Talent Pool
              </h1>
              <p className="text-[14px]">
                Post your job description and let us know what you&apos;re
                looking for.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 ">
            <div className=" bg-[#BF91F9]/10 size-[3rem] flex items-center justify-center rounded-full">
              <Image
                src={Images.icon1}
                alt="icon"
                width={500}
                height={500}
                className="size-5"
              />
            </div>
            <div
              onClick={() => handleClick("/talents/join-our-bootcamp")}
              className={`flex-1 flex flex-col items-start gap-3 cursor-pointer group ${isActive("/talents/join-our-bootcamp")}`}
            >
              <h1 className="text-[15px] font-bold group-hover:text-tcolor">
                Join Our Bootcamp
              </h1>
              <p className="text-[14px]">
                Post your job description and let us know what you&apos;re
                looking for.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TalentModal;
