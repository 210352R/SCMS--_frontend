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

export default function CoordinaterDashboard() {
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
                <span className="d-none d-sm-inline mx-1">CO-ORDINATER</span>
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
              <span className="fs-4 d-none d-sm-inline center">Dashboard</span>
            </a>

            {/* Sidebar Navigation */}
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              {/* Add your menu items here */}
              {/* Example menu item */}
              <li className="nav-item">
                <a href="#" className="nav-link align-middle px-0 d-flex">
                  <FontAwesomeIcon
                    icon={faHome}
                    className="custom-icon fs-4 mx-1"
                    style={{ color: "white", fontSize: "15px" }}
                  />
                  <span className="ms-1 d-none d-sm-inline p-1">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link align-middle px-0 d-flex">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="custom-icon fs-4 mx-1"
                    style={{ color: "white", fontSize: "15px" }}
                  />
                  <span className="ms-1 d-none d-sm-inline p-1">Add Order</span>
                </a>
              </li>
              <li className="nav-item">
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
              <li className="nav-item">
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
      </div>
    </div>
  );
}
