import { GraduationCap, Cpu, Code2 } from "lucide-react";
import python from "../assets/images/techstack/python.png";
import cpp from "../assets/images/techstack/cpp.png";
import javascript from "../assets/images/techstack/javascript.png";
import html from "../assets/images/techstack/html.png";
import css from "../assets/images/techstack/css.png";
import tailwindLogo from "../assets/images/techstack/tailwindLogo.svg";
import reactLogo from "../assets/images/techstack/reactLogo.png";
import vite from "../assets/images/techstack/vite.png";
import bootstrap from "../assets/images/techstack/bootstrap.png";
import django from "../assets/images/techstack/django.png";
import flask from "../assets/images/techstack/flask.png";
import opencv from "../assets/images/techstack/opencv.png";
import pandas from "../assets/images/techstack/pandas.png";
import numpy from "../assets/images/techstack/numpy.png";
import matplotlib from "../assets/images/techstack/matplotlib.png";
import tensorflow from "../assets/images/techstack/tensorflow.png";
import git from "../assets/images/techstack/git.png";
import github from "../assets/images/techstack/github.svg";
import linux from "../assets/images/techstack/linux.png";
import vercel from "../assets/images/techstack/vercel.svg";

const Resume = () => {
  const techLanguages = [
    {
      name: "Python",
      img: `${python}`,
    },
    {
      name: "C++",
      img: `${cpp}`,
    },
    {
      name: "Javascript",
      img: `${javascript}`,
    },
  ];
  const frontendStack = [
    {
      name: "HTML",
      img: `${html}`,
    },
    {
      name: "CSS",
      img: `${css}`,
    },
    {
      name: "Javascript",
      img: `${javascript}`,
    },
    {
      name: "Tailwind",
      img: `${tailwindLogo}`,
    },
    {
      name: "React",
      img: `${reactLogo}`,
    },
    {
      name: "Vite",
      img: `${vite}`,
    },
    {
      name: "Bootstrap",
      img: `${bootstrap}`,
    },
  ];
  const backendStack = [
    {
      name: "Django",
      img: `${django}`,
    },
    {
      name: "Flask",
      img: `${flask}`,
    },
  ];
  const aimlStack = [
    {
      name: "Open Cv",
      img: `${opencv}`,
    },
    {
      name: "Pandas",
      img: `${pandas}`,
    },
    {
      name: "Numpy",
      img: `${numpy}`,
    },
    {
      name: "Matplotlib",
      img: `${matplotlib}`,
    },
    {
      name: "TensorFlow",
      img: `${tensorflow}`,
    },
  ];
  const toolsStack = [
    {
      name: "Git",
      img: `${git}`,
    },
    {
      name: "Github",
      img: `${github}`,
    },
    {
      name: "Linux",
      img: `${linux}`,
    },
    {
      name: "Vercel",
      img: `${vercel}`,
    },
  ];
  return (
    <section
      id="resume"
      className="bg-[#f2f1eb] w-full min-h-screen py-24 px-6 md:px-12 lg:px-24 flex items-start justify-center"
    >
      <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row gap-10 items-start mt-10">
        <div className="bg-[#e9e8d8] w-full lg:w-2/3 border-4 border-[#818e82] rounded-3xl p-8 md:p-12 flex flex-col hover:border-[#4d574d] transition-all duration-500 shadow-md">
          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-bold text-[#3f4f3f] mb-8 flex items-center gap-2">
                <Cpu size={24} className="text-[#818e82]" /> Technical Arsenal
              </h3>
              <h4 className="text-[#2d2d2b] leading-relaxed text-[21px] mb-6">
                Languages
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {techLanguages.map((tech) => (
                  <div
                    key={tech.name}
                    className="group relative bg-[#f2f1eb]/50 border-2 border-[#818e82]/20 rounded-[2rem] p-6 flex flex-col items-center justify-center hover:bg-[#3f4f3f] transition-all duration-500 shadow-sm"
                  >
                    <div className="w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <img
                        src={tech.img}
                        alt={tech.name}
                        className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all"
                      />
                    </div>
                    <span className="font-bold text-xs uppercase tracking-[0.2em] mt-4 text-[#6b776b] group-hover:text-[#e9e8d8]">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
              <h4 className="text-[#2d2d2b] leading-relaxed text-[21px] mb-6 mt-6">
                Frontend Development
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {frontendStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="group relative bg-[#f2f1eb]/50 border-2 border-[#818e82]/20 rounded-[2rem] p-6 flex flex-col items-center justify-center hover:bg-[#3f4f3f] transition-all duration-500 shadow-sm"
                  >
                    <div className="w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <img
                        src={tech.img}
                        alt={tech.name}
                        className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all"
                      />
                    </div>
                    <span className="font-bold text-xs uppercase tracking-[0.2em] mt-4 text-[#6b776b] group-hover:text-[#e9e8d8]">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
              <h4 className="text-[#2d2d2b] leading-relaxed text-[21px] mb-6 mt-6">
                Backend Development
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {backendStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="group relative bg-[#f2f1eb]/50 border-2 border-[#818e82]/20 rounded-[2rem] p-6 flex flex-col items-center justify-center hover:bg-[#3f4f3f] transition-all duration-500 shadow-sm"
                  >
                    <div className="w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <img
                        src={tech.img}
                        alt={tech.name}
                        className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all"
                      />
                    </div>
                    <span className="font-bold text-xs uppercase tracking-[0.2em] mt-4 text-[#6b776b] group-hover:text-[#e9e8d8]">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
              <h4 className="text-[#2d2d2b] leading-relaxed text-[21px] mb-6 mt-6">
                AI/ML & Data Science
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {aimlStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="group relative bg-[#f2f1eb]/50 border-2 border-[#818e82]/20 rounded-[2rem] p-6 flex flex-col items-center justify-center hover:bg-[#3f4f3f] transition-all duration-500 shadow-sm"
                  >
                    <div className="w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <img
                        src={tech.img}
                        alt={tech.name}
                        className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all"
                      />
                    </div>
                    <span className="font-bold text-xs uppercase tracking-[0.2em] mt-4 text-[#6b776b] group-hover:text-[#e9e8d8]">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
              <h4 className="text-[#2d2d2b] leading-relaxed text-[21px] mb-6 mt-6">
                Tools & Technologies
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {toolsStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="group relative bg-[#f2f1eb]/50 border-2 border-[#818e82]/20 rounded-[2rem] p-6 flex flex-col items-center justify-center hover:bg-[#3f4f3f] transition-all duration-500 shadow-sm"
                  >
                    <div className="w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <img
                        src={tech.img}
                        alt={tech.name}
                        className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all"
                      />
                    </div>
                    <span className="font-bold text-xs uppercase tracking-[0.2em] mt-4 text-[#6b776b] group-hover:text-[#e9e8d8]">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-[#3f4f3f] flex items-center gap-2">
                <Code2 size={24} className="text-[#818e82]" /> Work History
              </h3>
              <div className="border-l-4 border-[#818e82] pl-8 space-y-12">
                <div className="relative">
                  <div className="absolute -left-[38px] top-1.5 w-4 h-4 bg-[#818e82] rounded-full ring-4 ring-[#e9e8d8]" />
                  <h4 className="text-xl font-bold text-[#2d2d2b]">
                    Independent Developer
                  </h4>
                  <p className="text-[#818e82] font-black text-xs uppercase tracking-widest mt-1">
                    2018 — PRESENT
                  </p>
                  <p className="mt-4 text-[#4a4a48] leading-relaxed italic border-l-2 border-[#818e82]/20 pl-4">
                    Architecting end-to-end Python solutions, including custom
                    AI voice engines and real-time computer vision systems using
                    OpenCV.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8 pb-4">
              <h3 className="text-2xl font-bold text-[#3f4f3f] flex items-center gap-2">
                <GraduationCap size={24} className="text-[#818e82]" /> Academic
                Journey
              </h3>
              <div className="border-l-4 border-[#818e82] pl-8 space-y-12">
                <div className="relative">
                  <div className="absolute -left-[38px] top-1.5 w-4 h-4 bg-[#818e82] rounded-full ring-4 ring-[#e9e8d8]" />
                  <h4 className="text-xl font-bold text-[#2d2d2b]">
                    B.Tech - Computer Science and Artificial Intelligence
                  </h4>
                  <p className="text-[#818e82] font-black text-xs uppercase tracking-widest mt-1">
                    2025 - 2029 (Pursuing)
                  </p>
                  <p className="mt-4 text-[#4a4a48] leading-relaxed italic border-l-2 border-[#818e82]/20 pl-4">
                    Newton School of Technology (Rishihood University), Sonipat,
                    Haryana
                  </p>
                </div>
              </div>
              <div className="border-l-4 border-[#818e82] pl-8 space-y-12">
                <div className="relative">
                  <div className="absolute -left-[38px] top-1.5 w-4 h-4 bg-[#818e82] rounded-full ring-4 ring-[#e9e8d8]" />
                  <h4 className="text-xl font-bold text-[#2d2d2b]">
                    Class 12th CBSE
                  </h4>
                  <p className="text-[#818e82] font-black text-xs uppercase tracking-widest mt-1">
                    2024 - 2025
                  </p>
                  <p className="mt-4 text-[#4a4a48] leading-relaxed italic border-l-2 border-[#818e82]/20 pl-4">
                    D.C. Model Sr. Sec. School, Firozpur Cantt, Punjab <br />
                    Result : 86.8%
                  </p>
                </div>
              </div>
              <div className="border-l-4 border-[#818e82] pl-8 space-y-12">
                <div className="relative">
                  <div className="absolute -left-[38px] top-1.5 w-4 h-4 bg-[#818e82] rounded-full ring-4 ring-[#e9e8d8]" />
                  <h4 className="text-xl font-bold text-[#2d2d2b]">
                    Class 10th CBSE
                  </h4>
                  <p className="text-[#818e82] font-black text-xs uppercase tracking-widest mt-1">
                    2022 - 2023
                  </p>
                  <p className="mt-4 text-[#4a4a48] leading-relaxed italic border-l-2 border-[#818e82]/20 pl-4">
                    Dass and Brown World School, Firozpur, Punjab <br />
                    Result : 94.8%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:sticky lg:top-32 bg-[#e9e8d8] w-full lg:w-1/3 border-4 border-[#818e82] rounded-3xl p-8 flex flex-col hover:border-[#4d574d] transition-all duration-500 shadow-md">
          <h2 className="text-[#3f4f3f] text-4xl font-bold flex items-center gap-2 mb-8 border-b-4 border-[#818e82] w-fit">
            Resume
          </h2>
          <p className="text-[#4a4a48] leading-relaxed text-lg mb-12">
            A developer's journey through AI, automation, and full-stack
            engineering. I specialize in turning complex data problems into
            clean, interactive digital solutions.
          </p>

          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-[14px] font-black text-[#818e82] uppercase tracking-widest ml-1">
                Current Focus
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Data Structures and Algorithms",
                  "Full-Stack",
                  "Optimization",
                  "Web Scraping",
                  "Design",
                ].map((pith) => (
                  <span
                    key={pith}
                    className="px-3 py-1 bg-[#3f4f3f] text-[#e9e8d8] rounded-lg text-[14px] font-bold"
                  >
                    {pith}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
