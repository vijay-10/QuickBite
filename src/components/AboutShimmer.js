import React from "react";

const AboutShimmer = () => {
  return (
    <div className="w-8/12 mx-auto my-14 flex justify-center items-center">
      <div className="my-6 p-4 w-72 h-96 rounded-lg bg-slate-100 shadow-lg flex flex-col gap-1 animate-pulse leading-relaxed">
        <div className="w-[70%] aspect-square bg-white mx-auto rounded-full animate-pulse leading-relaxed"></div>
        <div className="w-[70%] h-5 rounded-md bg-white m-auto animate-pulse leading-relaxed"></div>
        <div className="w-[50%] h-5 rounded-md bg-white m-auto animate-pulse leading-relaxed"></div>
        <div className="w-[50%] h-5 rounded-md bg-white m-auto animate-pulse leading-relaxed"></div>
        <div className="w-[85%] h-5 rounded-md bg-white m-auto animate-pulse leading-relaxed"></div>
        <div className="w-[50%] h-5 rounded-md bg-white m-auto animate-pulse leading-relaxed"></div>
      </div>
    </div>
  );
};

export default AboutShimmer;
