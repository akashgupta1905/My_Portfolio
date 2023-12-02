"use client";

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import {SiLeetcode,SiCodingninjas,SiGeeksforgeeks,SiCodechef,SiHackerrank} from "react-icons/si"
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs

    .sendForm("service_9c3uor9", "template_rcye56t", form.current, "iRgw0aD9-KbM48QJr")
      .then((result) => {
        form.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };
  return (
    <div className="w-full h-fit px-[40px]  py-10 md:py-20 max-xs:px-[20px] relative bg-light-bg" id="contact">
      <div className="max-w-[1250px] mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
          <div>
            <div className="inline-block">
              <p className="section-title mb-10">
                <span className="mb-1">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0 L16 8 L8 16 L0 8 L8 0Z" fill="currentColor"></path>
                  </svg>
                </span>
                Contact Me
              </p>
            </div>
            <p className="text-dark-blue">
              I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you
              want to run past me. I'm also avaliable.
            </p>
            <p className="text-dark-blue mt-12">Email me at</p>
            <h4>
              <a href="#" className="text-lg font-semibold text-dark-blue">
              akashguptavns004@gmail.com
              </a>
            </h4>
            <div className="mt-12">
              <div className="flex flex-col gap-2">
                <h5 className="text-dark-blue">Socials</h5>
                <div className="flex gap-5">
                  <a href="https://github.com/akashgupta1905" target="_blank" className="text-3xl text-dark-blue">
                    <AiFillGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/akash-gupta-87a86521b/" target="_blank" className="text-3xl text-dark-blue">
                    <AiFillLinkedin />
                  </a>
                  <a href="https://auth.geeksforgeeks.org/user/akku_official_1"  target="_blank" className="text-3xl text-dark-blue">
                    <SiGeeksforgeeks />
                  </a>
                  <a href="https://profile.codingninjas.com/8fcdf7c7-7724-46fc-af79-3fd2c9dcd7fe?_ga=2.162369276.1720845497.1684915031-1683286112.1658645593"  target="_blank" className="text-3xl text-dark-blue">
                    <SiCodingninjas />
                  </a>
                  <a href="https://leetcode.com/akku_official_1/" target="_blank" className="text-3xl text-dark-blue">
                    <SiLeetcode />
                  </a>
                  <a href="https://www.codechef.com/users/akku_703" target="_blank" className="text-3xl text-dark-blue">
                    <SiCodechef />
                  </a>
                  <a href="https://www.hackerrank.com/profile/akashguptavns004" target="_blank" className="text-3xl text-dark-blue">
                    <SiHackerrank />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={sendEmail} ref={form} className="w-full">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-dark-red"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  autoComplete="email"
                  className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-dark-red"
                />
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-dark-red"
                />
                <textarea
                  className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-dark-red"
                  id="message"
                  name="message"
                  rows="7"
                  style={{ resize: "none" }}
                  placeholder="Message"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="py-3 px-6 font-semibold text-white bg-dark-red hover:shadow-lg hover:bg-dark-red/75 transition-all duration-500 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
