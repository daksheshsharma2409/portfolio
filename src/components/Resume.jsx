import { GraduationCap, Cpu, Code2, Briefcase } from "lucide-react";
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

const techCategories = [
  {
    label: "Languages",
    techs: [
      { name: "Python", img: python },
      { name: "C++", img: cpp },
      { name: "JavaScript", img: javascript },
    ],
  },
  {
    label: "Frontend",
    techs: [
      { name: "HTML", img: html },
      { name: "CSS", img: css },
      { name: "React", img: reactLogo },
      { name: "Tailwind", img: tailwindLogo },
      { name: "Vite", img: vite },
      { name: "Bootstrap", img: bootstrap },
    ],
  },
  {
    label: "Backend",
    techs: [
      { name: "Django", img: django },
      { name: "Flask", img: flask },
    ],
  },
  {
    label: "AI / ML & Data",
    techs: [
      { name: "OpenCV", img: opencv },
      { name: "Pandas", img: pandas },
      { name: "NumPy", img: numpy },
      { name: "Matplotlib", img: matplotlib },
      { name: "TensorFlow", img: tensorflow },
    ],
  },
  {
    label: "Tools",
    techs: [
      { name: "Git", img: git },
      { name: "GitHub", img: github },
      { name: "Linux", img: linux },
      { name: "Vercel", img: vercel },
    ],
  },
];

const TechCard = ({ name, img }) => (
  <div className="group bg-[#1a2235] border border-[#2a3550] rounded-2xl p-5 flex flex-col items-center justify-center gap-3 cursor-default transition-all duration-300 hover:border-[#f59e0b40] hover:bg-[#f59e0b06] hover:-translate-y-1">
    <div className="w-12 h-12 flex items-center justify-center">
      <img
        src={img}
        alt={name}
        className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
      />
    </div>
    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#4b5563] group-hover:text-[#f59e0b] transition-colors">
      {name}
    </span>
  </div>
);

const TimelineItem = ({ title, time, detail, dot }) => (
  <div className="relative pl-8">
    <div className="absolute -left-[5px] top-1.5 w-3 h-3 rounded-full ring-4 ring-[#111827]" style={{ background: dot || "#f59e0b" }} />
    <h4 className="text-[#f3f4f6] font-semibold text-base">{title}</h4>
    <p className="text-[#f59e0b] text-[10px] font-bold uppercase tracking-[0.15em] mt-1">{time}</p>
    <p className="text-[#64748b] text-sm leading-relaxed mt-2 italic border-l border-[#2a3550] pl-3">{detail}</p>
  </div>
);

const Resume = () => {
  return (
    <section
      id="resume"
      className="w-full min-h-screen py-28 px-6 md:px-12 lg:px-24 flex items-start justify-center"
      style={{ background: "linear-gradient(180deg, #0a0d1a 0%, #080b16 100%)" }}
    >
      <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row gap-8 items-start">
        {/* Main Content */}
        <div className="card w-full lg:w-2/3 p-8 md:p-12 flex flex-col gap-14">
          {/* Tech Stack */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Cpu size={20} className="text-[#f59e0b]" />
              <h3 className="text-[#f3f4f6] text-xl font-bold">Technical Arsenal</h3>
            </div>
            <div className="space-y-8">
              {techCategories.map(({ label, techs }) => (
                <div key={label}>
                  <p className="text-[#64748b] text-xs font-bold uppercase tracking-[0.2em] mb-4">{label}</p>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                    {techs.map((tech) => <TechCard key={tech.name} {...tech} />)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work History */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase size={20} className="text-[#f59e0b]" />
              <h3 className="text-[#f3f4f6] text-xl font-bold">Work History</h3>
            </div>
            <div className="border-l border-[#2a3550] pl-6 space-y-10">
              <TimelineItem
                title="Independent Developer"
                time="2018 — Present"
                detail="Architecting end-to-end Python solutions, including custom AI voice engines and real-time computer vision systems using OpenCV. Building full-stack web platforms with React and Django."
              />
            </div>
          </div>

          {/* Academic Journey */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap size={20} className="text-[#f59e0b]" />
              <h3 className="text-[#f3f4f6] text-xl font-bold">Academic Journey</h3>
            </div>
            <div className="border-l border-[#2a3550] pl-6 space-y-10">
              <TimelineItem
                title="B.Tech — Computer Science & Artificial Intelligence"
                time="2025 – 2029 (Pursuing)"
                detail="Newton School of Technology (Rishihood University), Sonipat, Haryana"
              />
              <TimelineItem
                title="Class 12th — CBSE"
                time="2024 – 2025"
                detail="D.C. Model Sr. Sec. School, Firozpur Cantt, Punjab · Result: 86.8%"
              />
              <TimelineItem
                title="Class 10th — CBSE"
                time="2022 – 2023"
                detail="Dass and Brown World School, Firozpur, Punjab · Result: 94.8%"
              />
            </div>
          </div>
        </div>

        {/* Sticky Sidebar */}
        <div className="card lg:sticky lg:top-32 w-full lg:w-1/3 p-8 flex flex-col gap-8">
          <div>
            <span className="section-number">02. Resume</span>
            <h2 className="font-hero text-4xl text-[#f3f4f6] leading-tight">
              My<br />
              <span style={{ background: "linear-gradient(135deg, #f59e0b, #fbbf24)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Journey
              </span>
            </h2>
          </div>

          <p className="text-[#64748b] leading-relaxed text-sm">
            A developer&apos;s path through AI, automation, and full-stack engineering. I turn complex data problems into clean, interactive digital solutions.
          </p>

          <div>
            <p className="text-[10px] font-bold text-[#64748b] uppercase tracking-[0.2em] mb-3">Current Focus</p>
            <div className="flex flex-wrap gap-2">
              {[
                "DSA",
                "Full-Stack",
                "Optimization",
                "Web Scraping",
                "UI/UX Design",
                "Machine Learning",
              ].map((tag) => (
                <span
                  key={tag}
                  className="tech-pill"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="mt-auto">
            <button className="btn-primary w-full justify-center">
              Download Full CV
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
