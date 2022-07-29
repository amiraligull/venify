/** @format */

import React from "react";

const Container = ({ childern }) => {
  return (
    <div className="container md:px-14 py-15 mx-auto">
      <div className="flex  flex-wrap md:mx-10 -mb-10 ">{childern}</div>
    </div>
  );
};

export default Container;
