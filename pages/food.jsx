import Image from "next/image";
import React from "react";
import food from "../public/assets/projects/food.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const Food = () => {
  return (
    <div className="w-full bg-[#1f2235]">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={food}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Food App</h2>
          <h3>HTML / CSS / JAVASCRIPT</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="text-white">Project</p>
          <h2 className="text-white">Overview</h2>
          <p className="text-white">
            I built this application with HTML, CSS and JAVASCRIPT and is hosted
            on GitHub pages. This app can be used as a food recipe and also to
            know the ingredients used in preparing certain dishes.
          </p>
          <a
            href="https://github.com/jahjahday/Foodie"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://app.netlify.com/sites/mealproject"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2 text-white">
              Technologies
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1 text-white">
              <p className=" py-2 flex text-white  items-center">
                <RiRadioButtonFill className="pr-1" /> HTML
              </p>
              <p className="text-white py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
              <p className="text-white py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer text-white">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Food;
