/** @format */

import React from "react";
import { Link } from "react-router-dom";

const LinkOptions = ({ url, title, img, ImgUrl }) => {
  return (
    <div>
      {url &&
        (() => {
          // if the link is external
          if (
            url ===
            "https://venify.gitbook.io/welcome-to-venify/1I4f1mgT4zIUc2I1KAOp/"
          ) {
            return (
              <Link
                to={url}
                onClick={() => window.open(url)}
                target="_blank"
                className="mr-5 hover:text-gray-900"
              >
                {title}
              </Link>
            );
          }
          // else the link is internal
          else {
            return (
              <Link
                to={url}
                target="_blank"
                className="mr-5 hover:text-gray-900"
              >
                {title}
              </Link>
            );
          }
        })()}

      {img && (
        <Link to={ImgUrl} onClick={() => window.open(ImgUrl)}>
          <img src={img} alt={img} className="scale-75 " />
        </Link>
      )}
    </div>
  );
};

export default LinkOptions;
