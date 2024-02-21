import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/moviesSlice";

const useMovieTrailers = ( movieId ) => {
  // fetching trailer video and updating the store with trailer video data
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const dispatch = useDispatch();
  const getVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter(
      (video) => video.type === "Trailer"
    );

    const trailer = filterData.length ? filterData[0] : json.results[0];

    dispatch(addTrailer(trailer));
    // setMainTrailer(trailer);
  };

  useEffect(() => {
    !trailerVideo && getVideos();
  }, []);
};

export default useMovieTrailers;
