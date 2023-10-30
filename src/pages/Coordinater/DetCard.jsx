import React from "react";

export default function DetCard({ Topic, subTopic, details, store }) {
  return (
    <div className="overflow-hidden ">
      <div
        class="card m-md-3"
        style={{
          backgroundColor: "#63676e",
          color: "#FEFEFE",
        }}
      >
        <div class="card-body">
          <h5 class="card-title">{Topic}</h5>
          <h6 class="card-subtitle mb-2 text-bg-danger ">{subTopic}</h6>
          <p class="card-text">{details}</p>
          <h5 class="card-title">{store}</h5>
        </div>
      </div>
    </div>
  );
}
