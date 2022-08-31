import Image from "next/image";
import React from "react";
import tracker from "../public/assets/projects/tracker.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const Tracker = () => {
  return (
    <div className="w-full bg-[#1f2235]">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={tracker}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 text-white">Expense Tracker</h2>
          <h3 className="text-white">HTML / CSS / JavaScript</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="text-white">Project</p>
          <h2 className="text-white">Overview</h2>
          <p className="text-white">
            This is an app i built using Vanilla JavaScript. It help users know
            and also calculate their income and expenditure. This app is hosted
            on Netlify.
          </p>
          <a
            href="https://github.com/jahjahday/Expense-Tracker"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://trackingexpense.netlify.app/"
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
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className=" py-2 flex items-center text-white">
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

export default Tracker;
