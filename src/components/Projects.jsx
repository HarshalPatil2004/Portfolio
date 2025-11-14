import React from "react";
import java from "../../public/java.png";
import python from "../../public/python.webp";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";
import photo from "../../public/photo.avif";
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
      logo: photo,
      name: "Portfolio",
      description:
        "Personal portfolio showcasing projects, skills, CV, and contact options for potential employers.",
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
        name="Projects"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
      >
        <div>
          <h1 className="text-3xl font-bold mb-5 flex flex-col gap-3">Projects</h1>
          <span className=" underline font-semibold">Featured Projects</span>
          <div className="flex shrink-0 flex-shrink-0 flex-wrap  gap-5 my-5">
            {cardItem.map(({ id, logo, name, description }) => (
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
                    {description
                      ? description
                      : "A responsive web application built with React and modern web technologies."}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className=" flex items-start  space-x-3 justify-content mt-L">
            <a href="https://harshalpatil2004.vercel.app/" target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-500 hover:bg-blue-700 text-white text-lg px-3 py-1 rounded cursor-pointer hover:scale-110 duration-300">
                Link
              </button>
            </a>
            <a href="https://github.com/HarshalPatil2004/Portfolio" target="_blank" rel="noopener noreferrer">
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
