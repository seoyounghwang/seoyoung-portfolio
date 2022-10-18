import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";
import Resume from "../assets/[resume]sarah_seoyoung_hwang.docx";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#154024]">
      <div>
        <image src={Logo} alt="Logo Image" style={{ width: "50px" }} />
      </div>
      {/* menu */}
      <ul className="text-white hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? (
          <FaBars className="text-white" />
        ) : (
          <FaTimes className="text-white" />
        )}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#154024] flex flex-col justify-center items-center text-white"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-16px] duration-300">
            <a
              className="flex justify-between items-center w-full h-full pr-2 text-gray-100 bg-[#0072b1] pl-4"
              href="https://www.linkedin.com/in/seoyoung-hwang-71887822a/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-16px] duration-300">
            <a
              className="flex justify-between items-center w-full h-full pr-2 text-gray-100 bg-[#333333] pl-4"
              href="https://github.com/seoyounghwang"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <Link to="contact" smooth={true} duration={500}>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-16px] duration-300">
              <a
                className="flex justify-between items-center w-full h-full pr-2 text-gray-100 bg-[#0F9D58] pl-4"
                href="/"
              >
                Email
                <HiOutlineMail size={30} />
              </a>
            </li>
          </Link>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-16px] duration-300">
            <a
              className="flex justify-between items-center w-full h-full pr-2 text-gray-100 bg-[#DB4437] pl-4"
              href={Resume}
              download
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
