import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import "./AdminViewReports.css";
import CityDialog from "./CityTableComp";

function ViewReport() {
  const [selectedYear, setSelectedYear] = useState("2023"); // Initial selected year

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const [selectedCity, setSelectedCity] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleCityClick = (city) => {
    setSelectedCity(city);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const cities = ["City A", "City B", "City C"];

  const BarChart = ({ selectedYear }) => {
    const barChartRef = useRef(null);

    useEffect(() => {
      const ctx = barChartRef.current.getContext("2d");

      // Bar chart eka -------------------------------------------
      // Modify the data based on the selected year
      const data = {
        labels: ["Quater 1", "Quater 2", "Quater 3", "Quater 4"],
        datasets: [
          {
            label: "revenue",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 2,
            hoverBorderColor: "rgba(75, 192, 192, 1)",
            data: [23, 34, 56, 76], // ena data tika danna ----------
          },
        ],
      };

      const existingBarChart = barChartRef.current.chart;

      if (existingBarChart) {
        existingBarChart.destroy();
      }

      const newBarChart = new Chart(ctx, {
        type: "bar",
        data: data,
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      barChartRef.current.chart = newBarChart;
    }, [selectedYear]);

    return <canvas ref={barChartRef} />;
  };

  const PieChart = ({ selectedYear }) => {
    const pieChartRef = useRef(null);

    useEffect(() => {
      const ctx = pieChartRef.current.getContext("2d");

      // Modify the data based on the selected year
      const data = {
        labels: ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"], //most sales products tika danna ----------
        datasets: [
          {
            data: [12, 19, 3, 5, 3], // kochchara sales da kiyanaa eka ----------------------
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
    }, [selectedYear]);

    return <canvas ref={pieChartRef} />;
  };

  const WorkingHoursTable = () => {
    // working Hours ------------
    const workersData = [
      { id: 1, name: "John", jobTitle: "Driver", workedHours: "23 hrs" },
      // Add more worker data as needed
    ];

    return (
      <div className="working-hours-container">
        <table className="working-hours-table">
          <thead>
            <tr>
              <th>Worker</th>
              <th>Job Title</th>
              <th>Worked Hours</th>
            </tr>
          </thead>
          <tbody>
            {workersData.map((worker) => (
              <tr key={worker.id}>
                <td>{worker.name}</td>
                <td>{worker.jobTitle}</td>
                <td>{worker.workedHours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const TruckHoursTable = () => {
    // Sample truck data array-------------------------------
    const truckData = [
      { id: 1, truckId: "TRK001", model: "Model X", usedHours: 45 },
      { id: 2, truckId: "TRK002", model: "Model Y", usedHours: 30 },
      // Add more truck data as needed
    ];

    return (
      <div className="truck-hours-container">
        <table className="truck-hours-table">
          <thead>
            <tr>
              <th>Truck ID</th>
              <th>Model</th>
              <th>Used Hours</th>
            </tr>
          </thead>
          <tbody>
            {truckData.map((truck) => (
              <tr key={truck.id}>
                <td>{truck.truckId}</td>
                <td>{truck.model}</td>
                <td>{`${truck.usedHours} hrs`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const OrderButton = () => {
    const [customerId, setCustomerId] = useState("");
    const [customerDetails, setCustomerDetails] = useState(null); // Define customerDetails state
    const [showDialog, setShowDialog] = useState(false);

    const handleCustomerIdChange = (e) => {
      setCustomerId(e.target.value);
    };

    const handleViewOrdersClick = async () => {
      try {
        // Replace the URL with your actual API endpoint for fetching customer details
        const response = await fetch(
          `https://api.example.com/customers/${customerId}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch customer details");
        }

        const data = await response.json();

        // Assuming the response structure is { name, email, orders }
        setCustomerDetails(data);

        // Show the dialog
        setShowDialog(true);
      } catch (error) {
        console.error("Error fetching customer details:", error.message);
      }
    };

    const handleDialogClose = () => {
      // Close the dialog
      setShowDialog(false);
    };

    return (
      <div>
        <input
          className="input-details"
          type="text"
          placeholder="Enter Customer ID"
          value={customerId}
          onChange={handleCustomerIdChange}
        />
        <button className="view-orders-button" onClick={handleViewOrdersClick}>
          View Customer Orders
        </button>

        {showDialog && customerDetails && (
          <div className="order-dialog">
            <h2>Customer Details</h2>
            <p>Name: {customerDetails.name}</p>
            <p>Email: {customerDetails.email}</p>
            <h3>Orders:</h3>
            <ul>
              {customerDetails.orders.map((order) => (
                <li key={order.orderId}>
                  Order ID: {order.orderId}, Product: {order.product}, Quantity:{" "}
                  {order.quantity}
                </li>
              ))}
            </ul>
            <button onClick={handleDialogClose}>Close</button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <h1>Sales Report</h1>
      <select
        className="select-list"
        value={selectedYear}
        onChange={handleYearChange}
      >
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        {/* Add more years as needed */}
      </select>

      <div className="one-line">
        <div className="dialog-box">
          <h3>Quaterly Revenue</h3>
          <div className="barchart">
            <BarChart selectedYear={selectedYear} />
          </div>
        </div>

        <div className="dialog-box">
          <h3>Items With Most Sales</h3>
          <div className="pieChart">
            <PieChart selectedYear={selectedYear} />
          </div>
        </div>
      </div>

      <h2>Sales based cities</h2>
      <div className="dialog-box">
        <CityDialog />
      </div>

      <h2>Working Hours of Drivers and assistants</h2>
      <div className="dialog-box">
        <WorkingHoursTable />
      </div>

      <h2>Trucks Used Hours</h2>
      <div className="dialog-box">
        <TruckHoursTable />
      </div>
      <h2>View Customer Orders</h2>
      <OrderButton />
    </div>
  );
}
export default ViewReport;
