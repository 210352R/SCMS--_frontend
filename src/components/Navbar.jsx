import React from "react";
import "../styles/NavBarStyles.css";
import { Link } from "react-router-dom";

export default function Navbar({ about, footer }) {
  return (
    <>
      <div className="container-fluid ">
        <nav class="nav">
          <div class="container">
            {/* <div class="logo">
              <img
                src="https://previews.123rf.com/images/dizanna/dizanna2111/dizanna211100434/176613198-scm-supply-chain-management-acronym-business-concept-background.jpg"
                className="rounded-circle "
                style={{ width: "45px" }}
              />
            </div> */}
            <div id="mainListDiv" class="main_list">
              <ul class="navlinks">
                <li>
                  <a href={about}>About</a>
                </li>
                <li>
                  <Link to="/adminLogin">Admin</Link>
                </li>
                <li>
                  <Link to="/coordinaterLogin">CoOrdinater</Link>
                </li>
                <li>
                  <a href={footer}>Contact</a>
                </li>
                <li>
                  <div class="logo">
                    <img
                      src="https://previews.123rf.com/images/dizanna/dizanna2111/dizanna211100434/176613198-scm-supply-chain-management-acronym-business-concept-background.jpg"
                      className="rounded-circle "
                      style={{ width: "80px" }}
                    />
                  </div>
                </li>
              </ul>
            </div>
            <span class="navTrigger">
              <i></i>
              <i></i>
              <i></i>
            </span>
          </div>
        </nav>
      </div>
    </>
  );
}
