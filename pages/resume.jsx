import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Uche | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <div className="bg-[#1f2235]">
        <div className="max-w-[940px] mx-auto   p-2 pt-[120px]">
          <h2 className="text-center text-white">Resume</h2>
          <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
            <h2 className="text-center">Agwa Anthony Uche</h2>
            <div className="flex">
              <a
                href="https://www.linkedin.com/in/agwa-anthony/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
              </a>
              <a
                href="https://github.com/jahjahday"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={20} style={{ marginRight: "1rem" }} />
              </a>
            </div>
          </div>
          <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
            <div className="hidden sm:block">
              <p className=" text-white">
                Proven Leadership <span className="px-1">|</span> Frontend
                Development <span className="px-1">|</span> Problem Solving
              </p>
            </div>
          </div>
          <p className=" text-white">
            I am a Frontend Developer with robust problem-solving skills and
            proven experience in creating and designing software in a
            test-driven environment. I am fascinated by leverage and always
            looking for opportunities to increase team performance by acting as
            a force multiplier. Having in the industry since 2019, I am excited
            by new opportunities for the technology to empower human
            collaboration.
          </p>

          {/* Skills */}
          <div className="text-center py-4">
            <h5 className="text-center underline text-[18px] py-2  text-white">
              Skills
            </h5>
            <p className="py-2  text-white">
              <span className="font-bold">Technical Skills</span>
              <span className="px-2">|</span>Front-End Developer
              <span className="px-2">|</span> HTML
              <span className="px-2">|</span> CSS
              <span className="px-2">|</span> Bootstrap{" "}
              <span className="px-2">|</span> JavaScript{" "}
              <span className="px-2">|</span>React.js
              <span className="px-2">|</span>Next.js
              <span className="px-2">|</span>Tailwind
              <span className="px-2">|</span> Styled-Components
              <span className="px-2">|</span> Graph QL
            </p>
          </div>

          <h5 className="text-center underline text-[18px] text-white py-4">
            Professional Experience
          </h5>

          {/* Experience */}
          <div className="py-6 text-white">
            <p className="italic">
              <span className="font-bold"> United States of Africa</span>
              <span className="px-2">|</span> Texas, United States of America
            </p>
            <p className="py-1 italic">
              Frontend Developer (October 2022 - Date)
            </p>
            <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
              <li>Determining the structure and design of web pages</li>
              <li>Ensuring user experience determines design choices</li>
              <li>Developing features to enhance the user experience</li>
              <li>
                Striking a balance between functional and aesthetic design
              </li>
              <li>Ensuring web design is optimized for smartphones</li>
              <li>Building reusable code for future use</li>
              <li> Optimizing web pages for maximum speed and scalability</li>
              <li>
                Utilizing a variety of markup languages to write web pages
              </li>
              <li>Maintaining brand consistency throughout the design.</li>
            </ul>
          </div>
          <div className="py-6 text-white">
            <p className="italic">
              <span className="font-bold">Hubstro Limited</span>
              <span className="px-2">|</span> Lagos, Nigeria
            </p>
            <p className="py-1 italic">
              Frontend Developer (November 2021 - May 2022)
            </p>
            <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
              <li>
                Maintaining and improving existing codebases and peer review
                code changes
              </li>
              <li>Maintain or exceed compliance with industry standards</li>
              <li>Developing and executing project plans</li>
              <li>
                Perform maintenance and software integrations for existing
                systems
              </li>
              <li>Deployment/Implementation of Software Solutions,</li>
              <li>Ensures seamless end-user support for developed solutions</li>
              <li>
                Understanding customer requirements and business objectives, and
                developing software solutions to satisfy customers needs
              </li>
            </ul>
          </div>
          <div className="py-6 text-white">
            <p className="italic">
              <span className="font-bold italic">BLUSPACE MULTIMEDIA</span>
              <span className="px-2">|</span>Lagos, Nigeria
            </p>
            <p className="py-1 italic">
              Junior Frontend Developer (August 2019 - October 2021)
            </p>
            <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
              <li>Converts designs to code</li>
              <li>Developing innovative solutions</li>
              <li>Provide on-call support as necessary</li>
              <li>Write and debug code</li>
              <li>
                Working closely with developers to improve product’s
                functionality
              </li>
              <li>
                Ensured comprehensive mobile responsive UI layouts with
                understanding of HTML, CSS, and JavaScript.
              </li>
              <li>
                Providing strategic advice on using technology to achieve goals
              </li>
              <li>Worked on its flagship products...</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default resume;
