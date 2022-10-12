import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#154024]">
      {/* CONtainer */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#D9A9B6]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white">
          Seoyoung Hwang
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#c0c0c0]">
          I'm a Software Development Student.
        </h2>
        <div>
          <button className="text-white group border-[#D9A9B6] border-2 px-6 py-3 my-2 flex items-center hover:bg-[#D9A9B6] hover:text-white">
            <Link to="work" smooth={true} duration={500}>
              View Work
            </Link>
            <span className="group-hover:rotate-90 duration-500">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
