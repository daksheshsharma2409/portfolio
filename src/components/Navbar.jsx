import React, { useState } from "react";
import { Linkedin, Github, Menu, X } from "lucide-react";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="w-full max-w-5xl bg-[#e9e8d8] h-16 rounded-full flex items-center justify-between px-6 md:px-10 border-4 border-[#818e82] transition duration-200 ease-in-out hover:bg-[#d7d6c7] hover:border-[#4d574d] shadow-lg">
        <h1
          className="font-bold text-lg md:text-[21px] text-[#3f4f3f] cursor-pointer px-2 py-1 rounded-xl transition duration-300 ease-in-out hover:bg-[#6b776b] hover:text-[#e9e8d8] whitespace-nowrap"
          onClick={() => {
            props.scrollToSection(props.heroRef);
          }}
        >
          Dakshesh Sharma
        </h1>

        <ul className="hidden lg:flex gap-3 list-none">
          <li
            className="cursor-pointer text-[18px] text-[#3f4f3f] px-3 py-1 rounded-2xl transition duration-300 ease-in-out hover:bg-[#6b776b] hover:text-[#e9e8d8]"
            onClick={() => {
              props.scrollToSection(props.aboutRef);
            }}
          >
            About
          </li>
          <li
            className="cursor-pointer text-[18px] text-[#3f4f3f] px-3 py-1 rounded-2xl transition duration-300 ease-in-out hover:bg-[#6b776b] hover:text-[#e9e8d8]"
            onClick={() => {
              props.scrollToSection(props.resumeRef);
            }}
          >
            Resume
          </li>
          <li
            className="cursor-pointer text-[18px] text-[#3f4f3f] px-3 py-1 rounded-2xl transition duration-300 ease-in-out hover:bg-[#6b776b] hover:text-[#e9e8d8]"
            onClick={() => {
              props.scrollToSection(props.projectsRef);
            }}
          >
            Projects
          </li>
          <li
            className="cursor-pointer text-[18px] text-[#3f4f3f] px-3 py-1 rounded-2xl transition duration-300 ease-in-out hover:bg-[#6b776b] hover:text-[#e9e8d8]"
            onClick={() => {
              props.scrollToSection(props.contactRef);
            }}
          >
            Contact
          </li>
        </ul>
        <div className="flex items-center gap-2">
          <ul className="flex gap-2 list-none">
            <li className="cursor-pointer text-[#3f4f3f] p-2 rounded-full transition duration-300 ease-in-out hover:bg-[#6b776b] hover:text-[#e9e8d8]">
              <a
                href="https://www.linkedin.com/in/dakshesh-sharma-825378291/"
                target="_blank"
              >
                <Linkedin size={20} />
              </a>
            </li>
            <li className="cursor-pointer text-[#3f4f3f] p-2 rounded-full transition duration-300 ease-in-out hover:bg-[#6b776b] hover:text-[#e9e8d8]">
              <a href="https://github.com/daksheshsharma2409/" target="_blank">
                <Github size={20} />
              </a>
            </li>
          </ul>

          <button
            className="lg:hidden text-[#3f4f3f] p-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-20 left-4 right-4 bg-[#e9e8d8] border-4 border-[#818e82] rounded-3xl p-6 flex flex-col gap-4 lg:hidden shadow-xl">
          <button
            key="About"
            className="text-left text-xl font-bold text-[#3f4f3f] border-b border-[#818e82]/20 pb-2"
            onClick={() => {
              props.scrollToSection(props.aboutRef);
            }}
          >
            About
          </button>
          <button
            key="Resume"
            className="text-left text-xl font-bold text-[#3f4f3f] border-b border-[#818e82]/20 pb-2"
            onClick={() => {
              props.scrollToSection(props.resumeRef);
            }}
          >
            Resume
          </button>
          <button
            key="Projects"
            className="text-left text-xl font-bold text-[#3f4f3f] border-b border-[#818e82]/20 pb-2"
            onClick={() => {
              props.scrollToSection(props.projectsRef);
            }}
          >
            Projects
          </button>
          <button
            key="Contact"
            className="text-left text-xl font-bold text-[#3f4f3f] border-b border-[#818e82]/20 pb-2"
            onClick={() => {
              props.scrollToSection(props.contactRef);
            }}
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
