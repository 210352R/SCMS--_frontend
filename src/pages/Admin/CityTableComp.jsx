import React, { useState } from "react";
import "./AdminViewReports.css";
import { useEffect, useRef } from "react";
import axios from "axios";

const TabbedTable = ({ selectedYear }) => {
  const cityDictionary = {S001: 'Colombo',S002: 'Kandy',S003: 'Negombo',S004: 'Galle',S005: 'Jaffna'};

  const cities = ["S001", "S002", "S003", "S004", "S005"];
  const [activeCity, setActiveCity] = useState("S001");

  const [tableData, setTableData] = useState([
    { route_id: "Route 1", orders: 50, tot_price: 1000 },
    { route_id: "Route 2", orders: 30, tot_price: 700 },
  ]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/report/getSalesBasedId/${selectedYear}/${activeCity}`
      )
      .then((res) => {
        console.log("dataset ek : ", res.data);
        if (res.data.sucess) {
          setTableData(res.data?.data);
        } else {
          setTableData([
            { route_id: "Route 1", orders: 50, tot_price: 1000 },
            { route_id: "Route 2", orders: 30, tot_price: 700 },
          ]);
        }
      })
      .catch((err) => {
        console.log("Error : ", err);
      });
  }, [selectedYear, activeCity]);

  console.log("lkfjfdkj", activeCity);
  const handleTabClick = (city) => {
    setActiveCity(city);
  };

  const renderTabs = () => {
    return cities.map((city) => (
      <div
        key={city}
        className={`tab ${activeCity === city ? "active" : ""}`}
        onClick={() => handleTabClick(city)}
      >
         {cityDictionary[city]}
      </div>
    ));
  };

  const renderTable = () => {
    // Replace this with your actual table data based on the selected city

    return (
      <table>
        <thead>
          <tr>
            <th>Route</th>
            <th>Sales</th>
            <th>Revenue</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row?.route_id}</td>
              <td>{row?.orders}</td>
              <td>{row?.tot_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="tabbed-table-container">
      <div className="tabs">{renderTabs()}</div>
      <div className="tabbed-table">{renderTable()}</div>
    </div>
  );
};

export default TabbedTable;
