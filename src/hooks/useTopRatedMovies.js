import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useTopRatedMovies = () => {

    const dispatch = useDispatch();

    const topMovies = useSelector((store) => store.movies.topMovies);

    const getTopRatedMovies = async () => {
        const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        API_OPTIONS
        );
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
    };

    useEffect(()=>{
        !topMovies && getTopRatedMovies();
    },[])
}

export default useTopRatedMovies;