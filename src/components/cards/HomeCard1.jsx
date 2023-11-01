import React from "react";
import "./homeCard.css";
import { blue, red, yellow } from "@mui/material/colors";
import { withTheme } from "@emotion/react";

export default function HomeCards() {
  return (
    <>
      <div class="card cardmy mainConatiner">
        <div
          class="bg-image hover-overlay ripple"
          data-mdb-ripple-color="light"
        >
          <img
            src="https://media.istockphoto.com/id/470811618/photo/wagon-of-freight-train-with-containers.jpg?s=612x612&w=0&k=20&c=5QMaGbBVkYBy8s0o_18lR-jIB0VyO71RiUp300KsNoE="
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
          <h5 class="card-title cardmy-title">Railway Logistics</h5>
          <p class="card-text">
          Our railway logistics system optimizes routes and schedules for efficient, cost-effective transportation, ensuring timely delivery to key cities
          </p>
        </div>
      </div>
    </>
  );
}