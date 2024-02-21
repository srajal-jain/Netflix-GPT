import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {

  const currlang = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12 rounded-lg">
        <input
          className="m-3 p-4 col-span-9 bg-gray-500 text-white rounded-md"
          type="text"
          placeholder={lang[currlang].gptSearchPlaceholder}
        />
        <button className="col-span-3 bg-red-700 text-white m-3 py-2 px-4 rounded-lg">
          {lang[currlang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
