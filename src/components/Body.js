import React from "react";
import Sidebar from "./Sidebar";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

const Body  = ({setProgress}) => {
  const { pathname } = useLocation();
  useEffect(() => {
    setProgress(30);
    setProgress(100);
  }, [pathname]);

  return (
    <div className="flex">
      <Sidebar/>
      <Outlet />
    </div>
  );
};

export default Body;