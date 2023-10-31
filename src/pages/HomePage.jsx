import React from "react";
import { Link } from "react-router-dom";

import "../styles/HomePage.css";
import Navbar from "../components/Navbar";
import Calender from "../components/Calender";
import OrderCard from "../components/cards/OrderCard";
import HomeCards from "../components/cards/HomeCards";
import HomeCardsContainer from "../components/cards/HomeCardsContainer";
import Footer from "../components/HomeFooter/Footer";

export default function HomePage() {
  return (
    <>
      <div>
        <div>
          <div className="homeConatiner All">
            <div className="overlay"></div>
            <div className="textFeild">
              <div className="navBarWrapper">
                {/* Nav Bar eka methana thibbe ---  */}
                <Navbar about={"#aboutSection"} footer={"#footer"} />
              </div>
              <div className="main">
                <div style={{ alignSelf: "center" }} className="container">
                  <h1 className="topic"> Supply Chain Management System </h1>
                  <div
                    style={{
                      alignSelf: "center",
                      width: "800px",
                      textAlign: "left",
                    }}
                  >
                    <p>
                    Streamlining the journey of goods from production to nationwide delivery through an efficient railway-based distribution network.
                    </p>
                  </div>
                  <button className="btn btn-primary btn-lg  transparent-button hoverable">
                    <Link
                      to="/customerLogin"
                      className="link-no-decoration"
                      style={{ color: "white" }}
                    >
                      Customer Login
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="aboutSection" className="about-container bg-light">
        <HomeCardsContainer />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}