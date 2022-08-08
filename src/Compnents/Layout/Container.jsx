/** @format */

import React from "react";

const Container = (props) => {
  return (
    <div className="container md:px-14 py-15 mx-auto mb-20">
      {props.children}
    </div>
  );
};

export default Container;
