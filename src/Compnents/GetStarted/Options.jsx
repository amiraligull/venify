/** @format */

import React from "react";
import { Link } from "react-router-dom";
const Options = ({ img, title, url }) => {
  return (
    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
      <div className="w-50 h-50  inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500  flex-shrink-0">
        <img src={img} alt={img} />
      </div>
      <div className="flex-grow">
        <h2 className="custhead text-[2rem] font-bold  text-purple   ">
          <Link to={url}>{title}</Link>
        </h2>
      </div>
    </div>
  );
};

export default Options;
