import React, { useState } from "react";
import { Linkedin, Github, Menu, X } from "lucide-react";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (ref) => {
    props.scrollToSection(ref);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-6 left-0 right-0 z-[100] flex justify-center px-4">
      <div className="relative w-full max-w-5xl bg-[#e9e8d8] h-16 rounded-full flex items-center justify-between px-6 md:px-10 border-4 border-[#818e82] shadow-lg transition-colors duration-300 hover:border-[#4d574d]">
        <h1
          className="font-bold text-lg md:text-[21px] text-[#3f4f3f] cursor-pointer px-2 py-1 rounded-xl transition duration-300 hover:bg-[#6b776b] hover:text-[#e9e8d8] whitespace-nowrap z-20"
          onClick={() => handleNavClick(props.heroRef)}
        >
          Dakshesh Sharma
        </h1>

        <ul className="hidden lg:flex gap-3 list-none absolute left-1/2 -translate-x-1/2 transform transition-none">
          <li
            className="cursor-pointer text-[18px] text-[#3f4f3f] px-3 py-1 rounded-2xl transition duration-300 hover:bg-[#6b776b] hover:text-[#e9e8d8]"
            onClick={() => props.scrollToSection(props.aboutRef)}
          >
            About
          </li>
          <li
            className="cursor-pointer text-[18px] text-[#3f4f3f] px-3 py-1 rounded-2xl transition duration-300 hover:bg-[#6b776b] hover:text-[#e9e8d8]"
            onClick={() => props.scrollToSection(props.resumeRef)}
          >
            Resume
          </li>
          <li
            className="cursor-pointer text-[18px] text-[#3f4f3f] px-3 py-1 rounded-2xl transition duration-300 hover:bg-[#6b776b] hover:text-[#e9e8d8]"
            onClick={() => props.scrollToSection(props.projectsRef)}
          >
            Projects
          </li>
          <li
            className="cursor-pointer text-[18px] text-[#3f4f3f] px-3 py-1 rounded-2xl transition duration-300 hover:bg-[#6b776b] hover:text-[#e9e8d8]"
            onClick={() => props.scrollToSection(props.contactRef)}
          >
            Contact
          </li>
        </ul>

        <div className="flex items-center gap-2 z-20">
          <div className="hidden sm:flex gap-2 items-center">
            <a
              href="https://www.linkedin.com/in/dakshesh-sharma-825378291/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center cursor-pointer text-[#3f4f3f] p-2 rounded-full transition-all duration-300 ease-in-out hover:bg-[#6b776b] hover:text-[#e9e8d8]"
            >
              <Linkedin size={20} className="shrink-0" />
              <div className="grid grid-cols-[0fr] group-hover:grid-cols-[1fr] transition-all duration-300 ease-in-out">
                <div className="overflow-hidden whitespace-nowrap">
                  <span className="text-sm font-bold pl-2 pr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    LinkedIn
                  </span>
                </div>
              </div>
            </a>

            <a
              href="https://github.com/daksheshsharma2409/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center cursor-pointer text-[#3f4f3f] p-2 rounded-full transition-all duration-300 ease-in-out hover:bg-[#6b776b] hover:text-[#e9e8d8]"
            >
              <Github size={20} className="shrink-0" />
              <div className="grid grid-cols-[0fr] group-hover:grid-cols-[1fr] transition-all duration-300 ease-in-out">
                <div className="overflow-hidden whitespace-nowrap">
                  <span className="text-sm font-bold pl-2 pr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    GitHub
                  </span>
                </div>
              </div>
            </a>
          </div>

          <button
            className="lg:hidden text-[#3f4f3f] p-2 hover:bg-[#6b776b] hover:text-[#e9e8d8] rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-20 left-4 right-4 bg-[#e9e8d8] border-4 border-[#818e82] rounded-3xl p-6 flex flex-col gap-4 lg:hidden shadow-2xl z-[110]">
          <button
            className="text-left text-xl font-bold text-[#3f4f3f] border-b border-[#818e82]/20 pb-2"
            onClick={() => handleNavClick(props.aboutRef)}
          >
            About
          </button>
          <button
            className="text-left text-xl font-bold text-[#3f4f3f] border-b border-[#818e82]/20 pb-2"
            onClick={() => handleNavClick(props.resumeRef)}
          >
            Resume
          </button>
          <button
            className="text-left text-xl font-bold text-[#3f4f3f] border-b border-[#818e82]/20 pb-2"
            onClick={() => handleNavClick(props.projectsRef)}
          >
            Projects
          </button>
          <button
            className="text-left text-xl font-bold text-[#3f4f3f] border-b border-[#818e82]/20 pb-2"
            onClick={() => handleNavClick(props.contactRef)}
          >
            Contact
          </button>
          <div className="flex gap-6 pt-4">
            <a
              href="https://github.com"
              className="text-[#3f4f3f] hover:text-[#6b776b]"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com"
              className="text-[#3f4f3f] hover:text-[#6b776b]"
            >
              <Linkedin size={28} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
