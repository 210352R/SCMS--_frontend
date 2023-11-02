import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link, useParams } from "react-router-dom";

export default function Stores() {
  const { id } = useParams();

  const [cooData, setCooData] = useState([{}]);
  const [driverData, setDriverData] = useState([{}]);

  const [aDriverData, setADriverData] = useState([{}]);
  const [trucks, setTrucks] = useState([{}]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/store/getTruckCoo/${id}`)
      .then((res) => {
        if (res.data.sucess) {
          setCooData(res.data.data);
          console.log("Data : ", res.data.data);
        } else {
          console.log("Error : ", res.data.message);
        }
      })
      .catch((err) => {
        console.log("Error : ", err);
      });

    axios
      .get(`http://localhost:8000/store/getTrucks/${id}`)
      .then((res) => {
        if (res.data.sucess) {
          setTrucks(res.data.data);
          console.log("Data : ", res.data.data);
        } else {
          console.log("Error : ", res.data.message);
        }
      })
      .catch((err) => {
        console.log("Error : ", err);
      });

    axios
      .get(`http://localhost:8000/store/getDrivers/${id}`)
      .then((res) => {
        if (res.data.sucess) {
          setDriverData(res.data.data);
          console.log("Data : ", res.data.data);
        } else {
          console.log("Error : ", res.data.message);
        }
      })
      .catch((err) => {
        console.log("Error : ", err);
      });

    axios
      .get(`http://localhost:8000/store/getADrivers/${id}`)
      .then((res) => {
        if (res.data.sucess) {
          setADriverData(res.data.data);
          console.log("Data : ", res.data.data);
        } else {
          console.log("Error : ", res.data.message);
        }
      })
      .catch((err) => {
        console.log("Error : ", err);
      });
  }, []);

  //   const data = {
  //     drivers: [
  //       {
  //         name: "John Smith",
  //         NIC: "12345-67890-1234",
  //         id: 1,
  //         license_number: "DL12345",
  //       },
  //       {
  //         name: "Alice Johnson",
  //         NIC: "98765-43210-5678",
  //         id: 2,
  //         license_number: "DL67890",
  //       },
  //     ],
  //     assistant_drivers: [
  //       {
  //         name: "Mike Davis",
  //         NIC: "54321-12345-7890",
  //         id: 101,
  //         permit_id: "ADL12345",
  //       },
  //       {
  //         name: "Emily White",
  //         NIC: "09876-56789-4321",
  //         id: 102,
  //         permit_id: "ADL67890",
  //       },
  //     ],
  //     truck_coordinators: [
  //       {
  //         name: "David Brown",
  //         NIC: "56789-12345-9876",
  //         id: 201,
  //         coordinator_id: "TC12345",
  //       },
  //       {
  //         name: "Sarah Green",
  //         NIC: "34567-98765-3456",
  //         id: 202,
  //         coordinator_id: "TC67890",
  //       },
  //     ],
  //     trucks: [
  //       {
  //         brand: "Ford",
  //         model: "F-150",
  //         number_plate: "ABC-123",
  //         coordinator_id: 201,
  //       },
  //       {
  //         brand: "Chevrolet",
  //         model: "Silverado",
  //         number_plate: "XYZ-789",
  //         coordinator_id: 202,
  //       },
  //     ],
  //   };

  const [select, setSelect] = useState("driver");
  const handleSelect = (event) => {
    setSelect(event.target.value);
  };

  let renderedComponent;

  if (select === "driver") {
    renderedComponent = (
      <div
        className="d-flex justify-content-center  container text-white"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100 w-md-75">
          <h2>Driver Table</h2>
          <div className="table-responsive">
            <table className="table table-dark w-100 p-3 text-white">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>NIC</th>
                  <th>License</th>
                </tr>
              </thead>
              <tbody>
                {driverData.map((driver) => (
                  <tr>
                    <td>
                      {driver.first_name} {driver.last_name}
                    </td>
                    <td>{driver?.NIC}</td>
                    <td>{driver?.liciene_id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  } else if (select === "assistant driver") {
    renderedComponent = (
      <div
        className="d-flex justify-content-center container text-white"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100 w-md-75">
          <h2>Assistant Driver Table</h2>
          <div className="table-responsive">
            <table className="table table-dark w-100 p-3 text-white">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>NIC</th>
                  <th>Permit ID</th>
                </tr>
              </thead>
              <tbody>
                {aDriverData?.map((assistantDriver) => (
                  <tr>
                    <td>
                      {assistantDriver?.first_name} {assistantDriver?.last_name}
                    </td>
                    <td>{assistantDriver?.NIC}</td>
                    <td>{assistantDriver?.permit_id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  } else if (select === "truck coordinators") {
    renderedComponent = (
      <div
        className="d-flex justify-content-center  container text-white"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100 w-md-75">
          <h2>Assistant Driver Table</h2>
          <div className="table-responsive">
            <table className="table table-dark w-100 p-3 text-white">
              <thead>
                <tr>
                  <th>User Name</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Post</th>
                </tr>
              </thead>
              <tbody>
                {cooData?.map((coo) => (
                  <tr>
                    <td>{coo?.user_name} </td>
                    <td>
                      {coo?.first_name} {coo?.last_name}
                    </td>
                    <td>{coo?.email}</td>
                    <td>{coo?.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  } else if (select === "trucks") {
    renderedComponent = (
      <div
        className="d-flex justify-content-center  container "
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100 w-md-75">
          <h2>Trucks Table</h2>
          <div className="table-responsive text-white">
            <table className="table table-dark w-100 p-3 text-white">
              <thead>
                <tr>
                  <th>Truck Id</th>
                  <th>Model</th>
                  <th>Number Plate</th>
                </tr>
              </thead>
              <tbody>
                {trucks.map((truck) => (
                  <tr>
                    <td>{truck?.truck_id}</td>
                    <td>{truck?.Model}</td>
                    <td>{truck?.number_plate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center  container text-white"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100 w-lg-75">
        <div className="d-flex justify-content-center p-3">
          <button
            className={`btn btn-${
              select === "driver" ? "primary" : "secondary"
            } me-2`}
            onClick={() => handleSelect({ target: { value: "driver" } })}
          >
            Driver
          </button>
          <button
            className={`btn btn-${
              select === "assistant driver" ? "primary" : "secondary"
            } me-2`}
            onClick={() =>
              handleSelect({ target: { value: "assistant driver" } })
            }
          >
            Assistant Driver
          </button>
          <button
            className={`btn btn-${
              select === "truck coordinators" ? "primary" : "secondary"
            } me-2`}
            onClick={() =>
              handleSelect({ target: { value: "truck coordinators" } })
            }
          >
            Truck Coordinators
          </button>
          <button
            className={`btn btn-${
              select === "trucks" ? "primary" : "secondary"
            } me-2`}
            onClick={() => handleSelect({ target: { value: "trucks" } })}
          >
            Trucks
          </button>
        </div>
        {renderedComponent}
      </div>
    </div>
  );
}
