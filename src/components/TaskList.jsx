import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function TaskList() {
  return (
    <section className=" ">
      <div className="container-fluid h-100 ">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-12 col-xl-10">
            <div className="card mask-custom">
              <div className="card-body p-4 ">
                <div className="text-center pt-3 pb-2">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"
                    alt="Check"
                    width="60"
                  />
                </div>
                <table className="table  mb-0">
                  <thead>
                    <tr>
                      <th scope="col">Order Id</th>
                      <th scope="col">Product Id</th>
                      <th scope="col">Name</th>
                      <th scope="col">State</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Capacity</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="fw-normal">
                      <th>
                        <span className="ms-2">5</span>
                      </th>
                      <td className="align-middle">
                        <span>PRO005</span>
                      </td>
                      <td className="align-middle">
                        <span>Product 2</span>
                      </td>
                      <td className="align-middle">
                        <h6 className="mb-0">
                          <span className="badge bg-danger">New</span>
                        </h6>
                      </td>
                      <td className="align-middle">
                        <span>50</span>
                      </td>
                      <td className="align-middle">
                        <span>500</span>
                      </td>
                      <td className="align-middle">
                        <a href="#!" data-mdb-toggle="tooltip" title="Done">
                          <i className="fas fa-check fa-lg text-success me-3"></i>
                        </a>
                        <a href="#!" data-mdb-toggle="tooltip" title="Remove">
                          <i className="fas fa-trash-alt fa-lg text-warning"></i>
                        </a>
                      </td>
                    </tr>
                    {/* Add more table rows for tasks here */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TaskList;
