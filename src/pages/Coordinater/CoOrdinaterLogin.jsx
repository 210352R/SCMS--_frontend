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

const token = localStorage.getItem("token");
//Create an Axios instance with custom headers
const axiosInstance = axios.create({
  headers: {
    Authorization: `Bearer ${token}`, // Set the token in the 'Authorization' header
  },
});

export default function CoOrdinaterLogin() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  const [username, setUsername] = useState();

  const [truckCoo, setTruckCoo] = useState({});

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

  // Authenticate -----------------------------------------------------------------------
  useEffect(() => {
    console.log("Storage Token : ", localStorage.getItem("token"));
    axiosInstance
      .get("http://localhost:8000/login/tcoo/authenticate")
      .then((res) => {
        if (res.data.success) {
          console.log("kjghuisfhgiodjgkldjiogjdiohjjhfjdiohjfpihjd");
          const decodedToken = jwtDecode(token);
          console.log(decodedToken.user);
          setUsername(decodedToken.user);
          console.log("Wade godaaa --------- ");
          navigate(`/traincodinaterboard/${decodedToken.user}}`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  ///trcoo/authenticate

  useEffect(() => {
    console.log("Storage Token : ", localStorage.getItem("token"));
    axiosInstance
      .get("http://localhost:8000/login/trcoo/authenticate")
      .then((res) => {
        if (res.data.success) {
          console.log("kjghuisfhgiodjgkldjiogjdiohjjhfjdiohjfpihjd");
          const decodedToken = jwtDecode(token);
          console.log(decodedToken.user);
          setUsername(decodedToken.user);
          console.log("Wade godaaa ------------- ");
          axios
            .get(
              `http://localhost:8000/coordinater/getStoreId/${decodedToken.user}`
            )
            .then((res) => {
              console.log("Store ID ------ ", res.data.storeId);
              navigate(`/truckPage/${decodedToken.user}/${res.data.storeId}`);
            });

          //navigate(`/truckPage/:username/:storeId`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
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
          console.log(res.data.coordinater.type);
          if (res.data.coordinater.type === "train_coordinator") {
            navigate(`/traincodinaterboard/${cooDetails.userName}`);
          } else if (res.data.coordinater.type === "truck_coordinator") {
            console.log(res.data.truckCoo[0]);
            setTruckCoo(res.data.truckCoo[0]);
            console.log("Truck Coo : ", truckCoo);
            console.log("Store Id : ", res.data.truckCoo[0]?.store_id);
            navigate(
              `/truckPage/${cooDetails.userName}/${res.data.truckCoo[0]?.store_id}`
            );
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

  console.log("truck Coo ", truckCoo);
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
