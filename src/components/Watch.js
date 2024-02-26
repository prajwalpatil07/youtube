import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import ReactPlayer from "react-player/youtube";
import { Link, useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEO_WATCH_API, YOUTUBERECOMMEND_VIDEOAPI} from "../utils/constants";
import likeIcon from "../assets/like.svg";
import disLikeIcon from "../assets/dislike.svg";
import shareIcon from "../assets/share.svg";
import downloadIcon from "../assets/download.svg";
import moreIcon from "../assets/more.svg";
import CommentsContainer from "./CommentsContainer";

const Watch = () => {
  const [searchParams] = useSearchParams();
  const [Wvideo, setWVideo] = useState([]);
  const [relatedvideo, setrelatedvideo] = useState([]);

  let videoId = searchParams.get("v");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
    window.scrollTo(0, 0);
    getVideoDetails();
    getRelatedVideo();
  }, []);

  const getVideoDetails = async () => {
    const data = await fetch(YOUTUBE_VIDEO_WATCH_API + videoId);
    const json = await data.json();
    setWVideo(json.items[0]);
  };

  const getRelatedVideo = async () => {
    const data = await fetch(YOUTUBERECOMMEND_VIDEOAPI);
    const json = await data.json();
    setrelatedvideo(json.items);
  };

  return (
    <div className="flex justify-center flex-row h-[calc(100%-56px)] bg-white">
      <div className="w-full max-w-[1480px] flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
          <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
            <ReactPlayer
              url={"https://www.youtube.com/embed/" + searchParams.get("v")}
              controls
              width="100%"
              height="100%"
              style={{ backgroundColor: "#00000" }}
              playing={true}
            />
          </div>

          <div className="text-black font-bold text-sm md:text-xl mt-4 line-clamp-2">
            {Wvideo?.snippet?.title}
          </div>
          <div className="flex justify-between flex-col md:flex-row mt-4">
            <div className="flex">
              <div className="flex items-start">
                <div className="flex h-11 w-11 rounded-full overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    alt="thumbnail"
                    src={Wvideo?.snippet?.thumbnails?.default?.url}
                  />
                </div>
                <div className="flex flex-col ml-3">
                  <div className="text-black text-md font-semibold flex items-center">
                    {Wvideo?.snippet?.channelTitle}
                  </div>
                  <div className="text-black/[0.7] text-sm">
                    {Wvideo?.statistics?.viewCount} Subscriber
                  </div>
                </div>
              </div>
              <button className="bg-black rounded-full px-4 ml-2 text-white hover:bg-white hover:text-black hover:border border-black">
                Subscribe
              </button>
            </div>
            <div className="flex text-black mt-4 md:mt-0">
              <button className="bg-gray-100 rounded-l-full px-4 hover:bg-gray-200">
                <img alt="likeBtn" className="inline-block" src={likeIcon} /> 5K
              </button>
              <button className="bg-gray-100 rounded-r-full px-4 border-l-2 border-gray-300 hover:bg-gray-200">
                <img
                  alt="dislikeBtn"
                  className="inline-block"
                  src={disLikeIcon}
                />{" "}
                50
              </button>
              <button className="bg-gray-100 rounded-full px-4 ml-2 hover:bg-gray-200">
                <img alt="shareBtn" className="inline-block" src={shareIcon} />{" "}
                Share
              </button>
              <button className="bg-gray-100 rounded-full px-4 ml-2 hover:bg-gray-200">
                <img
                  alt="downloadBtn"
                  className="inline-block"
                  src={downloadIcon}
                />{" "}
                Download
              </button>
              <button className="bg-gray-100 rounded-full w-10 h-10 ml-2 hover:bg-gray-200">
                <img alt="moreBtn" className="inline-block" src={moreIcon} />
              </button>
            </div>
          </div>

          <CommentsContainer />
        </div>

        <div className="flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px] md:ml-36">
          {relatedvideo?.map((video) => (
            <Link
              key={video?.id}
              to={"/watch?v=" + video.id}
              onClick={() => window.scroll(0, 0)}
            >
              <div className="flex mb-3">
                <div className="relative h-24 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl bg-slate-800 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    alt="thumbnail"
                    src={video?.snippet?.thumbnails?.medium?.url}
                  />
                </div>

                <div className="flex flex-col ml-3 overflow-hidden">
                  <ul className="">
                    <li className="text-sm lg:text-xs xl:text-sm font-bold line-clamp-2 text-black">
                      {video?.snippet?.title}
                    </li>
                    <li className="text-[12px] lg:text-[10px] xl:text-[12px] font-semibold mt-2 text-black/[0.7] flex items-center">
                      {video?.snippet?.channelTitle}
                    </li>
                    <li className="flex text-[12px] lg:text-[10px] xl:text-[12px] font-semibold text-black/[0.7] truncate overflow-hidden">
                      {video.statistics.viewCount} Views
                    </li>
                  </ul>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Watch;