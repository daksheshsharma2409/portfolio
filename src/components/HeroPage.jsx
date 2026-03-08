import Typewriter from "typewriter-effect";
import { ArrowDownToLine, Mail } from "lucide-react";

const HeroPage = (props) => {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center flex-col p-6 text-center relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% -10%, #f59e0b18 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 80%, #6366f118 0%, transparent 60%), #0a0d1a",
      }}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#f3f4f6 1px, transparent 1px), linear-gradient(90deg, #f3f4f6 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl w-full">
        <p
          className="section-number mb-6 tracking-[0.3em] text-xs font-semibold"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          ✦ &nbsp; Portfolio &nbsp; ✦
        </p>

        <h1
          className="font-hero text-[3.5rem] sm:text-[5rem] md:text-[7rem] leading-[0.95] text-[#f3f4f6] mb-6"
          style={{ letterSpacing: "-0.02em" }}
        >
          Dakshesh
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Sharma
          </span>
        </h1>

        <div className="text-[#94a3b8] text-lg sm:text-2xl md:text-3xl mb-6 font-light h-10">
          <Typewriter
            options={{
              strings: [
                "Frontend Developer",
                "Data Analyst",
                "AI Enthusiast",
                "Python Developer",
                "Full-Stack Builder",
              ],
              autoStart: true,
              loop: true,
              wrapperClassName: "typewriter-text",
              cursorClassName: "text-[#f59e0b]",
            }}
          />
        </div>

        <p className="text-[#64748b] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-12">
          AI enthusiast and full-stack developer dedicated to building
          intelligent, scalable solutions. From web apps to automation, I turn
          code into powerful digital experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="/resume.pdf" target="_blank">
            <button className="btn-primary text-base">
              <ArrowDownToLine size={18} />
              Download Resume
            </button>
          </a>
          <button
            className="btn-ghost text-base"
            onClick={() => props.scrollToSection(props.contactRef)}
          >
            <Mail size={18} />
            Get in Touch
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[11px] tracking-[0.2em] text-[#94a3b8] uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-[#94a3b8] to-transparent" />
      </div>
    </div>
  );
};

export default HeroPage;
