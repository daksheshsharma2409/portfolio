import React from "react";
import Typewriter from "typewriter-effect";
import { Contact, ArrowDownToLine } from "lucide-react";

const HeroPage = () => {
  return (
    <div className="min-h-screen w-full bg-[#6b776b] flex items-center justify-center flex-col p-6 text-center">
      <h1 className="text-[#f9f8f1] text-3xl md:text-7xl mb-3 md:mb-5 font-hero font-semibold">
        Hi, I'm Dakshesh Sharma
      </h1>

      <h2 className="text-[#e9e8d8] text-2xl md:text-6xl mb-6 font-hero">
        <Typewriter
          options={{
            strings: [
              "Frontend Developer",
              "Data Analyst",
              "AI Enthusiast",
              "Python Developer",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>

      <p className="text-[#d0d0c6] max-w-2xl w-full text-lg md:text-[21px] leading-relaxed">
        AI enthusiast and full-stack developer dedicated to building
        intelligent, scalable solutions. From web apps to automation, I turn
        code into powerful digital experiences.
      </p>

      <div className="flex flex-col md:flex-row gap-4 mt-10 w-full md:w-auto items-center">
        <a href="/resume.pdf" target="_blank" className="w-full md:w-auto">
          <button className="w-full md:w-auto text-[18px] bg-[#e9e8d8] text-[#828e82] py-3 px-6 flex rounded-2xl cursor-pointer items-center justify-center transition duration-500 border-b-6 ease-in-out border-r-4 hover:border-[#4d574d] hover:bg-[#d7d6c7] hover:text-[#4d574d]">
            <ArrowDownToLine className="mr-2" size={22} /> Download Resume
          </button>
        </a>

        <a href="#contact" className="w-full md:w-auto">
          <button className="w-full md:w-auto text-[18px] bg-[#e9e8d8] text-[#828e82] py-3 px-6 flex rounded-2xl cursor-pointer items-center justify-center transition duration-500 border-b-6 ease-in-out border-r-4 hover:border-[#4d574d] hover:bg-[#d7d6c7] hover:text-[#4d574d]">
            <Contact className="mr-2" size={22} /> Contact Me
          </button>
        </a>
      </div>
    </div>
  );
};

export default HeroPage;
