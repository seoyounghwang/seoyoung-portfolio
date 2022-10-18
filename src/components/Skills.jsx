import React, { useState } from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Java from "../assets/java.png";
import MySql from "../assets/mysql.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import Postcss from "../assets/postcss.png";

const Skills = () => {
  const [skills, SetSkills] = useState([
    { src: HTML, name: "HTML" },
    { src: CSS, name: "CSS" },
    { src: JavaScript, name: "JavaScript" },
    { src: ReactImg, name: "React" },
    { src: Node, name: "Node" },
    { src: Java, name: "Java" },
    { src: MySql, name: "MySQL" },
    { src: GitHub, name: "GitHub" },
    { src: Tailwind, name: "Tailwind" },
    { src: Mongo, name: "Mongo" },
    { src: Postcss, name: "Post CSS" },
  ]);
  return (
    <div name="skills" className="w-full bg-[#154024] text-gray-100">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl text-gray-50 py-4font-bold inline border-b-4 border-[#D9A9B6]">
            Skills
          </p>
          <p className="py-4"> These are the technologies I've learned.</p>
        </div>
      </div>

      <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-6">
        {skills.map((skill) => (
          <div className="shadow-md shoadow-[#040c16] hover:scale-110 dutation-500">
            <img
              className="w-20 mx-auto h-20"
              src={skill.src}
              alt={skill.name + "_icon"}
            />
            <p className="my-4 text-white">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
