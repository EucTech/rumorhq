import { inter } from "@/font";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const FAQS = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-20 py-10 px-5 md:px-10 lg:px-20 2xl:px-40">
      <div className="w-full lg:w-[60%] xl:w-[40%] flex flex-col text-center lg:text-start items-center lg:items-start justify-center gap-6">
        <p
          className={`w-fit flex items-center gap-4 font-bold text-[12px] text-tcolor bg-[#FFF6F0] px-5 py-1 rounded-4xl  ${inter.className} `}
        >
          Frequently Asked Questions 🙋‍♀️
        </p>
        <h2 className="leading-[1.2] text-[35px] sm:text-[40px] md:text-[50px] text-[#141011] font-[700]">
          Got questions? We got <span className="text-tcolor">answers!</span>
        </h2>
        <p className="w-full lg:w-[90%] text-[#6C747D] text-[16px] font-[400] ">
          Feel free to reach out to us if you have more questions for us.
        </p>
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeG7bng5pEu0hgLzlFtSt9HfUup-MI4qzwH7D0P9gMtWdNhjQ/viewform?usp=header">
          <Button className="flex items-center cursor-pointer bg-tcolor text-white hover:bg-tcolor/90 transition-colors duration-300 px-8 py-5 gap-2 rounded-md">
            <p className="text-[15px] font-[600]">Book a Call</p>
          </Button>
        </Link>
      </div>

      <div className={`w-full lg:w-[60%] ${inter.className} py-2`}>
        <Accordion
          type="single"
          defaultValue="item-1"
          collapsible
          className="w-full flex flex-col gap-4"
        >
          <AccordionItem
            className="border data-[state=open]:border-tcolor rounded-2xl p-2"
            value="item-1"
          >
            <AccordionTrigger className="text-[#0D0D0D] font-[600] text-[16px]">
              Can I hire for both short-term and long-term projects?
            </AccordionTrigger>
            <AccordionContent className="text-[15px] font-[400] text-[#4E4E4E]">
              Absolutely. Whether you need a one-off campaign or an ongoing
              content strategist, we support flexible collaboration options.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="border data-[state=open]:border-tcolor rounded-2xl p-2"
            value="item-2"
          >
            <AccordionTrigger className="text-[#0D0D0D] font-[600] text-[16px]">
              Do you offer support with campaign planning?
            </AccordionTrigger>
            <AccordionContent className="text-[15px] font-[400] text-[#4E4E4E]">
              Yes! Our in-house team can help you refine your campaign brief and
              match you with the right creators or strategists to achieve your
              goal.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="border data-[state=open]:border-tcolor rounded-2xl p-2"
            value="item-3"
          >
            <AccordionTrigger className="text-[#0D0D0D] font-[600] text-[16px]">
              Is there a minimum budget required to hire creators?
            </AccordionTrigger>
            <AccordionContent className="text-[15px] font-[400] text-[#4E4E4E]">
              No strict minimum, but we recommend setting realistic budgets
              based on content type and creator tier. You can always start small
              and scale up.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="border data-[state=open]:border-tcolor rounded-2xl p-2"
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
            className="border data-[state=open]:border-tcolor rounded-2xl p-2"
            value="item-4"
          >
            <AccordionTrigger className="text-[#0D0D0D] font-[600] text-[16px]">
              CHow long does it take to get matched with a creator?
            </AccordionTrigger>
            <AccordionContent className="text-[15px] font-[400] text-[#4E4E4E]">
              Usually within 24-72 hours. We aim for quick matches, but we also
              prioritize quality and alignment, especially for niche projects.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQS;
