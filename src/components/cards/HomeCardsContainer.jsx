import React from "react";
import HomeCard1 from "./HomeCard1";
import HomeCard2 from "./HomeCard2";
import HomeCard3 from "./HomeCard3";

export default function HomeCardsContainer() {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-12 col-lg-4">
          <HomeCard1 />
        </div>
        <div className="col-lg-4">
          <HomeCard2 />
        </div>
        <div className="col-lg-4">
          <HomeCard3 />
        </div>
      </div>
    </div>
  );
}
