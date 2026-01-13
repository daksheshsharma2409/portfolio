import React from "react";
import portrait from "../assets/images/portrait.png";
import leetcode from "../assets/images/leetcode.png";
import codeforces from "../assets/images/codeforces.png";
import { Mail } from "lucide-react";
import { Instagram } from "lucide-react";

const About = () => {
  return (
    <div className="bg-[#f2f1eb] w-full min-h-screen flex items-center justify-between">
      <div className="bg-[#e9e8d8] h-165 w-100 border-4 border-[#818e82] relative left-8 top-10 rounded-3xl hover:border-[#4d574d] transition duration-500 delay-75 ease-in-out">
        <div className="h-60 flex items-center justify-center mt-7">
          <img
            src={portrait}
            alt="portrait"
            className="rounded-full border-4 border-[#d2d2c5] h-60 hover:border-[#677567] transition duration-500 delay-75 ease-in-out"
          />
        </div>
        <h1 className="text-[#2d2d2b] text-3xl mt-3 text-center">
          Dakshesh Sharma
        </h1>
        <p className="text-center mt-2 text-[#8c8c88] text-[18px]">
          Python and Web Developer
        </p>
        <div className="flex flex-col items-center mt-10 gap-3">
          <div className="flex border-2 w-75 pl-4 pr-4 pt-2 pb-2 gap-3 rounded-2xl items-center">
            <Mail size={24} />
            <a href="mailto:daksheshsharma2007@gmail.com" target="_blank">
              daksheshsharma2007@gmail.com
            </a>
          </div>
          <div className="flex border-2 w-75 pl-4 pr-4 pt-2 pb-2 gap-3 rounded-2xl items-center">
            <img src={codeforces} alt="leetcode" height={24} width={24} />
            <a
              href="https://codeforces.com/profile/daksheshsharma2007"
              target="_blank"
            >
              Codeforces
            </a>
          </div>
          <div className="flex border-2 w-75 pl-4 pr-4 pt-2 pb-2 gap-3 rounded-2xl items-center">
            <img src={leetcode} alt="leetcode" height={24} width={24} />
            <a
              href="https://leetcode.com/u/daksheshsharma2007/"
              target="_blank"
            >
              Leetcode
            </a>
          </div>
          <div className="flex border-2 w-75 pl-4 pr-4 pt-2 pb-2 gap-3 rounded-2xl items-center">
            <Instagram size={24} />
            <a
              href="https://www.instagram.com/_dakshesh_sharma/"
              target="_blank"
            >
              _dakshesh_sharma/
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[#e9e8d8] h-165 pt-5 pb-5 pl-10 pr-10 overflow-auto w-250 border-4 border-[#818e82] relative top-10 right-8 rounded-3xl hover:border-[#4d574d] transition duration-500 delay-75 ease-in-out">
        <h1 className="text-center text-5xl mt-3 text-[#2d2d2b]">About Me</h1>
        <p className="text-[21px] mt-7 text-[#4a4a48]">
          I am a developer driven by the challenge of building across the full
          technical stack. Currently pursuing my B.Tech in CS & AI, I focus on
          creating seamless digital experiences—from architecting fast,
          responsive web applications to engineering data-driven backend
          solutions.
          <br />
          My approach isn’t tied to a single language; I leverage a broad tech
          stack to build tools that are functional and impactful. I specialize
          in Data Science and Analysis, utilizing the Python ecosystem (NumPy,
          Pandas, Matplotlib) to transform raw data into clear, actionable
          insights. Currently, I am expanding my horizons into Artificial
          Intelligence, experimenting with new models and integrating
          intelligent features into my projects to see what’s possible.
        </p>
        <div className="w-12/12 h-30 mt-10 ml-auto text-center mr-auto flex justify-between text-[21px]">
          <div className="p-5 w-3/12 border-2 rounded-2xl border-[#4d574d]">
            <p className="text-[#8c8c88]">Specialization</p>
            <p className="text-[#4a4a48]">Python Development</p>
          </div>
          <div className="p-5 w-3/12 border-2 rounded-2xl border-[#4d574d]">
            <p className="text-[#8c8c88]">Experience Level</p>
            <p className="text-[#4a4a48]">Student</p>
          </div>

          <div className="p-5 w-3/12 border-2 rounded-2xl h-fit border-[#4d574d]">
            <p className="text-[#8c8c88]">Currently Pursuing</p>
            <p className="text-[#4a4a48] text-wrap">
              B.Tech - Computer Science and Artificial Intelligence, Rishihood
              University (Newton School of Technology)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
