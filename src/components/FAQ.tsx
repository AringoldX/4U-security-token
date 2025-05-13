import { Collapse } from "@mui/material";
import { useState } from "react";

const Accordion = ({ title, description }: any) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={
        "flex flex-col p-6 rounded-[16px] cursor-pointer text-black transition " +
        (open ? "bg-[#1CF2AA]" : "bg-[#1CF2AA]")
      }
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center space-x-2">
        <span className="font-black text-[20px] leading-[22px]">{title}</span>
        <img
          className={open ? "rotate-180" : ""}
          src="/images/arrow-down-dark.svg"
        />
      </div>
      <div className="mt-2">
        <Collapse in={open}>
          <span className="text-[16px] leading-[24px]">{description}</span>
        </Collapse>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <div id="about" className="flex flex-col items-center pt-[60px] w-full mx-auto px-5 pb-[74px]">
      <div className="flex flex-col space-y-[33.37px]">
        <span className="uppercase font-black text-[47px] text-center">
          Frequently Asked Questions
        </span>
        <div className="flex flex-col space-y-6 flex-1">
          <Accordion
            title="Can I ask Question 1?"
            description="This security token is full of all tokens advantages and will help you find cool constructed places on earth."
          />
          <Accordion
            title="Where is Question 2?"
            description="This security token is full of all tokens advantages and will help you find cool constructed places on earth."
          />
          <Accordion
            title="Tell me answer of Question 3"
            description="This security token is full of all tokens advantages and will help you find cool constructed places on earth."
          />
          <Accordion
            title="Let's discuss about Question 4"
            description="This security token is full of all tokens advantages and will help you find cool constructed places on earth."
          />
          <Accordion
            title="Good question, Question 5"
            description="This security token is full of all tokens advantages and will help you find cool constructed places on earth."
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
