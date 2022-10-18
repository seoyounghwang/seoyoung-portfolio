import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#154024] text-gray-50">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#D9A9B6]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Seoyoung.</p>
            <p>Nice to meet you.</p>
            <p>Please take a look around.</p>
          </div>
          <div className="items-center justify-center flex">
            <p>
              Hi. I'm a full-stack developer based in Calgary. When I come
              across challenging problems during projects, I like to think of it
              as an opportunity to learn and grow my skills while finding
              creative solutions!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
