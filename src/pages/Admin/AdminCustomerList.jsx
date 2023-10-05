import React, { useEffect, useState } from "react";
import AddminDashboard from "./AddminDashboard";
import axios from "axios";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import { Link, useParams } from "react-router-dom";

import "./AdminCustomerListStyle.css";

export default function AdminCustomerList() {
  const { id } = useParams();

  const [Modelopen, setModelOpen] = useState(false);
  const handleModelOpen = () => setModelOpen(true);
  const handleModelClose = () => setModelOpen(false);

  const [customerList, setCustomerList] = useState([{}]);
  const [customer, setCustomer] = useState({});

  const handleCustomer = (C_id) => {
    console.log("Customer ekata wa bdjjhdfhjkjgkfjgkfjg");
    axios
      .get(`http://localhost:8000/customer/getA/${C_id}`)
      .then((res) => {
        console.log("Running Customer  ---- ");
        console.log("Customer Data  ---- ", res.data);
        if (res.data.sucess) {
          setCustomer(res.data.customer[0]);
        }
      })
      .catch((err) => {
        console.log("Error ---- ", err);
      });
    console.log("Running ---- ");
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/customer/getAll`)
      .then((res) => {
        console.log("Running ---- ");
        console.log("Order ---- ", res.data);
        if (res.data.sucess) {
          setCustomerList(res.data.customers);
        }
      })
      .catch((err) => {
        console.log("Error ---- ", err);
      });
    console.log("Running ---- ");
  }, []);

  console.log("Customer List ---- ", customerList);
  console.log("Customer ---- ", customer);

  const modelStyle = {
    width: "800px",
    height: "800px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "150px",
  };

  return (
    <div>
      <AddminDashboard id={id}>
        {/* //----------------------------------------------------------------------------------------------------------------- */}
        {/* model eka  */}
        <Modal
          open={Modelopen}
          onClose={handleModelClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
        >
          <Box style={modelStyle} className="h-auto bg-primary">
            <section style={{ backgroundColor: "#eee" }}>
              <div className="container py-5 ">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="card mb-4">
                      <div className="h-auto text-center">
                        <img
                          //   src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                          src={
                            customer?.image
                              ? "http://localhost:8000/images/" +
                                customer?.image
                              : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                          }
                          alt="avatar"
                          className="rounded-circle img-fluid"
                          style={{ width: "150px" }}
                        />
                        <h5 className="my-3">{customer?.customer_id}</h5>
                        <p className="text-muted mb-1">SCMS - Customer</p>
                        <p className="text-muted mb-4">
                          Bay Area, San Francisco, CA
                        </p>
                        <div className="d-flex justify-content-center mb-2">
                          <button type="button" className="btn btn-primary">
                            Follow
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-primary ms-1"
                          >
                            Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="card mb-4">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Full Name</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">
                              {customer?.first_name} {customer?.last_name}
                            </p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Email</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">{customer?.email}</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Phone</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">
                              {customer?.phone_number}
                            </p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Mobile</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">(098) 765-4321</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Address</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">
                              {customer?.address}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Box>
        </Modal>

        {/* Model eka iwarai */}

        {/* // ------------------------------------------------------------------------------------------------------------------ */}

        <section class="intro m-5">
          <div class=" d-flex align-items-center  ">
            <div class="container">
              <div class="row justify-content-center ">
                <div class="col-12 ">
                  <div class=" shadow-2-strong ">
                    <div class="card-body p-0 ">
                      <div
                        class="table-responsive "
                        //   style="position: relative; height: 700px"
                        style={{ position: "relative", height: "700px" }}
                      >
                        <table class="table table-dark mb-0">
                          <thead style={{ backgroundColor: "#393939" }}>
                            <tr class="text-uppercase text-success">
                              <th scope="col">ID</th>
                              <th scope="col">Name</th>
                              <th scope="col">Address</th>
                              <th scope="col">Contact_No</th>
                              <th scope="col">Email</th>
                              <th scope="col">Type</th>
                            </tr>
                          </thead>
                          <tbody>
                            {customerList?.map((customer) => {
                              return (
                                <tr>
                                  <th
                                    scope="row"
                                    className="row_style clickable"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      handleCustomer(customer?.customer_id);
                                      handleModelOpen();
                                    }}
                                  >
                                    {customer?.customer_id}
                                  </th>
                                  <td>
                                    {customer?.first_name} {customer?.last_name}
                                  </td>
                                  <td>{customer?.address}</td>
                                  <td>{customer?.phone_number}</td>
                                  <td>{customer?.email}</td>
                                  <td>{customer?.type}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AddminDashboard>
    </div>
  );
}
