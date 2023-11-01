import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import "./AdminViewReports.css";
import CityDialog from "./CityTableComp";
import axios from "axios";

const PieChart = ({ selectedYear }) => {
  const pieChartRef = useRef(null);
  const [labelArray, setLabelArray] = useState([]);
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    const fetchDataAndCreateChart = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/report/getItemsWithMostSales/${selectedYear}`);
        console.log("dataset Eka : ", res.data);
        if (res.data.sucess) {
          console.log("In ==", res.data.data);
          const arr1 = res.data?.data?.map((data) => data?.name);
          console.log("<<<<<<<<<<", arr1);
          setLabelArray(arr1);

          const arr2 = res.data?.data?.map((data) => data?.total_quantity);
          console.log("<<<<<<<<<<", arr2);
          setDataArray(arr2);
        }
      } catch (err) {
        console.log("Error : ", err);
      }
    };

    fetchDataAndCreateChart();
  }, [selectedYear]);

  useEffect(() => {
    createChart();
  }, [labelArray, dataArray]);

  const createChart = () => {
    const ctx = pieChartRef.current.getContext("2d");
    const data = {
      labels: labelArray,
      datasets: [
        {
          data: dataArray,
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(153, 102, 255, 0.6)",
          ],
          hoverBackgroundColor: [
            "rgba(255, 99, 132, 0.8)",
            "rgba(54, 162, 235, 0.8)",
            "rgba(255, 206, 86, 0.8)",
            "rgba(75, 192, 192, 0.8)",
            "rgba(153, 102, 255, 0.8)",
          ],
        },
      ],
    };

    const existingPieChart = pieChartRef.current.chart;

    if (existingPieChart) {
      existingPieChart.destroy();
    }

    const newPieChart = new Chart(ctx, {
      type: "pie",
      data: data,
      options: {
        maintainAspectRatio: false,
        responsive: true,
      },
    });
    pieChartRef.current.chart = newPieChart;
  };

  return <canvas ref={pieChartRef} />;
};

export default PieChart;
