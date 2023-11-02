import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "../styles/HomePage.css";
import Navbar from "../components/Navbar";
import Calender from "../components/Calender";
import OrderCard from "../components/cards/OrderCard";
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

// Add style for animation -------------------------------------------

const Title = styled.h2`
  font-size: 70px;
  font-weight: 600;
`;

const Word = styled(motion.span)`
  display: inline-block;
  margin-right: 0.25em;
  white-space: nowrap;
`;

const Character = styled(motion.span)`
  display: inline-block;
  margin-right: -0.05em;
`;

// --------------------------------------------------------------------------------

export default function HomePage() {
  //character animation -----
  const text = "Supply Chain Management System"; // This would normally be passed into this component as a prop!

  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };
  // -----------------------------------------------------------------------------------------------

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
                  {/* <motion.div
                    className="App"
                    initial="hidden"
                    animate={"visible"}
                    variants={container} // Animation properties when component appears
                  >
                    <motion.h1 variants={itemVariants} className="topic">
                      {" "}
                      Supply Chain Management System{" "}
                    </motion.h1>
                  </motion.div> */}
                  <div>
                    <Title aria-label={text} role="heading">
                      {text.split(" ").map((word, index) => {
                        return (
                          <Word
                            ref={ref}
                            aria-hidden="true"
                            key={index}
                            initial="hidden"
                            animate={ctrls}
                            variants={wordAnimation}
                            transition={{
                              delayChildren: index * 0.25,
                              staggerChildren: 0.05,
                            }}
                          >
                            {word.split("").map((character, index) => {
                              return (
                                <Character
                                  aria-hidden="true"
                                  key={index}
                                  variants={characterAnimation}
                                >
                                  {character}
                                </Character>
                              );
                            })}
                          </Word>
                        );
                      })}
                    </Title>
                  </div>
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
