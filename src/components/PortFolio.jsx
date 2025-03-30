import React from "react";
import java from "../../public/java.png";
import python from "../../public/python.webp";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";
function PortFolio() {
  const cardItem = [
    // {
    //   id: 1,
    //   logo: mongoDB,
    //   name: "MongoDB",
    // },
    // {
    //   id: 2,
    //   logo: express,
    //   name: "Express",
    // },
    {
      id: 3,
      logo: reactjs,
      name: "ReactJS",
    },
    // {
    //   id: 4,
    //   logo: nodejs,
    //   name: "NodeJS",
    // },
    // {
    //   id: 5,
    //   logo: python,
    //   name: "Python",
    // },
    // {
    //   id: 6,
    //   logo: java,
    //   name: "Java",
    // },
  ];
  return (
    <>
      <div
        name="Portfolio"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
      >
        <div>
          <h1 className="text-3xl font-bold mb-5 flex flex-col gap-3">PortFolio</h1>
          <span className=" underline font-semibold">Featured Projects</span>
          <div className="flex shrink-0 flex-shrink-0 flex-wrap  gap-5 my-5">
            {cardItem.map(({ id, logo, name }) => (
              <div
                className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
                key={id}
              >
                <img
                  src={logo}
                  className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                  alt=""
                />
                <div>
                  <div className="px-2 font-bold text-xl mb-2">{name}</div>
                  <p className="px-2 text-gray-700">
                    A responsive web application built with React and modern web technologies.
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className=" flex items-start  space-x-3 justify-content mt-L">
            <a href="https://youtube.com/playlist?list=PLbtI3_MArDOn2wYYazc6Q2mzEo-28r1d0" target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-500 hover:bg-blue-700 text-white text-lg px-3 py-1 rounded cursor-pointer hover:scale-110 duration-300">
                Video
              </button>
            </a>
            <a href="https://react.dev/learn/react-developer-tools" target="_blank" rel="noopener noreferrer">
              <button className="bg-green-500 hover:bg-green-700 text-white  px-3 py-1 text-lg rounded cursor-pointer hover:scale-110 duration-300">
                Source code
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortFolio;
