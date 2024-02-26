import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { openMenu } from "../utils/appSlice";
import { useSearchParams, Link } from "react-router-dom";
import { YOUTUBE_SEARCH_VIDEO_WITH_QUERY_API } from "../utils/constants"; 


const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const [searchedVideos, setSearchedVideos] = useState([]);

  let searchQuery = searchParams.get("search_query");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(openMenu());
    getSearchedVideosList();
  }, [searchQuery]);

  const getSearchedVideosList = async () => {
    const data = await fetch(YOUTUBE_SEARCH_VIDEO_WITH_QUERY_API + searchQuery);
    const searchedVideosJson = await data.json();
    console.log(searchedVideosJson?.items);
    setSearchedVideos(searchedVideosJson?.items);
    console.log(searchedVideosJson?.items?.id);
  };
  return (
    <div className="md:px-3 col-span-11 ">
      <div className="flex flex-col md:px-3  items-center">
        <div className="md:p-2 md:ml-[250px]">
          {searchedVideos?.map((video) => (
            <Link
              key={video?.id?.videoId}
              to={"/watch?v=" + video?.id?.videoId}
            >
              <div className="md:px-3 m-4 flex flex-col sm:flex-row ">
                <img
                  className="rounded-lg  w-full md:w-[300px] h-[200px] mt-4"
                  alt="thumbnail"
                  src={video?.snippet?.thumbnails?.medium?.url}
                />
                <ul className="flex flex-col justify-start ml-5 mt-2 w-[90%] md:w-full">
                  <li className="text-sm lg:text-xs xl:text-sm font-bold line-clamp-2 text-black">
                    {video?.snippet?.title}
                  </li>
                  <li className="text-[12px] lg:text-[10px]  xl:text-[12px] font-semibold mt-2 text-black/[0.7] flex items-center">
                    {video?.snippet?.channelTitle}
                  </li>
                  <li className="text-gray-500 text-[18px]">
                    1M views{" "}
                    {(
                      Math.abs(
                        new Date(video?.snippet?.publishedAt) - new Date()
                      ) /
                      (60 * 60 * 24 * 1000)
                    ).toFixed(1)}{" "}
                    days ago
                  </li>
                  <li className="text-gray-500 mt-2 text-[15px] hidden sm:block">
                    {video?.snippet?.description}
                  </li>
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;