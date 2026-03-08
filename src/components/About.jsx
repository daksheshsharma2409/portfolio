import React from "react";
import portrait from "../assets/images/portrait.png";
import leetcode from "../assets/images/leetcode.png";
import codeforces from "../assets/images/codeforces.png";
import { Mail, Instagram, ExternalLink } from "lucide-react";

const socials = [
  {
    href: "mailto:daksheshsharma2007@gmail.com",
    icon: <Mail size={17} />,
    label: "Email",
  },
  {
    href: "https://codeforces.com/profile/daksheshsharma2007",
    icon: <img src={codeforces} className="w-[17px] h-[17px] object-contain" alt="Codeforces" />,
    label: "Codeforces",
    external: true,
  },
  {
    href: "https://leetcode.com/u/daksheshsharma2007/",
    icon: <img src={leetcode} className="w-[17px] h-[17px] object-contain" alt="Leetcode" />,
    label: "LeetCode",
    external: true,
  },
  {
    href: "https://www.instagram.com/_dakshesh_sharma/",
    icon: <Instagram size={17} />,
    label: "Instagram",
    external: true,
  },
];

const stats = [
  { label: "Specialization", value: "Python & AI" },
  { label: "Status", value: "Undergraduate" },
  { label: "University", value: "Rishihood (NST)" },
];

const About = () => {
  return (
    <section
      className="w-full min-h-screen py-28 px-6 md:px-12 lg:px-24 flex items-center justify-center"
      style={{ background: "#0a0d1a" }}
    >
      <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-8 items-stretch">
        {/* Left: Profile Card */}
        <div className="card w-full lg:w-[320px] lg:flex-shrink-0 p-8 flex flex-col items-center">
          {/* Avatar */}
          <div className="relative mb-6">
            <div
              className="absolute inset-0 rounded-full blur-xl opacity-40"
              style={{ background: "radial-gradient(circle, #f59e0b, transparent)" }}
            />
            <img
              src={portrait}
              alt="portrait"
              className="relative rounded-full h-36 w-36 object-cover border-2 border-[#f59e0b40]"
            />
          </div>

          <h2 className="font-hero text-2xl text-[#f3f4f6] text-center mb-1">
            Dakshesh Sharma
          </h2>
          <p className="text-[#f59e0b] text-sm font-medium tracking-wide mb-8">
            Python &amp; Web Developer
          </p>

          <div className="w-full flex flex-col gap-3">
            {socials.map(({ href, icon, label, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="flex items-center gap-3 text-[#94a3b8] text-sm font-medium px-4 py-3 rounded-xl border border-[#2a3550] transition-all duration-200 hover:text-[#f59e0b] hover:border-[#f59e0b40] hover:bg-[#f59e0b08] group"
              >
                <span className="text-[#64748b] group-hover:text-[#f59e0b] transition-colors">
                  {icon}
                </span>
                {label}
                <ExternalLink
                  size={11}
                  className="ml-auto opacity-0 group-hover:opacity-60 transition-opacity"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Right: About Content */}
        <div className="card flex-1 p-8 md:p-12 flex flex-col">
          <span className="section-number">01. About</span>
          <h2 className="section-title mb-8">About Me</h2>

          <div className="space-y-5 text-[#94a3b8] text-base md:text-lg leading-relaxed flex-1">
            <p>
              I&apos;m a developer driven by the challenge of building across
              the full technical stack. Currently pursuing my{" "}
              <span className="text-[#f3f4f6] font-semibold">
                B.Tech in CS &amp; AI
              </span>{" "}
              at Newton School of Technology, I focus on creating seamless
              digital experiences — from architecting fast, responsive web
              applications to engineering data-driven backend solutions.
            </p>
            <p>
              I leverage a broad tech stack to build tools that are functional
              and impactful. I specialize in{" "}
              <span className="text-[#f59e0b] font-semibold">Data Science</span>
              , utilizing the Python ecosystem to transform raw data into clear,
              actionable insights. Competitive programming keeps my
              problem-solving sharp.
            </p>
            <p>
              When I&apos;m not coding, I&apos;m exploring new AI research,
              contributing to open-source projects, or grinding LeetCode and
              Codeforces problems.
            </p>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
            {stats.map(({ label, value }) => (
              <div
                key={label}
                className="bg-[#1a2235] border border-[#2a3550] rounded-xl p-4 transition-colors hover:border-[#f59e0b40]"
              >
                <p className="text-[#64748b] text-[10px] uppercase tracking-[0.2em] font-semibold mb-1.5">
                  {label}
                </p>
                <p className="text-[#f3f4f6] text-sm font-semibold leading-tight">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
