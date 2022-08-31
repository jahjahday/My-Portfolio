import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../public/assets/contact.jpg";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen bg-[#1f2235] ">
      <div className="bg-[#1f2235]">
        <div className="max-w-[1240px] m-auto px-2 py-16 w-full bg-[#1f2235]">
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">
            Contact
          </p>
          <h2 className="py-4 text-white">Get In Touch</h2>
          <div className="grid lg:grid-cols-5 gap-8">
            {/* left */}
            <div className="col-span-3 lg:col-span-2 w-full h-full bg-[#1f2235]   shadow-md shadow-blue-400 text-white rounded-xl p-4">
              <div className="lg:p-4 h-full ">
                <div>
                  <Image
                    className="rounded-xl hover:scale-105 ease-in duration-300"
                    src={ContactImg}
                    alt="/"
                  />
                </div>
                <div>
                  <h2 className="py-2 mt-4 text-white">Agwa Anthony Uche</h2>
                  <p className="mt-4 text-lg text-white">Front-End Developer</p>
                  <p className="py-4 text-white">
                    I am available for freelance, part-time or full-time
                    positions. Contact me and let&apos;s talk.
                  </p>
                </div>
                <div>
                  <p className="uppercase pt-8 text-white">Connect With Me</p>
                  <div className="flex items-center justify-between py-4 ">
                    <a
                      href="https://www.linkedin.com/in/agwa-anthony/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="rounded-full shadow-lg tshadow-md shadow-blue-400 text-white p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaLinkedinIn />
                      </div>
                    </a>
                    <a
                      href="https://github.com/jahjahday"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="rounded-full shadow-lg tshadow-md shadow-blue-400 text-white p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaGithub />
                      </div>
                    </a>

                    <div className="rounded-full shadow-lg tshadow-md shadow-blue-400 text-white p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <AiOutlineMail />
                    </div>
                    <Link href="/resume">
                      <a>
                        <div className="rounded-full  shadow-md shadow-blue-400 text-white p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                          <BsFillPersonLinesFill />
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* right */}
            <div className="col-span-3 w-full h-auto bg-[#1f2235]  lg:p-4">
              <div className="p-4">
                <form
                  action="https://getform.io/f/61271e59-5408-4ee3-b855-b2e1ffeb0635"
                  method="POST"
                  encType="multipart/form-data"
                >
                  <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2 text-white">
                        Name
                      </label>
                      <input
                        className="border-2 rounded-lg p-3 flex border-blue-400"
                        type="text"
                        name="name"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2 text-white">
                        Phone Number
                      </label>
                      <input
                        className="border-2 rounded-lg p-3 flex border-blue-400"
                        type="text"
                        name="phone"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col py-2 ">
                    <label className="uppercase text-sm py-2 text-white">
                      Email
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-blue-400"
                      type="email"
                      name="email"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2 text-white">
                      Subject
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-blue-400"
                      type="text"
                      name="subject"
                    />
                  </div>
                  <div className="flex flex-col py-2 ">
                    <label className="uppercase text-sm py-2 text-white">
                      Message
                    </label>
                    <textarea
                      className="border-2 rounded-lg p-3 border-blue-400"
                      rows="10"
                      name="message"
                    ></textarea>
                  </div>
                  <button className="w-full p-4 mt-4 text-white">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="flex justify-center py-12 bg-[#1f2235] ">
            <Link href="/">
              <a>
                <div className="rounded-full shadow-md shadow-blue-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                  <HiOutlineChevronDoubleUp className="text-white" size={30} />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
