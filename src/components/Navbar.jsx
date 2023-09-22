import React from "react";
import "../styles/NavBarStyles.css";
import { Link } from "react-router-dom";

export default function Navbar({ about, footer }) {
  return (
    <>
      <div className="container-fluid ">
        <nav class="nav">
          <div class="container">
            <div class="logo">
              <a href="#">Your Logo</a>
            </div>
            <div id="mainListDiv" class="main_list">
              <ul class="navlinks">
                <li>
                  <a href={about}>About</a>
                </li>
                <li>
                  <a href="#">Portfolio</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href={footer}>Contact</a>
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
