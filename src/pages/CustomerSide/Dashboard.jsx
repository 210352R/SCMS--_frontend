import React from "react";
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
import { Link } from "theme-ui";

export default function Dashboard() {
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
                  src="https://github.com/mdo.png"
                  alt="hugenerd"
                  width="30"
                  height="30"
                  className="rounded-circle"
                />
                <span className="d-none d-sm-inline mx-1">Customer</span>
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
                  <a className="dropdown-item" href="#">
                    Sign out
                  </a>
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
                <a href="#" className="nav-link align-middle px-0 d-flex">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="custom-icon fs-4 mx-1"
                    style={{ color: "white", fontSize: "15px" }}
                  />
                  <span className="ms-1 d-none d-sm-inline p-1">Add Order</span>
                </a>
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
                    to="/add"
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
                              <th scope="col">EMPLOYEES</th>
                              <th scope="col">POSITION</th>
                              <th scope="col">CONTACTS</th>
                              <th scope="col">AGE</th>
                              <th scope="col">ADDRESS</th>
                              <th scope="col">SALARY</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row" className="row_style">
                                Tiger Nixon
                              </th>
                              <td>System Architect</td>
                              <td>tnixon12@example.com</td>
                              <td>61</td>
                              <td>Edinburgh</td>
                              <td>$320,800</td>
                            </tr>
                            <tr>
                              <th scope="row">Sonya Frost</th>
                              <td>Software Engineer</td>
                              <td>sfrost34@example.com</td>
                              <td>23</td>
                              <td>Edinburgh</td>
                              <td>$103,600</td>
                            </tr>
                            <tr>
                              <th scope="row">Jena Gaines</th>
                              <td>Office Manager</td>
                              <td>jgaines75@example.com</td>
                              <td>30</td>
                              <td>London</td>
                              <td>$90,560</td>
                            </tr>
                            <tr>
                              <th scope="row">Quinn Flynn</th>
                              <td>Support Lead</td>
                              <td>qflyn09@example.com</td>
                              <td>22</td>
                              <td>Edinburgh</td>
                              <td>$342,000</td>
                            </tr>
                            <tr>
                              <th scope="row">Charde Marshall</th>
                              <td>Regional Director</td>
                              <td>cmarshall28@example.com</td>
                              <td>36</td>
                              <td>San Francisco</td>
                              <td>$470,600</td>
                            </tr>
                            <tr>
                              <th scope="row">Haley Kennedy</th>
                              <td>Senior Marketing Designer</td>
                              <td>hkennedy63@example.com</td>
                              <td>43</td>
                              <td>London</td>
                              <td>$313,500</td>
                            </tr>
                            <tr>
                              <th scope="row">Tatyana Fitzpatrick</th>
                              <td>Regional Director</td>
                              <td>tfitzpatrick00@example.com</td>
                              <td>19</td>
                              <td>Warsaw</td>
                              <td>$385,750</td>
                            </tr>
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
