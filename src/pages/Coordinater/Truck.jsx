import data from "./truckdata.json";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import TruckDash from "./TruckDash";

export default function Truck() {
  const [addTruck, setAddTruck] = useState(false);
  const { username, storeId } = useParams();
  const [currentOrder, setCurrentOrder] = useState(null);
  const [orders, setOrders] = useState([{}]);
  const [truck, setTruck] = useState(null);
  const [driver, setDriver] = useState(null);
  const [aDriver, setADriver] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [trucksList, setTrucksList] = useState([]);

  const [routeId, setRouteId] = useState(null);

  const [route, setRoute] = useState(null);

  const [driverList, setDriverList] = useState([{}]);

  const [ADriverList, set_A_DriverList] = useState([{}]);

  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  const [title, setTitle] = useState("");

  const handleClose = () => setShow(false);

  useEffect(() => {
    if (addTruck) {
      axios
        .get(`http://localhost:8000/truckcoordinater/getRoute/${routeId}`)
        .then((resTrucks) => {
          if (resTrucks.data.sucess) {
            setRoute(resTrucks.data.routes[0]);
          }
        })
        .catch((error) => {
          console.error(error);
        });

      if (!date || !time) {
        console.log("khuifvhhfdhfdohfdhdf----------------------------");
        axios
          .get(`http://localhost:8000/truckcoordinater/getAllTrucks/${storeId}`)
          .then((resTrucks) => {
            if (resTrucks.data.sucess) {
              setTrucksList(resTrucks.data.truck);
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
      if (date && time) {
        axios
          .get(
            `http://localhost:8000/truckcoordinater/getValidAllTrucks/${date}/${time}/${routeId}/${storeId}`
          )
          .then((resTrucks) => {
            if (resTrucks.data.sucess) {
              setTrucksList(resTrucks.data.truck);
            }
          })
          .catch((error) => {
            console.error(error);
          });
        console.log(
          "kjsvbihfkfgjkhfjkhdfkfdhifhkfhifdhkjojjko  ---   ---  --- "
        );
        axios
          .get(
            `http://localhost:8000/truckcoordinater/getValidAllDrivers/${date}/${time}/${route?.max_time}`
          )
          .then((resTrucks) => {
            if (resTrucks.data.sucess) {
              setDriverList(resTrucks.data.result);
            }
          })
          .catch((error) => {
            console.error(error);
          });

        axios
          .get(
            `http://localhost:8000/truckcoordinater/getValidAll_A_Drivers/${date}/${time}/${route?.max_time}`
          )
          .then((resTrucks) => {
            if (resTrucks.data.sucess) {
              set_A_DriverList(resTrucks.data.result);
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }, [addTruck, date, time, routeId]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/truckcoordinater/getAllStoredOrders/${storeId}`
      )
      .then((res) => {
        console.log("Running ---- ");
        console.log("Order ---- ", res.data);
        if (res.data.sucess) {
          setOrders(res.data.orders);
        }
      })
      .catch((err) => {
        console.log("Error ---- ", err);
      });
    console.log("Running ---- ");
  }, []);

  console.log("Orders ---- ", orders);

  const handleAddTruckClick = (order) => {
    setCurrentOrder(order);
    setRouteId(order.route_id);
    setAddTruck(true);
  };

  const handleTruckChange = (event) => {
    if (event.target.value != -1) {
      setTruck(event.target.value);
    } else {
      setTruck(null);
    }
  };

  const handleDriverChange = (event) => {
    if (event.target.value != -1) {
      setDriver(event.target.value);
    } else {
      setDriver(null);
    }
  };

  const handleADriverChange = (event) => {
    if (event.target.value != -1) {
      setADriver(event.target.value);
    } else {
      setADriver(null);
    }
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleSubmit = () => {
    /*implement the submit function here*/
    // alert(
    //   `${currentOrder?.order_id}  ${routeId} ${date} , ${time} ${truck} ${driver} ${aDriver}`
    // );
    axios
      .post(`http://localhost:8000/truckcoordinater/addTruck`, {
        order_id: currentOrder?.order_id,
        truck_id: truck,
        driver_id: driver,
        a_driver_id: aDriver,
        date: date,
        time: time,
        route_id: routeId,
      })
      .then((res) => {
        console.log("Running ---- ");
        console.log("Order wade goda---- ", res.data);
        alert("Wade gods -----");

        setTitle("--- Truck Added Successfully ---");
        setMessage(
          `${currentOrder?.order_id}  ${routeId} ${date} , ${time} ${truck} ${driver} ${aDriver} \n Added Successfully`
        );
        setShow(true);
        setAddTruck(false);
      })
      .catch((err) => {
        setTitle("--- Truck Added Unsuccessfully ---");
        setMessage(`-- There is an Error ---`);
        setShow(true);

        console.log("Error ---- ", err);
      });
    // setAddTruck(false);
    // setTitle("--- Truck Added Successfully ---");
    // setMessage(
    //   `${currentOrder?.order_id}  ${routeId} ${date} , ${time} ${truck} ${driver} ${aDriver} \n Added Successfully`
    // );
    // setShow(true);
  };

  const renderDrivers = driverList.map((driver) => {
    return <option>{`${driver.userName}`}</option>;
  });

  const renderADrivers = ADriverList.map((Adriver) => {
    return <option>{`${Adriver.userName}`}</option>;
  });

  const renderTrucks = trucksList.map((truck) => {
    return <option key={truck.id}>{`${truck.truck_id}`}</option>;
  });

  const renderOrders = orders?.map((order) => (
    <tr key={order.order_id}>
      <th scope="row" className="p-2 text-center align-middle">
        {order.order_id}
      </th>
      <td className="pd-2 text-center align-middle">{order.date}</td>
      <td className="p-2 text-center align-middle">{order.route_id}</td>
      <td className="p-2 text-center align-middle">{order.delivery_address}</td>
      <td className="p-2 text-center align-middle">
        <button
          className="btn btn-link text-primary border-1"
          onClick={() => handleAddTruckClick(order)}
        >
          Add truck
        </button>
      </td>
    </tr>
  ));

  console.log("kbsfhbfsi : ", trucksList);

  console.log("Route : ", route);

  console.log("Driver List : ", driverList);

  console.log("Store ID ----- ", storeId);

  return (
    <div>
      {addTruck ? (
        <TruckDash username={username} storeId={storeId}>
          <div className="border border-secondary col-md-6 col-12 h-auto p-4 text-white mt-4 rounded mx-auto bg-dark">
            <h3 className="text-success text-lg">Order ID : </h3>

            <div className="form-group mt-2">
              <label className="text-white text-sm" htmlFor="date">
                Select Date
              </label>
              <input
                type="date"
                className="form-control bg-secondary text-white p-2"
                id="date"
                required
                onChange={handleDateChange}
                value={date}
              />
            </div>

            <div className="form-group mt-2">
              <label className="text-white text-sm" htmlFor="time">
                Select Time
              </label>
              <input
                type="time"
                className="form-control bg-secondary text-white p-2"
                id="time"
                required
                onChange={handleTimeChange}
                value={time}
              />
            </div>

            <div className="form-group mt-2">
              <label className="text-white text-left" htmlFor="trucks">
                Select Truck
              </label>
              <select
                className="form-control bg-secondary text-white p-2"
                id="trucks"
                required
                onChange={handleTruckChange}
                value={truck}
              >
                <option value={-1}>--Select Truck--</option>
                {renderTrucks}
              </select>
            </div>

            <div className="form-group mt-2">
              <label className="text-white text-left" htmlFor="drivers">
                Select Driver
              </label>
              <select
                className="form-control bg-secondary text-white p-2"
                id="drivers"
                required
                onChange={handleDriverChange}
                value={driver}
              >
                <option value={-1}>--Select Driver--</option>
                {renderDrivers}
              </select>
            </div>

            <div className="form-group mt-2">
              <label className="text-white text-left" htmlFor="Adrivers">
                Select Assistant Driver
              </label>
              <select
                className="form-control bg-secondary text-white p-2"
                id="Adrivers"
                required
                onChange={handleADriverChange}
                value={aDriver}
              >
                <option value={-1}>--Select Assistant Driver--</option>
                {renderADrivers}
              </select>
            </div>

            <div className="text-center mt-3">
              <button
                className="btn btn-primary p-2"
                onClick={handleSubmit}
                style={{ fontSize: "smaller" }}
              >
                Submit
              </button>
            </div>
          </div>
          {show && (
            <div className="my-5">
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title> {title} </Modal.Title>
                </Modal.Header>
                <Modal.Body>{message}</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          )}
        </TruckDash>
      ) : (
        //   <table class="table table-hover ">
        //   <thead>
        //     <tr className="">
        //       <th scope="col">Order ID</th>
        //       <th scope="col">Date</th>
        //       <th scope="col">Store ID</th>
        //       <th scope="col">Truck ID</th>
        //     </tr>
        //   </thead>
        //   <tbody>
        //     {renderOrders}
        //   </tbody>
        // </table>
        <TruckDash username={username} storeId={storeId}>
          <div className=" col-md-8 col-12 h-auto p-4  mt-4  mx-auto ">
            <table className="table  col-md-9 col-12 mx-auto text-white">
              <thead>
                <tr>
                  <th scope="col" className="text-center">
                    Order ID
                  </th>
                  <th scope="col" className="text-center">
                    Date
                  </th>

                  <th scope="col" className="text-center">
                    Route ID
                  </th>
                  <th scope="col" className="text-center">
                    Delivery Address
                  </th>
                  <th scope="col" className="text-center">
                    Truck ID
                  </th>
                </tr>
              </thead>
              <tbody>{renderOrders}</tbody>
            </table>
          </div>
        </TruckDash>
      )}
    </div>
  );
}
