import React from "react";
import portrait from "../assets/images/portrait.png";
import leetcode from "../assets/images/leetcode.png";
import codeforces from "../assets/images/codeforces.png";
import { Mail, Instagram } from "lucide-react";

const About = () => {
  return (
    <section className="bg-[#f2f1eb] w-full min-h-screen py-20 px-6 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-10 items-stretch mt-10">
        <div className="bg-[#e9e8d8] w-full lg:w-1/3 border-4 border-[#818e82] rounded-3xl p-8 flex flex-col items-center hover:border-[#4d574d] transition-all duration-500 shadow-md">
          <div className="relative group">
            <img
              src={portrait}
              alt="portrait"
              className="rounded-full border-4 border-[#8f9d90] h-48 w-48 object-cover group-hover:border-[#677567] transition-all duration-500 shadow-inner"
            />
          </div>

          <h1 className="text-[#2d2d2b] text-3xl font-bold mt-6 text-center font-hero">
            Dakshesh Sharma
          </h1>
          <p className="text-center mt-2 text-[#6b776b] font-medium text-lg">
            Python & Web Developer
          </p>

          <div className="w-full flex flex-col mt-8 gap-4">
            <a
              href="mailto:daksheshsharma2007@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 border-2 border-[#818e82]/30 w-full px-4 py-3 rounded-xl hover:bg-[#6b776b] hover:text-[#f9f8f1] transition-all duration-300 group"
            >
              <Mail
                size={20}
                className="text-[#4d574d] group-hover:text-[#f9f8f1]"
              />
              <span className="text-sm font-medium truncate">Email Me</span>
            </a>

            <a
              href="https://codeforces.com/profile/daksheshsharma2007"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 border-2 border-[#818e82]/30 w-full px-4 py-3 rounded-xl hover:bg-[#6b776b] hover:text-[#f9f8f1] transition-all duration-300 group"
            >
              <img src={codeforces} className="w-5 h-5" alt="Codeforces" />
              <span className="text-sm font-medium truncate">Codeforces</span>
            </a>

            <a
              href="https://leetcode.com/u/daksheshsharma2007/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 border-2 border-[#818e82]/30 w-full px-4 py-3 rounded-xl hover:bg-[#6b776b] hover:text-[#f9f8f1] transition-all duration-300 group"
            >
              <img src={leetcode} className="w-5 h-5" alt="Leetcode" />
              <span className="text-sm font-medium truncate">Leetcode</span>
            </a>

            <a
              href="https://www.instagram.com/_dakshesh_sharma/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 border-2 border-[#818e82]/30 w-full px-4 py-3 rounded-xl hover:bg-[#6b776b] hover:text-[#f9f8f1] transition-all duration-300 group"
            >
              <Instagram
                size={20}
                className="text-[#4d574d] group-hover:text-[#f9f8f1]"
              />
              <span className="text-sm font-medium truncate">Instagram</span>
            </a>
          </div>
        </div>

        <div className="bg-[#e9e8d8] w-full lg:w-2/3 border-4 border-[#818e82] rounded-3xl p-8 md:p-12 flex flex-col hover:border-[#4d574d] transition-all duration-500 shadow-md">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#2d2d2b] border-b-4 border-[#818e82] w-fit pb-2">
            About Me
          </h1>

          <div className="space-y-6 text-lg md:text-xl text-[#4a4a48] leading-relaxed">
            <p>
              I am a developer driven by the challenge of building across the
              full technical stack. Currently pursuing my{" "}
              <span className="font-bold text-[#3f4f3f]">
                B.Tech in CS & AI
              </span>
              , I focus on creating seamless digital experiences—from
              architecting fast, responsive web applications to engineering
              data-driven backend solutions.
            </p>
            <p>
              I leverage a broad tech stack to build tools that are functional
              and impactful. I specialize in{" "}
              <span className="font-bold text-[#3f4f3f]">Data Science</span>,
              utilizing the Python ecosystem to transform raw data into clear,
              actionable insights.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-auto pt-10">
            <div className="p-4 border-2 border-[#818e82]/50 rounded-2xl bg-[#f2f1eb]/50 hover:bg-[#f2f1eb] transition-colors">
              <p className="text-[#8c8c88] text-xs uppercase tracking-wider font-bold mb-1">
                Specialization
              </p>
              <p className="text-[#4a4a48] text-sm md:text-base font-semibold leading-tight">
                Python Development
              </p>
            </div>

            <div className="p-4 border-2 border-[#818e82]/50 rounded-2xl bg-[#f2f1eb]/50 hover:bg-[#f2f1eb] transition-colors">
              <p className="text-[#8c8c88] text-xs uppercase tracking-wider font-bold mb-1">
                Experience
              </p>
              <p className="text-[#4a4a48] text-sm md:text-base font-semibold leading-tight">
                Undergraduate
              </p>
            </div>

            <div className="p-4 border-2 border-[#818e82]/50 rounded-2xl bg-[#f2f1eb]/50 hover:bg-[#f2f1eb] transition-colors sm:col-span-2 md:col-span-1">
              <p className="text-[#8c8c88] text-xs uppercase tracking-wider font-bold mb-1">
                Education
              </p>
              <p className="text-[#4a4a48] text-sm md:text-base font-semibold leading-tight">
                Rishihood University
                <br /> (Newton School of Technology)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
