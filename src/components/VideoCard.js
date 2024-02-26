import React from "react";

const VideoCard = ({ info }) => {
  const {snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  
  return (
    <div className="p-2 m-2 w-100">
      <img className="rounded-lg w-full" alt="thumbnail" src = {thumbnails.medium.url} />
      <ul>
        <li className="font-semibold">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>

      </ul>
    </div>
  );
};


export default VideoCard;