import React from "react";
import { Pie } from "react-chartjs-2";

export default function PieChart({ chartData }) {
  const options = {
    plugins: {
      legend: {
        display: false, // Set to false to hide the legend
      },
      tooltip: {
        enabled: false, // Set to false to hide tooltips
      },
    },
  };

  // Merge the customized options with the chartData
  chartData.options = { ...chartData.options, ...options };
  return <Pie data={chartData} />;
}
