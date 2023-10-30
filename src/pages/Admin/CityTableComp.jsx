// TabbedTable.js

import React, { useState } from "react";
import "./AdminViewReports.css";

// stores tika -------------------------------
const cities = ["Colombo", "Kandy", "Galle"]; // Add your cities here

const TabbedTable = () => {
  const [activeCity, setActiveCity] = useState(cities[0]);

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
        {city}
      </div>
    ));
  };

  const renderTable = () => {
    // Replace this with your actual table data based on the selected city
    const tableData = [
      { route: "Route 1", sales: 50, revenue: 1000 },
      { route: "Route 2", sales: 30, revenue: 700 },
      // Add more rows as needed
    ];

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
              <td>{row.route}</td>
              <td>{row.sales}</td>
              <td>{row.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="tabbed-table-container">
      <div className="tabs">{renderTabs()}</div>
      <div className="table">{renderTable()}</div>
    </div>
  );
};

export default TabbedTable;
