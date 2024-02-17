import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailers from "../hooks/useMovieTrailers";

const VideoBackground = ({ movieId }) => {

  const trailerVideo = useSelector((store) => store.movies?.trailer);

  useMovieTrailers(movieId);

  return (
    <div>
      VideoBackground
      <iframe
        width="560"
        height="315"
        src= {"https://www.youtube.com/embed/" + trailerVideo?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;