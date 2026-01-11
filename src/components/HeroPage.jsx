import React from "react";
import { Contact } from "lucide-react";
import { ArrowDownToLine } from "lucide-react";

const HeroPage = () => {
  return (
    <div className="h-screen w-screen bg-[#6b776b] flex items-center justify-center flex-col">
      <h1 className="text-[#f9f8f1] text-7xl mb-5 font-hero font-bold">
        Hi, I'm Dakshesh Sharma
      </h1>
      <h2 className="text-[#e9e8d8] text-6xl mb-6 font-hero font-bold">
        Web Developer
      </h2>
      <p className="text-[#d0d0c6] w-140 text-center text-[21px]">
        AI enthusiast and full-stack developer dedicated to building
        intelligent, scalable solutions. From web apps to automation, I turn
        code into powerful digital experiences.
      </p>
      <div className="flex gap-3 mt-10">
        <a href="/resume.pdf" target="_blank">
          <button className="text-[18px] bg-[#e9e8d8] text-[#828e82] pt-2 pb-2 pl-3 pr-3 flex rounded-2xl w-auto cursor-pointer items-center justify-center transition duration-500 border-b-6 ease-in-out border-r-4 hover:border-[#4d574d] hover:bg-[#d7d6c7] hover:text-[#4d574d]">
            <ArrowDownToLine className="mr-2" size={22} /> Download Resume
          </button>
        </a>
        <a href="/resume.pdf" target="_blank">
          <button className="text-[18px] bg-[#e9e8d8] text-[#828e82] pt-2 pb-2 pl-3 pr-3 flex rounded-2xl w-auto cursor-pointer items-center justify-center transition duration-500 border-b-6 ease-in-out border-r-4 hover:border-[#4d574d] hover:bg-[#d7d6c7] hover:text-[#4d574d]">
            <Contact className="mr-2" size={22} /> Contact Me
          </button>
        </a>
      </div>
    </div>
  );
};

export default HeroPage;
