import React from "react";
import "./homeCard.css";

export default function HomeCards() {
  return (
    <>
      <div class="card cardmy mainConatiner">
        <div
          class="bg-image hover-overlay ripple"
          data-mdb-ripple-color="light"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp"
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
          <h5 class="card-title cardmy-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </>
  );
}
