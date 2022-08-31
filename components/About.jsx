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
            In 2019 August 20th to be precise, i was somewhere with my elder
            brother who is a Frontend Developer with a leading tech company, and
            i saw him coding. At the point i had no idea what that meant. At
            some point it looked like he was doing something illegal, so i asked
            him what he was doing, and he said it was computer programming, and
            he encouraged me to give it trail. Reluctantly, i said i was going
            to give it 2 hours daily, then he helpped in setting me up.
          </p>
          <p className="py-2 text-white">
            To my greatest surprise, i was putting in more hours even up to 12
            hours a day, i immediate fell in love with programming, and till now
            am grateful i started.
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
