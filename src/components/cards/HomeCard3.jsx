import React from "react";
import "./homeCard.css";
import { blue, red, yellow } from "@mui/material/colors";
import { withTheme } from "@emotion/react";

export default function HomeCard3() {
  return (
    <>
      <div class="card cardmy mainConatiner">
        <div
          class="bg-image hover-overlay ripple"
          data-mdb-ripple-color="light"
        >
          <img
            src="https://media.istockphoto.com/id/1391824165/photo/smart-augmented-reality-ar-warehouse-management-system.jpg?s=2048x2048&w=is&k=20&c=z3yYTzB_B7IZIMkVEAEfwmVGrESS6w27ULh1ze3NpyU="
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
          <h5 class="card-title cardmy-title">Capacity Allocation</h5>
          <p class="card-text">
          We efficiently allocate and supervise train trip capacity, ensuring streamlined logistics and optimal resource utilization in our operations.
          </p>
        </div>
      </div>
    </>
  );
}