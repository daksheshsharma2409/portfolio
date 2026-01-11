import React from "react";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";

const Navbar = () => {
  return (
    <div className="relative flex justify-center top-8">
      <div className="fixed w-5xl ml-auto mr-auto bg-[#e9e8d8] h-16 rounded-4xl flex items-center justify-between pl-10 pr-10 border-4 border-[#818e82] transition duration-200 ease-in-out hover:bg-[#d7d6c7] hover:border-[#4d574d]">
        <h1 className="font-bold text-[21px] text-[#3f4f3f] cursor-pointer pl-2 pr-2 pt-1 pb-1 rounded-2xl transition duration-300 delay-75 ease-in-out hover:bg-[#6b776b] hover:text-[#e9e8d8]">
          Dakshesh Sharma
        </h1>
        <ul className="flex gap-3 list-none">
          <li className="cursor-pointer text-[18px] text-[#3f4f3f] pl-2 pr-2 pt-1 pb-1 rounded-2xl transition duration-300 delay-75 ease-in-out hover:bg-[#6b776b] hover:text-[#e9e8d8]">
            About
          </li>
          <li className="cursor-pointer text-[18px] text-[#3f4f3f] pl-2 pr-2 pt-1 pb-1 rounded-2xl transition duration-300 delay-75 ease-in-out hover:bg-[#6b776b] hover:text-[#e9e8d8]">
            Resume
          </li>
          <li className="cursor-pointer text-[18px] text-[#3f4f3f] pl-2 pr-2 pt-1 pb-1 rounded-2xl transition duration-300 delay-75 ease-in-out hover:bg-[#6b776b] hover:text-[#e9e8d8]">
            Projects
          </li>
          <li className="cursor-pointer text-[18px] text-[#3f4f3f] pl-2 pr-2 pt-1 pb-1 rounded-2xl transition duration-300 delay-75 ease-in-out hover:bg-[#6b776b] hover:text-[#e9e8d8]">
            Contact
          </li>
        </ul>
        <ul className="flex gap-2 list-none">
          <li className="cursor-pointer text-[#3f4f3f] pl-2 pr-2 pt-1 pb-1 rounded-2xl transition duration-300 delay-75 ease-in-out hover:bg-[#6b776b] hover:text-[#e9e8d8]">
            <Linkedin />
          </li>
          <li className="cursor-pointer text-[#3f4f3f] pl-2 pr-2 pt-1 pb-1 rounded-2xl transition duration-300 delay-75 ease-in-out hover:bg-[#6b776b] hover:text-[#e9e8d8]">
            <Github />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
