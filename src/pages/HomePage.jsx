import React from "react";
import { Link } from "react-router-dom";

import "../styles/HomePage.css";
import Navbar from "../components/Navbar";
import Calender from "../components/Calender";

export default function HomePage() {
  return (
    <>
      <div>
        <div className="homeConatiner All">
          <div className="overlay"></div>
          <div className="textFeild">
            <div className="navBarWrapper">
              {/* Nav Bar eka methana thibbe ---  */}
              <Navbar />
            </div>
            <div className="main">
              <div>
                <h1 className="topic"> Supply Chain Management System </h1>
                <div class="note note-light mb-3">
                  <p className="desc">Leading weather web site Ever </p>
                </div>
                <button className="btn btn-primary btn-lg  transparent-button hoverable">
                  <Link to="/customerLogin" className="link-no-decoration">
                    Customer Login
                  </Link>
                </button>

                {/* <button
                className="btn btn-primary btn-lg  transparent-button hoverable mx-3"
                onClick={signInWithFacebook}
              >
                Sign Up With FaceBook
              </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="aboutSecction" className="about-container bg-dark "></div>
    </>
  );
}
