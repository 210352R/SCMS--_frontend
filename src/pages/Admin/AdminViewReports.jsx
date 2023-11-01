import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
//import "./AdminViewReports.css";
import CityDialog from "./CityTableComp";
import axios from "axios";
import OrderList from "./getOrderList";
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

  

  const WorkingHoursTable = () => {

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

 
  return (
    <AddminDashboard id={id}>
      <nav class='reportNav'>
        <ul>
          <li>
            <a href="#revenue_and_sales">Revenue and Sales</a>
          </li>
          <li>
             <a href="#city_sales">City Sales</a>
          </li>
          <li>
            <a href="#work_hours">Driver Shifts</a>
          </li>
          <li>
             <a href="#truck_hours">Truck Utilization</a>
          </li>
          <li>
            <a href="#cust_orders">Customer Order Summary</a>
          </li>
        </ul>
      </nav>


      <div>
        <h1 className="header1">Sales Report - Year {selectedYear}</h1>
        <select
          className="select-list"
          value={selectedYear}
          onChange={handleYearChange}
        >
          {/* <option value="Select Year">Select Year</option> */}
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          {/* Add more years as needed */}
        </select>


        <div className="one-line" id='revenue_and_sales'>
          <div className="dialog-box-chart">
            <h3 className="header3">Quaterly Revenue</h3>
            <div className="barchart">
              <BarChart selectedYear={selectedYear} />
            </div>
          </div>

          <div className="dialog-box-chart">
            <h3 className="header3">Items With Most Sales</h3>
            <div className="pieChart">
              <PieChart selectedYear={selectedYear} />
            </div>
          </div>
        </div>

        <div className="dialog-box">
        <h2 className="header2"  id='city_sales'>Sales based cities</h2>
          <CityDialog selectedYear={selectedYear} />
        </div>
  

        <section id='work_hours'>
        <div className="dialog-box">
          <h2 className="header2" >Working Hours of Drivers and assistants</h2>          
          <WorkingHoursTable />
        </div>
        </section>

        <section >
        <div className="dialog-box">
          <h2 className="header2 " id='truck_hours'>Trucks Used Hours</h2>          
          <TruckHoursTable />
        </div>
        </section>

        <section id='cust_orders'>
        <OrderList selectedYear={selectedYear} />
        </section>

      </div>
    </AddminDashboard>
  );
}
export default ViewReport;
