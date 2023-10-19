import React, { useState, useEffect } from "react";
import Data from "../../data.json";
import "../Admin/login.css";
import image from "../../images/logistic.png";
import { Button, Modal } from "react-bootstrap";
import jwtDecode from "jwt-decode";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import ModalAlert from "../../components/Modal";

export default function CoOrdinaterLogin() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  const handleClose = () => setShow(false);

  const [cooDetails, setCooDetails] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCooDetails({
      ...cooDetails,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      username: cooDetails.userName,
      password: cooDetails.password,
    };

    axios
      .post("http://localhost:8000/login/coordinater", body)
      .then((res) => {
        console.log(res);
        if (res.data.sucess) {
          localStorage.setItem("token", res.data.token);
          console.log("LoginSucess ------------");
          console.log(res.data);
          console.log(res.data.admin.type);
          if (res.data.admin.type === "train_coordinator") {
            navigate(`/traincodinaterboard/${cooDetails.userName}`);
          } else if (res.data.admin.type === "truck_coordinator") {
            navigate(`/truckcodinaterboard/${cooDetails.userName}`);
          } else {
            alert("Invalid User -------");
          }
          // console.log("kbuuhfsuhgodfj : ", cck);
          //navigate(`/codinaterboard/${cooDetails.userName}`);
        } else {
          setMessage(res.data.message);
          setShow(true);
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container vh-100 d-flex align-items-center  justify-content-center ">
      <div className="login-form">
        <img className="login-image" src={image}></img>
        <h3>COORDINATOR LOGIN</h3>
        <form onSubmit={handleSubmit}>
          <div className="usrname">
            <label className="login-label" htmlFor="userName">
              Username:
            </label>
            <br></br>
            <input
              className="login-input"
              type="text"
              id="userName"
              name="userName"
              placeholder="Username"
              value={cooDetails.userName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="login-label" htmlFor="password">
              Password:
            </label>
            <br></br>
            <input
              className="login-input"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your Password"
              value={cooDetails.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
      {show && (
        <ModalAlert
          show={show}
          handleClose={handleClose}
          message={message}
        ></ModalAlert>
      )}
    </div>
  );
}
