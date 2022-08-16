/** @format */

import React from "react";
import { Link } from "react-router-dom";

const LinkOptions = ({ url, title, img, ImgUrl }) => {
  return (
    <div>
      {url && (
        <Link
          to="#"
          onClick={() => window.open(url)}
          target="_blank"
          className="mr-5 "
        >
          {title}
        </Link>
      )}
      {/* social images */}
      {img && (
        <Link to={ImgUrl} onClick={() => window.open(ImgUrl)}>
          <img src={img} alt={img} className="scale-75 " />
        </Link>
      )}
    </div>
  );
};

export default LinkOptions;
