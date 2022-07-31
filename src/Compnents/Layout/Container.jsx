/** @format */

import React from "react";

const Container = (props) => {
  return (
    <div className="container md:px-14 py-15 mx-auto">
      <div className="flex  flex-wrap md:mx-10 -mb-10 ">{props.children}</div>
    </div>
  );
};

export default Container;
