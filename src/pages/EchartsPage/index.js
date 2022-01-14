import React, { useRef, useEffect } from "react";
import * as echarts from "echarts";

const EchartsPage = () => {
  const echartRef = useRef();
  useEffect(() => {
    const chartDom = echartRef.current;
    const myChart = echarts.init(chartDom);
    const option = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: "line",
        },
      ],
    };
    myChart.setOption(option);
  }, []);
  return <div style={{height: '500px'}} ref={echartRef}></div>;
};

export default EchartsPage;
