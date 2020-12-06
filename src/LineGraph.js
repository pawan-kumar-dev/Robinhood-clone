import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
const LineGraph = () => {
     const [graphData, setGraphData] = useState([]);
     const data = {
          labels: ["1", "2", "3", "4", "5", "6"],
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
                    label: "# of Votes",
                    data: [12, 19, 3, 5, 2, 3],
                    fill: false,
                    borderColor: "#5ac538",
               },
          ],
     };

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
                              format: "MM/DD/YY",
                              tooltipFormat: "ll",
                         },
                    },
               ],
               yAxes: [
                    {
                         ticks: { display: false },
                    },
               ],
          },
     };

     const createMockData = () => {
          let data = [];
          let value = 50;
          //  days in years 366 and creatinga mock data
          for (let i = 0; i < 366; i++) {
               let date = new Date();
               date.setHours(0, 0, 0, 0);
               date.setDate(i);
               value += Math.round(
                    (Math.round() < 0.5 ? 1 : 0) * Math.random() * 10
               );
               data.push({ x: date, y: value });
          }
          setGraphData(data);
     };

     useEffect(() => {
          createMockData();
     }, []);
     return (
          <div>
               <Line data={data} options={options} />
          </div>
     );
};

export default LineGraph;
