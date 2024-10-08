import React, { useEffect, useState } from "react";
import AboutShimmer from "./AboutShimmer";
import {
  SiLinkedin,
  SiTwitter,
  SiGithub,
  SiLeetcode,
  SiHackerrank,
} from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";

const About = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/vijaynvvr");
    const json = await data.json();
    setUserInfo(json);
  };

  if (!userInfo) return <AboutShimmer />;

  const { name, location, bio, avatar_url } = userInfo;

  return (
    <div className="w-8/12 mx-auto my-14 flex justify-center items-center">
      <div className="p-5 bg-gray-50 hover:bg-orange-50 border border-gray-300 rounded shadow-md text-center max-w-sm">
        <img
          className="w-48 rounded-full mx-auto shadow-md"
          src={avatar_url}
          alt=""
        />
        <div className="text-lg mt-5 flex flex-col gap-3">
          <a
            href="https://www.linkedin.com/in/vijaynvvr/"
            className="text-2xl font-bold hover:text-orange-400 transition duration-500 ease-in-out"
          >
            {name.toUpperCase()}
          </a>
          <p className="text-lg">{"<React Developer />"}</p>
          <p className="text-lg flex justify-center items-center gap-2">
            <FaLocationDot /> {location}, India.
          </p>
          <p className="text-lg italic">{`❝ ${bio}❞`}</p>
          <div className="flex mt-2 justify-center text-xl">
            <a
              href="https://www.hackerrank.com/profile/Vj_10"
              className="w-6 mx-1"
              target="_blank"
            >
              <SiHackerrank className="cursor-pointer text-gray-500 hover:text-indigo-600" />
            </a>
            <a
              href="https://twitter.com/vijaynvvr"
              className="w-6 mx-1"
              target="_blank"
            >
              <SiTwitter className="cursor-pointer text-gray-500 hover:text-indigo-600" />
            </a>
            <a
              href="https://www.linkedin.com/in/vijaynvvr/"
              className="w-6 mx-1"
              target="_blank"
            >
              <SiLinkedin className="cursor-pointer text-gray-500 hover:text-indigo-600" />
            </a>
            <a
              href="https://github.com/vijaynvvr"
              className="w-6 mx-1"
              target="_blank"
            >
              <SiGithub className="cursor-pointer text-gray-500 hover:text-indigo-600" />
            </a>
            <a
              href="https://leetcode.com/vijaynvvr/"
              className="w-6 mx-1"
              target="_blank"
            >
              <SiLeetcode className="cursor-pointer text-gray-500 hover:text-indigo-600" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
