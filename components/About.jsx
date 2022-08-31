import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen bg-[#1f2235]  p-2 flex items-center py-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4 text-white">Who I Am</h2>
          <p className="py-2 text-white">
            In August 2019, 20th to be precise, i was somewhere with my elder
            brother who is a Senior Frontend Developer with a leading tech
            company writing stuffs that looks very confusing. At the point i had
            no idea what that meant. It looked like he was doing something
            illegal, so i asked him what he was doing, and he said it was
            computer programming, and he encouraged me to give it a shot.
            Reluctantly, i planned spending 2 hours daily to learn and practice,
            but as my interest grew, i started hitting 8 - 12 hours daily.
          </p>
          <p className="py-2 text-white">
            Looking back to how it all started, i will say that i am most
            grateful i made the right decision.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-white underline cursor-pointer">
              Check out some of my projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
