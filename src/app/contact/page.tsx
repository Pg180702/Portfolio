"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Link from "next/link";
function page() {
  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Contact Me
        </h1>
        <p></p>

        <input
          type="text"
          placeholder="Your Email Address"
          className="rounded-lg border p-2 border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-5  bg-neutral-950 placeholder:text-neutral-700"
        />
        <textarea
          id="story"
          name="story"
          rows={10}
          cols={40}
          placeholder="Your Message"
          className="rounded-lg border p-2 border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-5  bg-neutral-950 placeholder:text-neutral-700"
        ></textarea>
        <div className="mt-10 text-center">
          <button className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
            Send Message
          </button>
        </div>
      </div>
      <div className="mx-auto p-0 grid grid-cols-3 gap-4">
        <a href="https://github.com/Pg180702" target="_blank">
          <FaGithub className="text-3xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/pranjal-gangwar-147051238/"
          target="_blank"
        >
          <FaLinkedin className="text-3xl" />
        </a>
        <a href="mailto:pranjalgangwar1807@gmail.com" target="_blank">
          <BiLogoGmail className="text-3xl" />
        </a>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default page;
