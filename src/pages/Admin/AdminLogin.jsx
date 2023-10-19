import React, { useState, useEffect } from "react";
import Data from "../../data.json";
import "./login.css";
import image from "../../images/admin.png";
import { Button, Modal } from "react-bootstrap";
import jwtDecode from "jwt-decode";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  const handleClose = () => setShow(false);

  const [adminDetails, setAdminDetails] = useState({
    userName: "",
    password: "",
  });

  const token = localStorage.getItem("token");

  //Create an Axios instance with custom headers
  const axiosInstance = axios.create({
    headers: {
      Authorization: `Bearer ${token}`, // Set the token in the 'Authorization' header
    },
  });

  // Authentication processs ---------------------------
  useEffect(() => {
    console.log("Storage Token : ", localStorage.getItem("token"));
    axiosInstance
      .get("http://localhost:8000/login/admin/authenticate")
      .then((res) => {
        if (res.data.success) {
          const decodedToken = jwtDecode(token);
          console.log(decodedToken.user);
          //i want to add the username to the state
          setAdminDetails((prevAdminDetails) => ({
            ...prevAdminDetails,
            userName: decodedToken.user.userName,
          }));
          navigate(`/adminboard/${decodedToken.user}`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminDetails({
      ...adminDetails,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      username: adminDetails.userName,
      password: adminDetails.password,
    };

    axios
      .post("http://localhost:8000/login/admin", body)
      .then((res) => {
        console.log(res);
        if (res.data.sucess) {
          localStorage.setItem("token", res.data.token);
          console.log("LoginSucess ------------");
          console.log(res.data);
          // console.log("kbuuhfsuhgodfj : ", cck);
          navigate(`/adminboard/${adminDetails.userName}`);
        } else {
          setMessage(res.data.message);
          setShow(true);
          //alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container vh-100 d-flex align-items-center  justify-content-center ">
      <div className="login-form ">
        <img className="login-image" src={image}></img>
        <h3>ADMIN LOGIN</h3>
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
              value={adminDetails.userName}
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
              value={adminDetails.password}
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
        <>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Login Alert </Modal.Title>
            </Modal.Header>
            <Modal.Body>{message}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </div>
  );
}
