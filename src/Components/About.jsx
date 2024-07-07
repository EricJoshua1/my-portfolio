import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
          sapiente adipisci repudiandae itaque atque a. A, delectus? Perferendis
          explicabo cum omnis esse nostrum nemo nobis doloremque delectus
          maiores, aliquam iste ut odio voluptate necessitatibus, deleniti
          beatae corporis rerum at recusandae reprehenderit aut sed numquam
          laboriosam quaerat. Eos ipsa pariatur fugit.
        </p>

        <br />

        <p className="text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          natus amet sapiente reprehenderit nesciunt recusandae velit ex animi,
          perferendis suscipit, non temporibus deserunt aut minima enim rem.
          Sunt, alias error vero, adipisci odio deleniti excepturi
          exercitationem at debitis cum quasi saepe delectus natus tempore
          asperiores voluptates perferendis aliquid iste quos.
        </p>
      </div>
    </div>
  );
};

export default About;
