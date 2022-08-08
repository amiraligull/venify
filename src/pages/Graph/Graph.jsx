/** @format */

import React from "react";
import TradeViewChart from "react-crypto-chart";
const Graph = () => {
  return (
    <div className=" h-[40vh] w-[100%]  overflow-hidden rounded-lg shadow-xl  mb-10">
      <TradeViewChart
        interval="5m"
        containerStyle={{
          minHeight: "40vh",
          minWidth: "100%",
          // marginBottom: "30px",
        }}
        chartLayout={{
          layout: {
            backgroundColor: "#ededed",
            textColor: "#253248",
          },
          grid: {
            vertLines: {
              color: "transparent",
              // style: LineStyle.SparseDotted,
            },
            horzLines: {
              color: "transparent",
              // style: LineStyle.SparseDotted,
            },
          },
          crosshair: {
            // mode: CrosshairMode.Normal,
          },
          priceScale: {
            borderColor: "#485c7b",
          },
          timeScale: {
            borderColor: "#485c7b",
            timeVisible: true,
            secondsVisible: true,
          },
        }}
        candleStickConfig={{
          upColor: "#48C9B0",
          downColor: "#cf304a",
          borderDownColor: "#cf304a",
          borderUpColor: "#00c176",
          wickDownColor: "#838ca1",
          wickUpColor: "#838ca1",
        }}
        // histogramConfig={{
        //   base: 0,
        //   lineWidth: 10,
        //   priceFormat: {
        //     type: "volume",
        //   },
        //   overlay: true,
        //   scaleMargins: {
        //     top: 0.8,
        //     bottom: 0,
        //   },
        // }}
        pair="ETHUSDT"
      />
    </div>
  );
};

export default Graph;
