"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

function page() {
  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 z-20">
        <h1 className="relative text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Contact Me
        </h1>
        <p></p>
        <h4 className="relative text-sm md:text-2xl mt-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Through Email At:
        </h4>
        <p className="relative text-sm md:text-2xl mt-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          pranjalgangwar1807@gmail.com
        </p>
        <h4 className="relative text-sm md:text-2xl mt-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          College:
        </h4>
        <p className="relative text-sm md:text-2xl mt-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Indian Institute Of Information Technology Nagpur
        </p>
      </div>
      <h4 className="relative text-sm md:text-2xl mt-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
        Through Socials:
      </h4>
      <div className="mx-auto p-0 mt-6 grid grid-cols-3 gap-4 z-20">
        <a
          href="https://github.com/Pg180702"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-3xl text-white" />
        </a>
        <a
          href="https://www.linkedin.com/in/pranjal-gangwar-147051238/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-3xl text-white" />
        </a>
        <a
          href="mailto:pranjalgangwar1807@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BiLogoGmail className="text-3xl text-white" />
        </a>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default page;
