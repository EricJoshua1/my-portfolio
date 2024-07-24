import React from "react";

// List of all imports for assets
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import typescript from "../assets/typescript.png";
import reactImage from "../assets/react.png";
import solidity from "../assets/solidity.png";
import tailwind from "../assets/tailwind.png";
import chakraui from "../assets/chakraUI.png";
import web3js from "../assets/web3js.png";
import ethereum from "../assets/ethereum.png";
import polygon from "../assets/polygon.png";
import remixIDE from "../assets/remixIDE.png";
import hardhat from "../assets/hardhat.png";
import zokrates from "../assets/zokrates.png";

const Category = ({ title, skills }) => (
  <div className="flex-1 w-full p-4 text-white">
    <div>
      <p className="pt-10 pb-2 text-3xl py-6">{title}</p>
    </div>
    <div className="w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-8 text-center py-8 px-12 sm:px-6">
      {skills.map(({ id, src, title, style }) => (
        <div
          key={id}
          className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
        >
          <img src={src} alt={title} className="w-20 mx-auto" />
          <p className="mt-4">{title}</p>
        </div>
      ))}
    </div>
  </div>
);

const SkillsAndExperience = () => {
  const languages = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: typescript,
      title: "typescript",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: solidity,
      title: "Solidity",
      style: "shadow-white",
    },
  ];
  const forFrontEnd = [
    {
      id: 6,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },

    {
      id: 8,
      src: chakraui,
      title: "chakraUI",
      style: "shadow-gray-400",
    },
  ];
  const forBlockchain = [
    {
      id: 9,
      src: web3js,
      title: "web3js",
      style: "shadow-gray-300",
    },
    {
      id: 10,
      src: ethereum,
      title: "ethereum",
      style: "shadow-blue-300",
    },
    {
      id: 11,
      src: polygon,
      title: "polygon",
      style: "shadow-purple-300",
    },
    {
      id: 12,
      src: remixIDE,
      title: "remixIDE",
      style: "shadow-sky-300",
    },
    {
      id: 13,
      src: hardhat,
      title: "hardhat",
      style: "shadow-yellow-300",
    },
    {
      id: 14,
      src: zokrates,
      title: "zokrates",
      style: "shadow-gray-300",
    },
  ];

  return (
    <div
      name="skills and experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen overflow-hidden"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <div className="w-full p-4">
          <p className="text-2xl md:text-3xl lg:text-4xl text-white font-bold inline border-b-4 border-gray-500 py-2 mx-2 md:mx-4">
            Skills and Experiences
          </p>
        </div>

        <Category title="Programming Languages" skills={languages} />
        <Category title="Frontend Development" skills={forFrontEnd} />
        <Category title="Blockchain Development" skills={forBlockchain} />
      </div>
    </div>
  );
};

export default SkillsAndExperience;
