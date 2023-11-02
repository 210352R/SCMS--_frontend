import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./orderCard.css";

export default function OrderCard({ name, city, address, store_id }) {
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
          <Link to={`/storePage/${store_id}`} class="btn btn-primary">
            View Store
          </Link>
        </div>
      </div>
    </>
  );
}
