import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {

  return (
    <div className="px-6 ">
      <h1 className="text-lg md:text-xl py-4 text-white">{title}</h1>
      <div className="flex pb-2 overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies?.map((movies => < MovieCard key={movies.id} movieId={movies.id} posterpath={movies?.poster_path} />))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

