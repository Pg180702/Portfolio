"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";

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
          placeholder="hi@manuarora.in"
          className="rounded-lg border p-2 border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-5  bg-neutral-950 placeholder:text-neutral-700"
        />
        <textarea
          id="story"
          name="story"
          rows={10}
          cols={40}
          placeholder="Get in Touch With Me"
          className="rounded-lg border p-2 border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-5  bg-neutral-950 placeholder:text-neutral-700"
        ></textarea>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default page;
