import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="px-12 pt-36">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="w-1/4 py-6 text-lg">{overview}</p>
      <button className="bg-gray-500 p-4 px-12 text-white text-xl rounded-lg opacity-70">
        ▶ Play
      </button>
      <button className="bg-gray-500 p-4 px-12 text-white text-xl rounded-lg mx-2 opacity-70">
        More Info
      </button>
    </div>
  );
};

export default VideoTitle;
