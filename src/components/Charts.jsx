import React, { useState, useEffect } from "react";
import LineChart from "./LineChart";
import { UserData } from "./Data";
import axios from "axios";
import "../styles/ChartStyles.css";

export default function Charts() {
  const [quaterArr, setQuaterArr] = useState([0, 0, 0, 0]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/report/getQuartlaryReport/2023`)
      .then((res) => {
        console.log(res.data);
        if (res.data.sucess) {
          const arr = res.data?.data?.map((data) => {
            if (data?.income_quarter) {
              console.log("Innerr ----------------------------------");
              quaterArr[data?.income_quarter - 1] = data?.quarterly_income;
              console.log("--------", quaterArr);
            }
          });
        }
      })
      .catch((err) => {
        console.log("Error : ", err);
      });
  });

  const [userData, setUserData] = useState({
    // map eka return karanne array ekak ----
    labels: ["Quater 1", "Quater 2", "Quater 3", "Quater 4"],
    // methana thai chart eke okkoma tika denne --
    datasets: [
      {
        label: "Sales of year 2023 -- ",
        data: quaterArr,
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
