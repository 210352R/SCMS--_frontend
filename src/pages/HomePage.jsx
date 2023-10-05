import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "../styles/HomePage.css";
import Navbar from "../components/Navbar";
import Calender from "../components/Calender";
import OrderCard from "../components/cards/OrderCard";
import HomeCards from "../components/cards/HomeCards";
import HomeCardsContainer from "../components/cards/HomeCardsContainer";
import Footer from "../components/HomeFooter/Footer";

// Add animations  --
const placeholderText = [
  { type: "heading1", text: "Framer Motion" },
  { type: "heading2", text: "Animating responsive text!" },
];

const container = {
  visible: {
    transition: {
      staggerChildren: 0.025,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
      duration: 3,
    },
  },
};

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
                  <motion.div
                    className="App"
                    initial="hidden"
                    animate={"visible"}
                    variants={container} // Animation properties when component appears
                  >
                    <motion.h1 variants={itemVariants} className="topic">
                      {" "}
                      Supply Chain Management System{" "}
                    </motion.h1>
                  </motion.div>
                  <div
                    style={{
                      alignSelf: "center",
                      width: "800px",
                      textAlign: "center",
                    }}
                  >
                    <p>
                      Leading weather web site Ever simply dummy text of the
                      printing and typesetting industry. Lorem Ipsum has been
                      the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a gal
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
