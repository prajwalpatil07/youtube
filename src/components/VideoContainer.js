import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideoContainer = () => {

  const[videos, setVideos] = useState([]);



  useEffect(() => {
    getVideos();

  }, []);

  const getVideos = async () => {
    const data= await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };
  if (!videos.length) return <Shimmer />;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-5 md:ml-[300px]">
      {videos.map((video) => (
     <Link key={video.id} to={"/watch?v="+ video.id}><VideoCard info={video} /></Link>
      ))}
      
    </div>
  );
};

export default VideoContainer;