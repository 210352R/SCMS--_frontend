import React, { useState } from "react";
import LineChart from "./LineChart";
import { UserData } from "./Data";

import "../styles/ChartStyles.css";

export default function Charts() {
  const [userData, setUserData] = useState({
    // map eka return karanne array ekak ----
    labels: UserData.map((data) => data.year),
    // methana thai chart eke okkoma tika denne --
    datasets: [
      {
        label: "User Data",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["green", "blue"],
      },
    ],
  });
  return (
    <div className="chart-container">
      <h2 className="chart-title">User Data Chart</h2>
      <LineChart chartData={userData} />
    </div>
  );
}
