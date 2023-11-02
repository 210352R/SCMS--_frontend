import React, { useState } from "react";
import LineChart from "./LineChart";
import { UserData } from "./Data";
import "../styles/ChartStyles.css";
import PieChart from "./PieChart";

export default function PieChartContainer() {
  const [userData, setUserData] = useState({
    // map eka return karanne array ekak ----
    labels: UserData.map((data) => data.year),
    // methana thai chart eke okkoma tika denne --
    datasets: [
      {
        label: "User Data",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["green", "orange", "yellow", "red", "blue"],
      },
    ],
  });
  return (
    <div className="piechart-container ">
      <h2 className="chart-title">User Data Chart</h2>
      <div style={{ alignContent: "center" }}>
        <PieChart chartData={userData} />
      </div>
    </div>
  );
}
