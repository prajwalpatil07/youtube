import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const list = [
  "All",
  "Gaming",
  "Songs",
  "News",
  "Cricket",
  "Football",
  "Mashup",
  "Remix",
  "Action",
  "Live",
  "Drama",
  "Esports",
  "Songs",
];

const ButtonList = () => {
  return (
    <div className="hidden md:block flex  sm:ml-[260px] z-40 bg-white pb-2">
      <div className="sm:max-w-[86%] overflow-x-hidden flex flex-col sm:flex-row mx-12">
        {list.map((names) => (
          <Link to="live" key={names}>
            <Button name={names}></Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ButtonList;