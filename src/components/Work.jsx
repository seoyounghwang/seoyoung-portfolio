import React from "react";
import HomeInventoryImg from "../assets/homeInventoryApp.JPG";
import ManageEmployeeImg from "../assets/manageEmployee.JPG";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-white bg-[#154024]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#D9A9B6]">
            Work
          </p>
          <p className="py-4">Check out some of my recent work</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${ManageEmployeeImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center itmes-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <div className="justify-center items-center flex-col pt-7">
                <span className="text-2xl font-bold text-white tracking-wider justify-center">
                  JSP JAVA Application
                </span>
                <p className="text-1xl font-bold text-white tracking-wider justify-center">
                  Manage Employee Application
                </p>
                <div className="pt-8 text-center">
                  <a
                    href="https://www.youtube.com/watch?v=jETB1Oqgg4o&t=68s"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${HomeInventoryImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center itmes-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <div className="justify-center items-center flex-col pt-7">
                <span className="text-2xl font-bold text-white tracking-wider">
                  MERN stack Application
                </span>
                <p className="text-1xl font-bold text-white tracking-wider justify-center">
                  Manage Home Inventory Application
                </p>
                <div className="pt-8 text-center">
                  <a
                    href="https://github.com/seoyounghwang/home-inventory-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
