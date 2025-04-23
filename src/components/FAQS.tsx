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
        <p className="w-full lg:w-[90%] text-[#6C747D] text-[16px] font-[400] ">Feel free to reach out to us if you have more questions for us.</p>
        <Link href="#">
          <Button className="flex items-center cursor-pointer bg-tcolor text-white hover:bg-tcolor/90 transition-colors duration-300 px-8 py-5 gap-2 rounded-md">
            <p className="text-[15px] font-[400]">Contact Us</p>
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
          <AccordionItem className="border data-[state=open]:border-tcolor rounded-2xl p-2" value="item-1" >
            <AccordionTrigger className="text-[#0D0D0D] font-[600] text-[16px]">
              How do I sign up?
            </AccordionTrigger>
            <AccordionContent className="text-[15px] font-[400] text-[#4E4E4E]">
              You can sign up by downloading our app and filling out the
              registration form with your details.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="border data-[state=open]:border-tcolor rounded-2xl p-2" value="item-2">
            <AccordionTrigger className="text-[#0D0D0D] font-[600] text-[16px]">
              What payment methods are supported?
            </AccordionTrigger>
            <AccordionContent className="text-[15px] font-[400] text-[#4E4E4E]">
              You can sign up by downloading our app and filling out the
              registration form with your details.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="border data-[state=open]:border-tcolor rounded-2xl p-2" value="item-3">
            <AccordionTrigger className="text-[#0D0D0D] font-[600] text-[16px]">
            Can I pay bills for someone else?
            </AccordionTrigger>
            <AccordionContent className="text-[15px] font-[400] text-[#4E4E4E]">
              Absolutely! We specialise in guiding clients through the entire AI
              model training and development lifecycle. From initial data
              assessment and model selection to training, validation, and
              deployment, we provide expert support at every step. We&apos;ll
              help you bring your AI vision to life, even if you&apos;re
              starting from
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="border data-[state=open]:border-tcolor rounded-2xl p-2" value="item-4">
            <AccordionTrigger className="text-[#0D0D0D] font-[600] text-[16px]">
            How do I purchase data or airtime?
            </AccordionTrigger>
            <AccordionContent className="text-[15px] font-[400] text-[#4E4E4E]">
              Absolutely! We specialise in guiding clients through the entire AI
              model training and development lifecycle. From initial data
              assessment and model selection to training, validation, and
              deployment, we provide expert support at every step. We&apos;ll
              help you bring your AI vision to life, even if you&apos;re
              starting from
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQS;
