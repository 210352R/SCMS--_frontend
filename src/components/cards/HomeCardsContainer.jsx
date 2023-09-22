import React from "react";
import HomeCards from "./HomeCards";

export default function HomeCardsContainer() {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-12 col-lg-4">
          <HomeCards />
        </div>
        <div className="col-lg-4">
          <HomeCards />
        </div>
        <div className="col-lg-4">
          <HomeCards />
        </div>
      </div>
    </div>
  );
}
