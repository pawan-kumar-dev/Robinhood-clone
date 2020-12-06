import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
const LineGraph = ({ dates }) => {
     const [graphData, setGraphData] = useState([]);

     const options = {
          legend: { display: false },
          tooltips: {
               mode: "index",
               intersect: false,
          },
          scales: {
               xAxes: [
                    {
                         type: "time",
                         time: {
                              parser: "MM/DD/YY",
                              tooltipFormat: "ll",
                         },
                         ticks: { display: false },
                    },
               ],
               yAxes: [
                    {
                         ticks: { display: false },
                    },
               ],
          },
     };
     const createMockData = (dates) => {
          let data = [];
          let value = 50;
          //  days in years 366 and creatinga mock data
          for (let i = 0; i < dates; i++) {
               let date = new Date();
               date.setHours(0, 0, 0, 0);
               date.setDate(i);
               value += Math.round(
                    (Math.random() < 0.5 ? 1 : 0) * Math.random() * 10
               );
               data.push({ x: date, y: value });
          }
          setGraphData(data);
     };

     useEffect(() => {
          createMockData(dates);
     }, [dates]);

     const data = {
          datasets: [
               {
                    type: "line",
                    backgroundColor: "black",
                    borderWidth: 2,
                    pointBorderColor: "rgba(0,0,0,0)",
                    pointBackgroundColor: "rgba(0,0,0,0)",
                    pointHoverBorderColor: "#000000",
                    pointHoverBackgroundColor: "#5ac538",
                    pointHoverBorderWidth: 4,
                    pointHoverRadius: 6,
                    label: "# Stocks",
                    data: graphData,
                    fill: false,
                    borderColor: "#5ac538",
               },
          ],
     };
     return (
          <div className="w-full ">
               <Line data={data} options={options} />
          </div>
     );
};

export default LineGraph;
