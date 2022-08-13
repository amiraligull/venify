/** @format */

import React from "react";

const Container = (props) => {
  // const { peding, margin, width } = props;
  return (
    <div className="container md:px-0 py-15 mx-auto mb-20">
      {props.children}
    </div>
  );
};

export default Container;
