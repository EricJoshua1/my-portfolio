import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { TbSquareRoundedArrowRightFilled } from "react-icons/tb";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-20" // Padding to offset the height of the NavBar
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row md:px-6 lg:px-8">
        <div className="flex flex-col justify-center h-full text-center md:text-left">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-400 py-4 max-w-lg">
            Hi, I'm Eric.
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
            {" Frontend - Blockchain Developer />"}
          </h2>
          <p className="text-gray-300 py-4 max-w-lg">
            I am a Web & Blockchain Developer with a background in Civil and
            Construction Engineering, currently working as a researcher
            integrating advanced technology to enhance worksite safety.
          </p>
          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <TbSquareRoundedArrowRightFilled size={30} className="ml-2" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my-profile"
            className="rounded-2xl mx-auto w-full max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
