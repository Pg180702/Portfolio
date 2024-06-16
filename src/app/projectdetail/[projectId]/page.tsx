"use client";

import { Meteors } from "@/components/ui/meteors";
import Link from "next/link";

function page({ params }: { params: { projectId: Number } }) {
  const projects = [
    {
      id: 1,
      name: "HotelMERN",
      description: [
        "Engineered a hotel booking web application utilizing the MERN stack (MongoDB, Express.js, React.js, Node.js), integrating Material UI for frontend components.",
        "Orchestrated Stripe API integration to facilitate secure payment processing, ensuring seamless transactional experiences for users.",
        "Implemented user authentication and authorization using JSON Web Tokens (JWT), enhancing application security and privacy.",
        "Engineered a secure admin interface accessible only with specific credentials, empowering administrators to add hotels and create rooms dynamically. Utilized Multer and Cloudinary for seamless handling and storage of hotel images uploaded by admins.",
        "Enabled users to seamlessly search for hotels by destination, incorporating real-time room availability checks, and provided a user-friendly interface for accessing and managing their bookings.",
      ],
      images: [
        "/portfoliophotos/Screenshot (1302).png",
        "/portfoliophotos/Screenshot (1303).png",
        "/portfoliophotos/Screenshot (1305).png",
        "/portfoliophotos/Screenshot (1307).png",
        "/portfoliophotos/Screenshot (1309).png",
        "/portfoliophotos/Screenshot (1312).png",
      ],
      liveLink: "https://hotel-booking2.vercel.app/",
      sourceLink: "https://github.com/Pg180702/HotelBooking2",
    },
    {
      id: 2,
      name: "BlogMan",
      description: [
        "Developed a comprehensive MERN stack blog application using Material UI for the frontend design, featuring CRUD functionality for user posts.",
        "Implemented a dynamic user interface allowing users to create, edit, and delete their posts and utilized RESTful API principles to handle CRUD operations.",
        "Integrated user authentication with JSON Web Tokens (JWT) and User Context, ensuring secure registration, login, and logout functionalities.",
        "Improved image handling by using Multer for uploads and Cloudinary integration for cloud-based storage.",
      ],
      images: [
        "/portfoliophotos/Screenshot (1313).png",
        "/portfoliophotos/Screenshot (1314).png",
        "/portfoliophotos/Screenshot (1315).png",
        "/portfoliophotos/Screenshot (1316).png",
        "/portfoliophotos/Screenshot (1317).png",
        "/portfoliophotos/Screenshot (1318).png",
      ],
      liveLink: "https://blog-man-eta.vercel.app/",
      sourceLink: "https://github.com/Pg180702/BlogMan",
    },
    {
      id: 3,
      name: "MediaHub API",
      description: [
        "Crafted a resilient backend solution mirroring the core functionalities of YouTube’s infrastructure, encompassing user authentication, video uploading, likes, comments, playlists, subscriptions, and dashboard functionalities.",
        "Additionally, introduced an innovative feature set enabling tweet functionality.",
        "Utilized MongoDB aggregation pipelines to optimize data processing, resulting in significant performance improvements, such as a 40% reduction in query execution time.",
        "Engineered efficient controllers with streamlined algorithms to manage CRUD operations effectively, achieving an average response time of <100ms for API requests.",
      ],
      images: [],
      liveLink: "",
      sourceLink: "https://github.com/Pg180702/YT-Twitter-Backend",
    },
    {
      id: 4,
      name: "StreamingHub",
      description: [
        "Developed a Frontend Application that utilizes Youtube's API to fetch data and render videos to play.",
        "Implemented a dynamic user interface allowing users to filter videos based on categories.",
        "Integrated a sidebar in the video player that shows suggestions based on the current video being played.",
        "Implemented a search feature as well that allows users to search videos using YouTube's API.",
      ],
      images: [
        "/portfoliophotos/Screenshot (1329).png",
        "/portfoliophotos/Screenshot (1330).png",
        "/portfoliophotos/Screenshot (1331).png",
        "/portfoliophotos/Screenshot (1332).png",
      ],
      liveLink: "",
      sourceLink: "https://github.com/Pg180702/StreamingHub",
    },
  ];

  const projectId = params.projectId;
  // Filter projects array to find the project with matching id
  const project = projects.find(
    (project) => project.id === parseInt(projectId.toString())
  );

  // console.log(project);

  return (
    <>
      {project?.images.length === 0 ? (
        <>
          <div className="m-6 mb-2 grid sm:grid-cols-2 gap-4 sm:m-20"></div>
        </>
      ) : (
        <>
          <div className="m-6 mb-2 grid sm:grid-cols-2 gap-4 sm:m-40">
            {project?.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  height="100%"
                  width="100%"
                  style={{ background: "cover" }}
                />
              </div>
            ))}
          </div>
        </>
      )}

      <div className="sm:m-20 mt-2 m-6 flex justify-center">
        <h1 style={{ color: "white" }} className="text-5xl text-center">
          {project?.name}
        </h1>
      </div>
      <div className="sm:m-20 mt-2 m-6 flex items-center justify-center">
        {project && (
          <>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              {project.description.map((point, index) => (
                <li key={index} style={{ marginBottom: "8px" }}>
                  {point}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
      <div className="flex items-center justify-center gap-6 sm:m-20 mt-2 m-6">
        {project?.liveLink !== "" ? (
          <>
            <Link
              href={project?.liveLink}
              className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
            >
              Live Link
            </Link>
          </>
        ) : (
          <></>
        )}

        {project?.sourceLink !== "" ? (
          <>
            <Link
              href={project?.sourceLink}
              className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
            >
              Source Code
            </Link>
          </>
        ) : (
          <></>
        )}
      </div>
      {/* <Meteors number={20} /> */}
    </>
  );
}

export default page;
