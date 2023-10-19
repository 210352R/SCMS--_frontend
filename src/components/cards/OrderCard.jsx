import React from "react";

import "./orderCard.css";

export default function OrderCard({ name, city, address }) {
  return (
    <>
      <div class="card allContainer" style={{ width: "18rem" }}>
        <img
          src="https://static.pexels.com/photos/7096/people-woman-coffee-meeting.jpg"
          class="card-img-top img-dec"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">
            {city} {"- "} {name}
          </h5>
          <p class="card-text ">{address}</p>
          <a href="#" class="btn btn-primary">
            View Store
          </a>
        </div>
      </div>
    </>
  );
}
