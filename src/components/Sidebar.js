import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import shortsIcon from "../assets/shorts.svg";
import homeIcon from "../assets/home.svg";
import subsciptionIcon from "../assets/subscriptions.svg"
import trendingIcon from "../assets/trending.svg";
import shoppingIcon from "../assets/shopping.svg";
import moviesIcon from "../assets/movies.svg";
import musicIcon from "../assets/music.svg";
import helpIcon from "../assets/help.svg";
import settingsIcon from "../assets/settings.svg";
import reportIcon from "../assets/reportHistory.svg";
import feedbackIcon from "../assets/sendFeedback.svg";


const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className=" md:block p-5 max-h-screen hover:overflow-y-scroll overflow-hidden overscroll-contain fixed top-[90px] z-50 bg-white text-left w-[280px]">
      <ul>
        <Link to="/">
          <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
            <img className="inline-block align-bottom mr-3 text-2xl"
            alt="home"
            src= {homeIcon} />
            <span className="text-xl">Home</span>
          </li>
        </Link>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <img className="inline-block align-bottom mr-3 text-2xl"
          alt="shorts"
          src= {shortsIcon} />
          <span className="text-xl">Shorts</span>
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <img className="inline-block align-bottom mr-3 text-2xl" 
          alt="subsciption"
          src= {subsciptionIcon}
          />
          <span className="text-lg">Subscriptions</span>
        </li>
      </ul>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      <h1 className="font-bold pt-5 pb-5">Explore</h1>
      <ul>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <img className="inline-block align-bottom mr-3 text-2xl" 
          alt="trending"
          src={trendingIcon}
          />
          <span className="text-xl">Trending</span>
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <img className="inline-block align-bottom mr-3 text-2xl"
          alt="shopping"
          src={shoppingIcon} />
          <span className="text-xl">Shopping</span>
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <img className="inline-block align-bottom mr-3 text-2xl" 
          alt="music"
          src={musicIcon}/>
          <span className="text-xl">Music</span>
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <img className="inline-block align-bottom mr-3 text-2xl" 
          alt="movies"
          src={moviesIcon}/>
          <span className="text-xl">Movies</span>
        </li>
      </ul>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      <ul className="pt-10">
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <img className="inline-block align-bottom mr-3 text-2xl"
          alt="setting"
          src={settingsIcon} />
          <span className="text-xl">Settings</span>
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <img className="inline-block align-bottom mr-3 text-2xl"
          alt="report"
          src={reportIcon} />
          <span className="text-xl">Report</span>
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <img className="inline-block align-bottom mr-3 text-2xl" 
          alt="help"
          src={helpIcon}/>
          <span className="text-xl">Help</span>
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <img className="inline-block align-bottom mr-3 text-2xl"
          alt="feedback"
          src={feedbackIcon} />
          <span className="text-xl">Feedback</span>
        </li>
      </ul>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      <ul className="pt-10">
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <img className="inline-block align-bottom mr-3 text-2xl" />
          <span className="text-xl"></span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;