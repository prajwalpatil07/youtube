import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import youtubeIcon from "../assets/youtube.svg";
import hamBurgerIcon from "../assets/hamburger.svg";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { useNavigate } from "react-router-dom";

const Head = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const navigate = useNavigate();
  const searchCache = useSelector((store)=> store.search);
  const dispatch = useDispatch();

  useEffect(()=> {
 const timer = setTimeout(() => {
  if(searchCache[searchQuery]) {
    setSuggestion(searchCache[searchQuery]);
  } else {
    getSearchData();
  }
}, 200);

 return () => {
  clearTimeout(timer);
 };
  }, [searchQuery]);

  const getSearchData = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestion(json[1]);
    dispatch(cacheResults({
      [searchQuery] : json[1],
    }));
  };

  const handleSuggestion = (event) => {
    setSearchQuery(event.target.innerText);
    setShowSuggestion(false);
    navigate("/results?search_query=" + encodeURI(event.target.innerText));
  };

const toggleMenuHandler = () => {
  dispatch(toggleMenu());
};

const searchQueryHandler = (event) => {
  if (
    (event?.key === "Enter" || event === "searchButton") &&
    searchQuery?.length > 0
  ) {
    console.log("clicked");
    navigate("/results?search_query=" + searchQuery);
  }
};

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg w-full">
      <div className="flex col-span-1">
        <img 
        onClick={()=> toggleMenuHandler()}
        className="h-8 cursor-pointer"
        alt="menu" 
        src={hamBurgerIcon}
        />
        <a href="/">
      <img 
      className="h-8 mx-2"
      alt="youtube-logo" 
      src={youtubeIcon}
      />
      </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
        <input 
        className="w-1/2 border border-gray-400 p-2 rounded-l-full" 
        type="text" 
        placeholder="Search"
        value={searchQuery}
        onKeyUp={searchQueryHandler}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setShowSuggestion(true)}
        onBlur={() => setShowSuggestion(false)}
        />
        <button className="border rounded-r-full w-16 h-[43px] bg-gray-100 hover:bg-gray-200">
          <img className="h-[13px] mx-auto" 
          alt="search icon" 
          onClick={() => searchQueryHandler("searchButton")}
          src="https://cdn-icons-png.flaticon.com/512/482/482631.png"/>
        </button>
        </div>
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute hover:bg-gray-200 hover:rounded-full w-9 h-9 right-[5.0rem] top-[2px]"
          >
          </button>
        )}
      </div>
      {showSuggestion && suggestion?.length > 0 && (
       <div className="pt-[43px]">
       <div className="absolute bg-white w-[510px] max-h-[350px] mx-[320px] shadow-lg border rounded-lg overflow-y-auto left-3 z-50 text-left">
          <ul className="py-3">
            {suggestion.map((suggestions) => (
              <li
                key={suggestions}
                onMouseDown={(e) => handleSuggestion(e)}
                className="hover:bg-gray-100 rounded-lg cursor-pointer p-2"
              >
                <img
                  className="mr-5 h-4 ml-3 inline-block"
                  alt="search-icon"
                  src="https://cdn-icons-png.flaticon.com/512/482/482631.png"
                />
                <span>{suggestions}</span>
              </li>
            ))}
          </ul>
        </div>
        </div>
      )}

      
      <div className="col-span-1">
        <img className="h-8 cursor-pointer"
        alt="user" 
        src="https://cdn-icons-png.flaticon.com/512/666/666201.png"/>
      </div>
    </div>
  );
};

export default Head;