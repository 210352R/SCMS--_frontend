import React from "react";

import "./orderCard.css";

export default function OrderCard() {
  return (
    <>
      <div class="card allContainer" style={{ width: "18rem" }}>
        <img
          src="https://static.pexels.com/photos/7096/people-woman-coffee-meeting.jpg"
          class="card-img-top img-dec"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}