import Image from "next/image";
import React from "react";
import crypto from "../public/assets/projects/crypto2.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const twitch = () => {
  return (
    <div className="w-full bg-[#1f2235]">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={crypto}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 text-white">Crypto Currency </h2>
          <h3 className="text-white">React JS / CSS / Tailwind</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="text-white">Project</p>
          <h2 className="text-white">Overview</h2>
          <p className="text-white">
            I built this app to demonstrate knowledge working in React JS and
            accessing API endpoints. This app was built using React JS and is
            hosted on Netlify. This application was built using API.
          </p>
          <a
            href="https://cripter.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a
            href="https://github.com/jahjahday/crypo-tracker"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center text-white font-bold pb-2">
              Technologies
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className=" py-2 flex items-center text-white">
                <RiRadioButtonFill className="pr-1" /> React.JS
              </p>
              <p className="text-white py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
              <p className="text-white py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default twitch;
