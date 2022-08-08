/** @format */

import React from "react";
// import TabBar from "./Lib/TabBar";
import TabBarWithRender from "./Lib/TabBarWithRender";
const Tabsb = ({
  tabOneValue,
  tabTwoValue,
  tabname1,
  tabname2,
  PresaleTyple,
  LockType,
}) => {
  return (
    <div>
      {/* <TabBar tabs={["Tab One", "Tab Two", "Tab Three"]} /> */}

      {PresaleTyple && (
        <TabBarWithRender
          tabs={[
            {
              title: tabname1,
              render: () => (
                <div className=" flex flex-row  flex-wrap mdpx-10 md:mx-10 -mb-10">
                  {tabOneValue}
                </div>
              ),
            },
            {
              title: tabname2,
              render: () => tabTwoValue,
            },
          ]}
        />
      )}

      {/* Venify loack tabs */}
      {LockType && (
        <TabBarWithRender
          tabs={[
            {
              title: tabname1,
              render: () => (
                <div className=" flex flex-row  flex-wrap mdpx-10 md:mx-10 -mb-10">
                  {tabOneValue}
                </div>
              ),
            },
            {
              title: tabname2,
              render: () => tabTwoValue,
            },
          ]}
        />
      )}
    </div>
  );
};

export default Tabsb;
