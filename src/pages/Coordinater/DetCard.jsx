import React from "react";

export default function DetCard({ Topic, subTopic, details, command, link }) {
  return (
    <div className="overflow-hidden ">
      <div
        class="card m-md-3"
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: "#63676e",
          color: "#ccdaed",
        }}
      >
        <div class="card-body">
          <h5 class="card-title">{Topic}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{subTopic}</h6>
          <p class="card-text">{details}</p>
          <a href={link} class="card-link">
            {command}
          </a>
        </div>
      </div>
    </div>
  );
}
