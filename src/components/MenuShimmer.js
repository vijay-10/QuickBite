import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-col items-center gap-7">
      <div className="px-4 w-8/12 h-28 rounded-lg bg-slate-100 shadow-lg flex justify-between animate-pulse">
        <div className="flex flex-col w-[70%] h-28 rounded-lg">
          <div className="w-[60%] h-4 rounded-md bg-white my-auto animate-pulse"></div>
          <div className="w-[60%] h-4 rounded-md bg-white my-auto animate-pulse"></div>
          <div className="w-[60%] h-4 rounded-md bg-white my-auto animate-pulse"></div>
        </div>
        <div className="w-[5%] h-[60%] rounded-md bg-white my-auto animate-pulse"></div>
      </div>
      <div className="w-8/12 h-[2px] bg-slate-200 animate-pulse"></div>
      <div className="px-4 w-8/12 h-16 rounded-lg bg-slate-100 shadow-lg flex justify-between animate-pulse">
        <div className="w-[60%] h-5 rounded-md bg-white my-auto animate-pulse"></div>
        <div className="w-[5%] h-5 rounded-md bg-white my-auto animate-pulse"></div>
      </div>
      <div className="px-4 w-8/12 h-16 rounded-lg bg-slate-100 shadow-lg flex justify-between animate-pulse">
        <div className="w-[60%] h-5 rounded-md bg-white my-auto animate-pulse"></div>
        <div className="w-[5%] h-5 rounded-md bg-white my-auto animate-pulse"></div>
      </div>
      <div className="px-4 w-8/12 h-16 rounded-lg bg-slate-100 shadow-lg flex justify-between animate-pulse">
        <div className="w-[60%] h-5 rounded-md bg-white my-auto animate-pulse"></div>
        <div className="w-[5%] h-5 rounded-md bg-white my-auto animate-pulse"></div>
      </div>
      <div className="px-4 w-8/12 h-16 rounded-lg bg-slate-100 shadow-lg flex justify-between animate-pulse">
        <div className="w-[60%] h-5 rounded-md bg-white my-auto animate-pulse"></div>
        <div className="w-[5%] h-5 rounded-md bg-white my-auto animate-pulse"></div>
      </div>
      <div className="px-4 w-8/12 h-16 rounded-lg bg-slate-100 shadow-lg flex justify-between animate-pulse">
        <div className="w-[60%] h-5 rounded-md bg-white my-auto animate-pulse"></div>
        <div className="w-[5%] h-5 rounded-md bg-white my-auto animate-pulse"></div>
      </div>
      <div className="px-4 w-8/12 h-16 rounded-lg bg-slate-100 shadow-lg flex justify-between animate-pulse">
        <div className="w-[60%] h-5 rounded-md bg-white my-auto animate-pulse"></div>
        <div className="w-[5%] h-5 rounded-md bg-white my-auto animate-pulse"></div>
      </div>
      <div className="px-4 w-8/12 h-16 rounded-lg bg-slate-100 shadow-lg flex justify-between animate-pulse">
        <div className="w-[60%] h-5 rounded-md bg-white my-auto animate-pulse"></div>
        <div className="w-[5%] h-5 rounded-md bg-white my-auto animate-pulse"></div>
      </div>
    </div>
  );
};

export default Shimmer;
