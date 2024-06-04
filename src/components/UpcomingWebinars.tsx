"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";
const featuredWebinars = [
  {
    title:
      "data:image/png;base64,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",
    description: "Express JS",
    slug: "understanding-music-theory",
    isFeatured: true,
  },
  {
    title:
      "data:image/png;base64,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",
    description: "React JS",
    slug: "the-art-of-songwriting",
    isFeatured: true,
  },
  {
    title: "Mastering Your Instrument",
    description: "JavaScript",
    slug: "mastering-your-instrument",
    isFeatured: true,
  },
  {
    title: "Music Production Essentials",
    description: "MongoDB",
    slug: "music-production-essentials",
    isFeatured: true,
  },
  // Added two more webinars
  {
    title: "Live Performance Techniques",
    description: "HTML",
    slug: "live-performance-techniques",
    isFeatured: true,
  },
  {
    title: "Digital Music Marketing",
    description: "CSS",
    slug: "digital-music-marketing",
    isFeatured: true,
  },
  {
    title: "Digital Music Marketing",
    description: "NextJS",
    slug: "digital-music-marketing",
    isFeatured: true,
  },
  {
    title: "Digital Music Marketing",
    description: "C++",
    slug: "digital-music-marketing",
    isFeatured: true,
  },
  {
    title: "Digital Music Marketing",
    description: "Tailwind",
    slug: "digital-music-marketing",
    isFeatured: true,
  },
];
function UpcomingWebinars() {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-lg text-teal-600 font-semibold tracking-wide uppercase">
            Skills
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Tech I Have Explored So Far
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: "/",
            }))}
          />
        </div>
        {/* <div className="mt-10 text-center">
          <Link
            href={"/webinars"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All Webinars
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export default UpcomingWebinars;