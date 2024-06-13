"use client";
import projectsData from "../data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}
function FeaturedCourses() {
  //neeche course ka datatype bataaya hai Course hai

  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-lg text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED PROJECTS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Recent Projects
          </p>
        </div>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          <div className="flex justify-center">
            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
              <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                <img
                  src="/portfoliophotos/Screenshot (1302).png"
                  style={{ background: "cover" }}
                />

                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  HotelMERN
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                  A FullStack Hotel Booking App that provides dynamic room check
                  functionality and lets you make your bookings
                </p>
                <Link href={"/projectdetail/1"}>Learn More</Link>
              </div>
            </BackgroundGradient>
          </div>
          <div className="flex justify-center">
            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
              <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                <img
                  src="/portfoliophotos/Screenshot (1313).png"
                  style={{ background: "cover" }}
                />

                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  BlogMan
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                  A FullStack Blog App that allows users to create blogs, read
                  other's blogs with proper authentication for Login and
                  Register
                </p>
                <Link href={"/projectdetail/2"}>Learn More</Link>
              </div>
            </BackgroundGradient>
          </div>
          <div className="flex justify-center">
            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
              <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                <img
                  src="/portfoliophotos/github-logo.png"
                  height="8rem"
                  style={{ background: "cover", height: "10rem" }}
                  alt=""
                />

                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  Mediahub API
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                  A Backend API that provides functionality of apps such as
                  Youtube and Twitter.
                </p>
                <Link href={"/projectdetail/3"}>Learn More</Link>
              </div>
            </BackgroundGradient>
          </div>
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/projects"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          View All Projects
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
