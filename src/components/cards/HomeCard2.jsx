import React from "react";
import "./homeCard.css";
import { blue, red, yellow } from "@mui/material/colors";
import { withTheme } from "@emotion/react";

export default function HomeCard2() {
  return (
    <>
      <div class="card cardmy mainConatiner">
        <div
          class="bg-image hover-overlay ripple"
          data-mdb-ripple-color="light"
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1661963812996-d5d24d1a7fcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            class="img-fluid"
          />
          <a href="#!">
            <div
              class="mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
            ></div>
          </a>
        </div>
        <div class="card-body ">
          <h5 class="card-title cardmy-title">Store and Delivery Management</h5>
          <p class="card-text">
          we handle stores and optimize delivery routes for maximum efficiency in our operations.
          </p>
        </div>
      </div>
    </>
  );
}