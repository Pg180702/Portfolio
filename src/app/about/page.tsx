"use client";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiVercel } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { SiTailwindcss } from "react-icons/si";
import Link from "next/link";
function page() {
  return (
    // <TracingBeam className="px-6 mt-16">
    //   <div className="max-w-2xl mx-auto antialiased pt-4 relative">
    //     {dummyContent.map((item, index) => (
    //       <div key={`content-${index}`} className="mb-10">
    //         <h2 className="bg-black text-white rounded-full text-xl w-fit px-4 py-1 mb-4">
    //           {item.badge}
    //         </h2>

    //         <p className="text-xl mb-4">{item.title}</p>

    //         <div className="text-xl  prose prose-sm dark:prose-invert">
    //           {item.description}
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </TracingBeam>
    // <div className="h-screen  m-6 grid sm:grid-cols-2 gap-4 overflow-x-hidden">
    //   <div className="pt-[7rem] overflow-x-hidden">
    //     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacus
    //     erat, aliquet sit amet fermentum vel, faucibus at est. Integer tempus
    //     imperdiet nulla, id accumsan massa congue sit amet. Morbi eget egestas
    //     lacus, sed facilisis quam. Phasellus vestibulum elit at sem tristique,
    //     sodales porttitor mauris ultrices. In dui lectus, molestie at nibh at,
    //     blandit hendrerit arcu. Vivamus odio nunc, viverra in pulvinar quis,
    //     venenatis et ipsum. Sed quis ex a massa varius consectetur. Nullam
    //     varius molestie scelerisque. Ut eget fermentum odio, efficitur sagittis
    //     felis. Praesent ornare risus id lacus ullamcorper, accumsan imperdiet
    //     tellus iaculis. Duis mollis ut lorem ac posuere. Duis ante nulla,
    //     accumsan id ex sit amet, rutrum cursus lectus. Nulla viverra in ex nec
    //     egestas. Etiam quis lacus sed erat scelerisque suscipit non eget dui.
    //     Aliquam eu fermentum orci, sit amet eleifend purus. Duis vel ante nec
    //     augue fringilla vehicula sed vel enim. Curabitur a purus vel ligula
    //     ornare convallis. Sed ac gravida sapien. Nam sit amet egestas tortor,
    //     sit amet eleifend est. Mauris ornare sit amet quam vel feugiat.
    //     Phasellus posuere euismod augue et facilisis. Ut justo diam, vestibulum
    //     non vestibulum quis, cursus vel ante. Aliquam et lobortis eros.
    //     Phasellus et sem sed metus posuere sodales sit amet eget sapien. Nam
    //     volutpat augue sodales lacus varius porttitor. Morbi ac velit quis velit
    //     mattis vestibulum porta quis odio. Proin rutrum arcu ut erat pretium, in
    //     hendrerit diam tristique. Fusce nec dignissim magna. Donec facilisis sem
    //     quis nisl commodo semper id eu justo. Nunc malesuada, neque sit amet
    //     fermentum volutpat, nisl nisi auctor augue, et luctus massa tellus eu
    //     nibh. Morbi tempor velit sed libero fermentum, vel maximus mi imperdiet.
    //     Duis consequat pharetra lorem, ac sodales erat venenatis quis. Vivamus
    //     tortor ipsum, faucibus vel maximus quis, auctor ac orci. Vestibulum
    //     euismod mollis finibus. Nam vulputate felis quis enim maximus, blandit
    //     dignissim mi venenatis. Sed cursus tortor sit amet risus mollis, quis
    //     eleifend mi tristique. Pellentesque maximus urna sit amet ante
    //     hendrerit, vel lacinia odio lobortis. Praesent nec velit lectus. Nunc
    //     tincidunt eleifend ligula, in vulputate neque efficitur sed. Fusce a
    //     eros orci. Vivamus congue eleifend sagittis. Cras bibendum nisl at sem
    //     porta blandit.
    //   </div>
    //   <div className="pt-[7rem] overflow-x-hidden"></div>
    // </div>
    <div className="container mx-auto px-8 sm:px-14 py-40 flex flex-col lg:flex-row lg:space-x-32">
      <div className="flex flex-col lg:w-1/2">
        <h1 className="text-3xl font-bold">About Me and My Tech Stacks</h1>
        <p className="text-lg leading-loose mt-4">
          Hi Everyone, I am Pranjal Gangwar, a student at IIIT Nagpur,
          demonstrating a strong passion for technology and software
          development. As a proficient full-stack developer, I possess extensive
          knowledge of the MERN (MongoDB, Express.js, ReactJs/Next Js, Node.js)
          stack, showcasing the ability to create robust and scalable web
          applications. I stand out with my adept coding skills, particularly
          excelling in Data Structures and Algorithms, which I have learned and
          practiced throughout my academic journey. Eager to apply my skills in
          a professional setting, I am actively seeking job opportunities in the
          technology sector, where my expertise and enthusiasm can contribute to
          innovative projects and solutions.
        </p>
        <Link href={"/projects"} className="btn btn-primary mt-6">
          <button className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
            My Projects
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-x-6 lg:gap-x-10 xl:gap-x-20 lg:w-1/2 mt-12 lg:mt-0">
        <div className="flex flex-col items-center">
          <FaHtml5 className="text-8xl" />
          <p className="text-center mt-2">HTML</p>
        </div>
        <div className="flex flex-col items-center">
          <FaCss3Alt className="text-8xl" />
          <p className="text-center mt-2">CSS</p>
        </div>
        <div className="flex flex-col items-center">
          <IoLogoJavascript className="text-8xl" />
          <p className="text-center mt-2">JavaScript</p>
        </div>
        <div className="flex flex-col items-center">
          <FaReact className="text-8xl" />
          <p className="text-center mt-2">React</p>
        </div>
        <div className="flex flex-col items-center">
          <FaNodeJs className="text-8xl" />
          <p className="text-center mt-2">Node.js</p>
        </div>
        <div className="flex flex-col items-center">
          <DiMongodb className="text-8xl" />
          <p className="text-center mt-2">MongoDB</p>
        </div>
        <div className="flex flex-col items-center">
          <SiVercel className="text-8xl" />
          <p className="text-center mt-2">Vercel</p>
        </div>
        <div className="flex flex-col items-center">
          <FaGithub className="text-8xl" />
          <p className="text-center mt-2">GitHub</p>
        </div>
        <div className="flex flex-col items-center">
          <AiOutlineConsoleSql className="text-8xl" />
          <p className="text-center mt-2">SQL</p>
        </div>
        <div className="flex flex-col items-center">
          <SiTailwindcss className="text-8xl" />
          <p className="text-center mt-2">Tailwind CSS</p>
        </div>
      </div>
    </div>
  );
}
const dummyContent = [
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Sit duis est minim proident non nisi velit non consectetur. Esse
          adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
          Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
          incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
          fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
          nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
          occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
          officia sint labore. Tempor consectetur excepteur ut fugiat veniam
          commodo et labore dolore commodo pariatur.
        </p>
        <p>
          Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
          veniam in commodo id reprehenderit adipisicing. Proident duis
          exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
        </p>
        <p>
          Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
          reprehenderit deserunt amet laborum consequat adipisicing officia qui
          irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
          Amet culpa officia aliquip deserunt veniam deserunt officia
          adipisicing aliquip proident officia sunt.
        </p>
      </>
    ),
    badge: "React",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
        <p>
          In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
          veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
          reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
          cillum ut mollit.
        </p>
      </>
    ),
    badge: "Changelog",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
      </>
    ),
    badge: "Launch Week",
  },
];
export default page;
