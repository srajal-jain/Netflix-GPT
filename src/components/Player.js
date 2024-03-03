import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailers from "../hooks/useMovieTrailers";
import Header from "./Header";

const Player = ({ movieId }) => {
  const video = useSelector((store) => store.movies?.trailer);

  useMovieTrailers(movieId);

  return (
    <div className="page-body min-h-screen text-gray-500">
      <Header />
      <div className="h-screen w-screen">
        <iframe
          className="h-[416px] md:h-[calc(100%-0px)] w-full pt-[118px] md:pt-[70px]"
          src={
            "https://www.youtube.com/embed/" +
            video?.key +
            "?autoplay=1&amp;mute=0&amp;controls=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=0"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default Player;
