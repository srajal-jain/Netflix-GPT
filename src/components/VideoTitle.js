import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute px-24 pt-[20%] text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="w-1/4 py-6 text-lg">{overview.length > 144 ? overview.slice(0,144) +"..." : overview.slice(0,144)}</p>
      <div className="">
        <button className="bg-white p-4 px-16 text-black text-xl rounded-lg hover:opacity-80">
          Play
        </button>
        <button className="bg-gray-500 p-4 px-12 text-white text-xl rounded-lg mx-2 hover:opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
