import React, { useEffect, useState } from "react";
import "../../styles/sideMenu.css"; // Import the external CSS file
import "../../styles/CustomerDashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typewriter from "typewriter-effect";

import {
  faHome,
  faShoppingCart,
  faList,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";

// import { Link } from "theme-ui";

import { Link, useParams } from "react-router-dom";
import axios from "axios";

import Cookies from "js-cookie";

export default function CustomerDashboard() {
  // Get customer id and fetch details ---
  const { id } = useParams();
  const [customer, setCustomer] = useState([{}]);
  const [orderList, setOrderList] = useState([{}]);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  console.log("Token Ek Mulinma: ", token);

  console.log("Token : ", token);
  //Create an Axios instance with custom headers
  const axiosInstance = axios.create({
    headers: {
      Authorization: `Bearer ${token}`, // Set the token in the 'Authorization' header
    },
  });

  useEffect(() => {
    console.log(id);
    axiosInstance
      .get(`http://localhost:8000/customer/get/${id}`)
      .then((res) => {
        if (res.data.sucess) {
          console.log("Added successfull -- ", res.data);
          setCustomer(res.data.customer);
          console.log(res.data.customer);
          axios
            .get(`http://localhost:8000/order/get/${id}`)
            .then((res) => {
              console.log("Running ---- ");
              console.log("Order ---- ", res.data);
              if (res.data.sucess) {
                setOrderList(res.data.orders);
              }
            })
            .catch((err) => {
              console.log("Error ---- ", err);
            });
          console.log("Running ---- ");
        } else {
          console.log("Error");
          console.log(res.data.message);
          if (
            (res.data.message === "Access Denied") |
            (res.data.message === "Prohibidden")
          ) {
            console.log("Access Denied 222222");

            alert("Login First");
            navigate("/customerLogin");
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log("Order ek : ", orderList);
  console.log("Token Ek : ", token);

  const signOut = () => {
    localStorage.removeItem("token");
    console.log("logged out");
    navigate("/customerLogin");
    console.log("Token Ek ain kalama : ", token);
  };

  console.log("customer : ", customer);

  return (
    <div>
      <div className="row flex-nowrap">
        <div className="col-2 col-md-2 px-sm-2 px-0 bg-dark br-rd">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            {/* User Profile Dropdown */}
            <div className="dropdown pb-4">
              <a
                href="#"
                className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={"http://localhost:8000/images/" + customer[0].image}
                  alt="hugenerd"
                  width="30"
                  height="30"
                  className="rounded-circle"
                />
                <span className="d-none d-sm-inline ms-2 px-2">
                  {customer[0].first_name + " " + customer[0].last_name}
                </span>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-dark text-small shadow"
                aria-labelledby="dropdownUser1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    New project...
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button className="dropdown-item" onClick={signOut}>
                    Sign out
                  </button>
                </li>
              </ul>
            </div>

            {/* Dashboard Link */}
            <a
              href="/"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-3 font-weight-bold align-self-center d-none d-sm-inline center">
                Dashboard
              </span>
            </a>

            {/* Sidebar Navigation */}
            <ul
              className=" nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              {/* Add your menu items here */}
              {/* Example menu item */}
              <li className="nav-item mt-3 mb-3">
                <a href="#" className="nav-link align-middle px-0 d-flex">
                  <FontAwesomeIcon
                    icon={faHome}
                    className="custom-icon fs-4 mx-1"
                    style={{ color: "white", fontSize: "15px" }}
                  />
                  <span className="ms-1 d-none d-sm-inline p-1">Home</span>
                </a>
              </li>
              <li className="nav-item mt-3 mb-3">
                <Link
                  to={`/addOrder/${id}`}
                  className="nav-link align-middle px-0 d-flex"
                >
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="custom-icon fs-4 mx-1"
                    style={{ color: "white", fontSize: "15px" }}
                  />
                  <span className="ms-1 d-none d-sm-inline p-1">
                    Add Order{" "}
                  </span>
                </Link>
              </li>
              <li className="nav-item mt-3 mb-3">
                <a href="#" className="nav-link align-middle px-0 d-flex  ">
                  <FontAwesomeIcon
                    icon={faList}
                    className="custom-icon fs-4 mx-1"
                    style={{ color: "white", fontSize: "15px" }}
                  />
                  <span className="ms-1 d-none d-sm-inline p-1">
                    View Orders
                  </span>
                </a>
              </li>
              <li className="nav-item mt-3 mb-3">
                <a
                  href="#kjhkjhh"
                  className="nav-link align-middle px-0 d-flex"
                >
                  <FontAwesomeIcon
                    icon={faComment}
                    className="custom-icon fs-4 mx-1 mx-1"
                    style={{ color: "white", fontSize: "15px" }}
                  />
                  <span className="ms-1 d-none d-sm-inline p-1">Comment</span>
                </a>
              </li>

              {/* Add more menu items as needed */}
            </ul>

            <hr />
          </div>
        </div>
        <div className="col py-3">
          <div className="container-fluid my-5 bg-light">
            <div className="row">
              <div className="col-lg-6">
                <button className="custom-btn btn btn-success">
                  <Link
                    to={`/addOrder/${id}`}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Add Order
                  </Link>
                </button>
              </div>
              <div className="col-md-6">
                <div className="up-right-side float-xl-right float-none">
                  <h1 className="welcome-text"> Welcome to SCMS PRO</h1>
                </div>
              </div>
            </div>
          </div>
          <section class="intro">
            <div class="gradient-custom-1 h-100">
              <div class="mask d-flex align-items-center h-100">
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-12">
                      <div class="table-responsive bg-white">
                        <table class="table mb-0">
                          <thead>
                            <tr>
                              <th scope="col">OREDR ID</th>
                              <th scope="col">DATE</th>
                              <th scope="col">STORE</th>
                              <th scope="col">ROUTE ID</th>
                              <th scope="col">STATUS</th>
                            </tr>
                          </thead>
                          <tbody>
                            {orderList?.map((order) => {
                              return (
                                <tr>
                                  <th scope="row" className="row_style">
                                    <Link
                                      to={`/custorderdetails/${order?.order_id}`}
                                    >
                                      {order?.order_id}
                                    </Link>
                                  </th>
                                  <td>{order?.date}</td>
                                  <td>{order?.store_id}</td>
                                  <td>{order?.route_id}</td>
                                  <td>{order?.state}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div
            className="typeWriting"
            style={{
              marginTop: "25px",
              paddingLeft: "10px",
              fontFamily: "sans-serif",
              fontSize: 38,
              margin: 15,
            }}
          >
            <Typewriter
              options={{
                strings: [
                  "Hello Welcome ! ",
                  "Submit your Order soon .",
                  "Update your post again .",
                ],
                autoStart: true,
                delay: 40,
                loop: true,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
