import React, { useRef } from "react";
import openai from "../utils/openai";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();

  const currlang = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // Search TMDB
  const searchMoviesTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    const gptQuery =
      "Act as a movie recommendattion system and suggest some movies for the query : " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Animal";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      // TODO: Error Handling
    }

    // string to array
    const gptMovies = gptResults?.choices?.[0]?.message?.content.split(",");

    // for each movie I will search TMDB API
    const promiseArray = gptMovies.map((movie) => searchMoviesTMDB(movie));
    // IMP - we will get promises
    // [Promise, Promise, Promise, Promise, Promise]

    const tmdbresults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResults({ movieNames: gptMovies, movieResults: tmdbresults })
    );
  };

  return (
    <div className="pt-[60%] md:p-0 md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="m-3 p-4 col-span-9 bg-gray-500 text-white rounded-md"
          type="text"
          placeholder={lang[currlang].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 bg-red-700 text-white mr-3 my-3 py-2 px-4 rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[currlang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
