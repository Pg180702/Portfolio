"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const personalJourneyContent = [
  {
    title: "Beginnings at IIIT Nagpur",
    description: `
      My journey began when I started attending IIIT Nagpur in 2021. Due to the COVID-19 pandemic, our semester was conducted online, limiting my opportunities to explore the campus and engage in activities. However, the second semester brought a change as we began attending college on campus. This period marked the beginning of making friends and discovering new interests.
    `,
  },
  {
    title: "Discovering Web Development",
    description: `
      In my second year, I was introduced to HTML, CSS, and JavaScript, which sparked a keen interest in web development. Initially, I learned the basics and experimented with some Android development. However, I found that web development was more engaging for me, so I decided to focus my efforts there.
    `,
  },
  {
    title: "Advancing with the MERN Stack",
    description: `
      Over the course of my second year, I delved deeper into web development and mastered the MERN (MongoDB, Express.js, React, Node.js) stack. This comprehensive knowledge allowed me to start building projects, and so far, I have successfully developed three full-stack projects. My passion for web development continues to grow as I explore new technologies such as Next.js, TypeScript, and Tailwind CSS.
    `,
  },
  {
    title: "Pursuit of Data Structures and Algorithms (DSA)",
    description: `
      In addition to web development, I have dedicated a significant amount of time to studying data structures and algorithms. I have solved over 550 problems across various platforms, including CodingStudio, GeeksForGeeks, and LeetCode. My hard work has earned me a rating of 1812 on LeetCode, placing me in the top 7.13% of users on the platform.
    `,
  },
  {
    title: "Personal Interests and Hobbies",
    description: `
      Beyond my academic and technical pursuits, I have a deep appreciation for storytelling, whether through books, movies, or TV shows. This passion for narratives enhances my creativity and provides a balanced approach to my personal and professional life.

      By combining my technical skills with my love for storytelling, I continue to strive for excellence and innovation in everything I do.
    `,
  },
];

function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={personalJourneyContent} />
    </div>
  );
}

export default WhyChooseUs;
