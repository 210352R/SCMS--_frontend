import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import "./AdminViewReports.css";
import CityDialog from "./CityTableComp";
import axios from "axios";

import PieChart from "./PieChart";

import { Link, useParams } from "react-router-dom";
import AddminDashboard from "./AddminDashboard";

function ViewReport() {
  const { id } = useParams();
  // year eka-----
  const [selectedYear, setSelectedYear] = useState("2023");

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  //city eka select karanawa -------
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
    const [quaterArr, setQuaterArr] = useState([0, 0, 0, 0]);

    useEffect(() => {
      const ctx = barChartRef.current.getContext("2d");

      axios
        .get(`http://localhost:8000/report/getQuartlaryReport/${selectedYear}`)
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
      console.log("Array : ", quaterArr);
      // Modify the data based on the selected year
      const data = {
        labels: ["Quater 1", "Quater 2", "Quater 3", "Quater 4"],
        datasets: [
          {
            label: "revenue",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 2,
            hoverBorderColor: "rgba(75, 192, 192, 1)",
            data: quaterArr,
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

  // const PieChart = ({ selectedYear }) => {
  //   const pieChartRef = useRef(null);
  //   const [labelArray, setLabelArray] = useState([]);
  //   const [dataArray, setDataArray] = useState([]);

  //   useEffect(() => {
  //     const ctx = pieChartRef.current.getContext("2d");
  //     axios
  //       .get(
  //         `http://localhost:8000/report/getItemsWithMostSales/${selectedYear}`
  //       )
  //       .then((res) => {
  //         console.log("dataset Eka : ", res.data);
  //         if (res.data.sucess) {
  //           console.log("In ==", res.data.data);
  //           let arr1 = res.data?.data?.map((data) => {
  //             console.log("---->>>", data.name);
  //             return data?.name;
  //           });
  //           console.log("<<<<<<<<<<", arr1);
  //           setLabelArray(arr1);

  //           let arr2 = res.data?.data?.map((data) => data?.total_quantity);
  //           console.log("<<<<<<<<<<", arr2);
  //           setDataArray(arr2);
  //         }
  //       })
  //       .catch((err) => {
  //         console.log("Error : ", err);
  //       });

  //     // Modify the data based on the selected year
  //     const data = {
  //       labels: labelArray,
  //       datasets: [
  //         {
  //           data: dataArray,
  //           backgroundColor: [
  //             "rgba(255, 99, 132, 0.6)",
  //             "rgba(54, 162, 235, 0.6)",
  //             "rgba(255, 206, 86, 0.6)",
  //             "rgba(75, 192, 192, 0.6)",
  //             "rgba(153, 102, 255, 0.6)",
  //           ],
  //           hoverBackgroundColor: [
  //             "rgba(255, 99, 132, 0.8)",
  //             "rgba(54, 162, 235, 0.8)",
  //             "rgba(255, 206, 86, 0.8)",
  //             "rgba(75, 192, 192, 0.8)",
  //             "rgba(153, 102, 255, 0.8)",
  //           ],
  //         },
  //       ],
  //     };

  //     const existingPieChart = pieChartRef.current.chart;

  //     if (existingPieChart) {
  //       existingPieChart.destroy();
  //     }

  //     const newPieChart = new Chart(ctx, {
  //       type: "pie",
  //       data: data,
  //       options: {
  //         maintainAspectRatio: false,
  //         responsive: true,
  //       },
  //     });
  //     pieChartRef.current.chart = newPieChart;
  //   }, [selectedYear]);

  //   return <canvas ref={pieChartRef} />;
  // };

  const WorkingHoursTable = () => {
    // const workersData = [
    //   { id: 1, name: "John", jobTitle: "Driver", workedHours: "23 hrs" },
    //   // Add more worker data as needed
    // ];

    const [workersData, setWorkersData] = useState([{}]);

    useEffect(() => {
      console.log(
        "------------ Helloooooooooooo work hours Employeee  --- ---- -- "
      );
      axios
        .get(
          `http://localhost:8000/report/getWorkHoursOfEmployees/${selectedYear}`
        )
        .then((res) => {
          if (res.data.sucess) {
            console.log("Innerr ----------------------------------");
            console.log(res.data.data);
            setWorkersData(res.data?.data);
            //setQuaterArr(res.data?.data);
          }
        })
        .catch((err) => {
          console.log("Error : ", err);
        });
    }, [selectedYear]);

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
              <tr>
                <td>{worker.username}</td>
                <td>{worker.type}</td>
                <td>{worker.tot_time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const TruckHoursTable = () => {
    // Sample truck data array
    // const truckData = [
    //   { id: 1, truckId: "TRK001", model: "Model X", usedHours: 45 },
    //   { id: 2, truckId: "TRK002", model: "Model Y", usedHours: 30 },
    //   // Add more truck data as needed
    // ];

    const [truckData, setTruckData] = useState([{}]);

    useEffect(() => {
      console.log(
        "------------ Helloooooooooooo work hours Employeee  --- ---- -- "
      );
      axios
        .get(
          `http://localhost:8000/report/getWorkHoursOfTrucks/${selectedYear}`
        )
        .then((res) => {
          if (res.data.sucess) {
            console.log("Innerr ----------------------------------");
            console.log(res.data.data);
            setTruckData(res.data?.data);
            //setQuaterArr(res.data?.data);
          }
        })
        .catch((err) => {
          console.log("Error : ", err);
        });
    }, [selectedYear]);

    return (
      <div className="truck-hours-container">
        <table className="truck-hours-table">
          <thead>
            <tr>
              <th>Truck ID</th>
              <th>Year</th>
              <th>Used Hours</th>
            </tr>
          </thead>
          <tbody>
            {truckData.map((truck) => (
              <tr>
                <td>{truck?.truck_id}</td>
                <td>{truck?.year}</td>
                <td>{`${truck?.total_work_hours} hrs`}</td>
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
    <AddminDashboard id={id}>
      <div>
        <h1 className="header1">Sales Report</h1>
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
            <h3 className="header3">Quaterly Revenue</h3>
            <div className="barchart">
              <BarChart selectedYear={selectedYear} />
            </div>
          </div>

          <div className="dialog-box">
            <h3 className="header3">Items With Most Sales</h3>
            <div className="pieChart">
              <PieChart selectedYear={selectedYear} />
            </div>
          </div>
        </div>

        <h2 className="header2">Sales based cities</h2>
        <div className="dialog-box">
          <CityDialog selectedYear={selectedYear} />
        </div>

        <h2 className="header2">Working Hours of Drivers and assistants</h2>
        <div className="dialog-box">
          <WorkingHoursTable />
        </div>

        <h2 className="header2 ">Trucks Used Hours</h2>
        <div className="dialog-box">
          <TruckHoursTable />
        </div>
        <h2 className="header2">View Customer Orders</h2>
        <OrderButton />
      </div>
    </AddminDashboard>
  );
}
export default ViewReport;
