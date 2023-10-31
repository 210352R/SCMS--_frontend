import React from "react";
import HomeCards from "./HomeCards";
import HomeCard2 from "./HomeCard2";
import HomeCard3 from "./HomeCard3";

export default function HomeCardsContainer() {
  const containerStyle = {
    backgroundColor: '#fdeab5',
    color: 'black',
    }
  return (
    <div className="container-fluid mt-5" style ={containerStyle} >
      <h2>What We Offer</h2>
      <div className="row" >
        <div className="col-12 col-lg-4">
          <HomeCards />
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