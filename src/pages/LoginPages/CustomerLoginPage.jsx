import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "../../styles/CustomerLogin.css";
import axios from "axios";

export default function CustomerLoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      username: username,
      password: password,
    };
    axios
      .post("http://localhost:8000/login/customer", body)
      .then((res) => {
        console.log(res);
        if (res.data.sucess) {
          localStorage.setItem("token", res.data.token);
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="all-in-one">
      <div className="overlay"></div>
      <section class="vh-100 gradient-custom  main-container">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                class="card bg-dark text-white"
                style={{ "border-radius": "1rem" }}
              >
                <div class="card-body p-5 text-center">
                  <div class="mb-md-5 mt-md-4 pb-3">
                    <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                    <p class="text-white-50 mb-5">
                      Please enter your login and password!
                    </p>

                    <div class="form-outline form-white mb-4">
                      <input
                        type="email"
                        id="typeEmailX"
                        placeholder="Customer - ID"
                        class="form-control form-control-lg"
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}
                      />
                    </div>

                    <div class="form-outline form-white mb-3">
                      <input
                        type="password"
                        id="typePasswordX"
                        placeholder="Password"
                        class="form-control form-control-lg"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>

                    <p class="small mb-3 pb-lg-2">
                      <a class="text-white-50" href="#!">
                        Forgot password?
                      </a>
                    </p>
                    {/* <p class="small mb-3 pb-lg-2">
                      Not a member?
                      <a
                        class="text-white-50 link-info register-link"
                        href="#!"
                      >
                        register now !
                      </a>
                    </p> */}

                    <button
                      class="btn btn-outline-light btn-lg px-5"
                      type="submit"
                      onClick={(e) => {
                        handleSubmit(e);
                      }}
                    >
                      Login
                    </button>
                  </div>
                  <div>
                    <p class="mb-1">
                      Don't have an account? &nbsp;{"   "}
                      <Link to="#" class=" fw-bold register-link ">
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
