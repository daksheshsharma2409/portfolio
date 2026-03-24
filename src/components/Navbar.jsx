import React, { useState, useEffect } from "react";
import { Linkedin, Github, Menu, X } from "lucide-react";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (ref) => {
    props.scrollToSection(ref);
    setIsOpen(false);
  };

  const navLinks = [
    { label: "About", ref: props.aboutRef },
    { label: "Resume", ref: props.resumeRef },
    { label: "Projects", ref: props.projectsRef },
    { label: "Contact", ref: props.contactRef },
  ];

  return (
    <nav className="fixed top-5 left-0 right-0 z-[100] flex justify-center px-4">
      <div
        className={`relative w-full max-w-5xl h-16 rounded-full flex items-center justify-between px-6 md:px-10 transition-all duration-500 ${
          scrolled
            ? "bg-[#0d1321]/90 border border-[#2a3550] shadow-[0_8px_32px_#00000060] backdrop-blur-xl"
            : "bg-[#0d1321]/70 border border-[#2a3550]/50 backdrop-blur-md"
        }`}
      >
        {/* Logo */}
        <h1
          className="font-hero font-normal text-xl md:text-2xl cursor-pointer whitespace-nowrap z-20 transition-opacity duration-200 hover:opacity-80"
          style={{ background: "linear-gradient(135deg, #f59e0b, #fbbf24)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
          onClick={() => handleNavClick(props.heroRef)}
        >
          DS.
        </h1>

        {/* Desktop Links */}
        <ul className="hidden lg:flex gap-1 list-none absolute left-1/2 -translate-x-1/2 transform">
          {navLinks.map(({ label, ref }) => (
            <li
              key={label}
              className="cursor-pointer text-[15px] text-[#94a3b8] font-medium px-4 py-2 rounded-lg transition-all duration-200 hover:text-[#f59e0b] hover:bg-[#f59e0b0c]"
              onClick={() => props.scrollToSection(ref)}
            >
              {label}
            </li>
          ))}
        </ul>

        {/* Right: Social Icons + Hamburger */}
        <div className="flex items-center gap-1 z-20">
          <div className="hidden sm:flex gap-1 items-center">
            <a
              href="https://www.linkedin.com/in/daksheshsharma2007/"
              target="_blank"
              rel="noreferrer"
              className="text-[#94a3b8] p-2 rounded-lg transition-all duration-200 hover:text-[#f59e0b] hover:bg-[#f59e0b0c]"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/daksheshsharma2409/"
              target="_blank"
              rel="noreferrer"
              className="text-[#94a3b8] p-2 rounded-lg transition-all duration-200 hover:text-[#f59e0b] hover:bg-[#f59e0b0c]"
              title="GitHub"
            >
              <Github size={18} />
            </a>
          </div>

          <button
            className="lg:hidden text-[#94a3b8] p-2 hover:text-[#f59e0b] hover:bg-[#f59e0b0c] rounded-lg transition-colors ml-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[72px] left-4 right-4 bg-[#111827]/95 border border-[#2a3550] backdrop-blur-xl rounded-2xl p-6 flex flex-col gap-2 lg:hidden shadow-2xl z-[110]">
          {navLinks.map(({ label, ref }) => (
            <button
              key={label}
              className="text-left text-lg font-medium text-[#94a3b8] py-3 px-4 rounded-xl transition-all duration-200 hover:text-[#f59e0b] hover:bg-[#f59e0b0c]"
              onClick={() => handleNavClick(ref)}
            >
              {label}
            </button>
          ))}
          <div className="flex gap-4 pt-4 px-4 border-t border-[#2a3550] mt-2">
            <a href="https://github.com/daksheshsharma2409/" target="_blank" rel="noreferrer" className="text-[#94a3b8] hover:text-[#f59e0b] transition-colors">
              <Github size={22} />
            </a>
            <a href="https://www.linkedin.com/in/daksheshsharma2007/" target="_blank" rel="noreferrer" className="text-[#94a3b8] hover:text-[#f59e0b] transition-colors">
              <Linkedin size={22} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
