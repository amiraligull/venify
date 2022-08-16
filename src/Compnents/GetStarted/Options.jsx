/** @format */

import React from "react";
import { Link } from "react-router-dom";
const Options = ({ img, title, url }) => {
  return (
    <div className="start-flexcolbox">
      <div className="start-image">
        <img src={img} alt={img} />
      </div>
      <div className="flex-grow">
        <h2 className="start-title">
          <Link to={url}>{title}</Link>
        </h2>
      </div>
    </div>
  );
};

export default Options;
