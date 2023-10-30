import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import COODash from "./COODash";

export default function TCTrains() {
  const { username } = useParams();
  const [trainList, setTrainList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/coordinater/getTrains`)
      .then((res) => {
        console.log("Running ---- ");
        console.log("Stores  ---- ", res.data);
        if (res.data.sucess) {
          // Check for "success" property (typo?)
          setTrainList(res.data.trains);
        }
      })
      .catch((err) => {
        console.log("Error ---- ", err);
      });
    console.log("Running ---- ");
  }, []);

  console.log("TrainList : ", trainList);

  return (
    <div>
      <div>
        <COODash username={username}>
          <div className="my-5 ">
            <section className="intro  ">
              <div className="gradient-custom-1 h-100">
                <div className="mask d-flex align-items-center h-100">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-12">
                        <div className="table-responsive bg-white table-semi-transparent border border-dark border-5 ">
                          <table className="table table-hover table-bordered mb-0">
                            <thead>
                              {/* // add search bar */}
                              <tr>
                                <th
                                  scope="col"
                                  className="text-center"
                                  colSpan="5"
                                >
                                  <div className="d-flex">
                                    <div className="input-group searchbar">
                                      <input
                                        className="form-control search_input"
                                        type="text"
                                        name=""
                                        placeholder="Search..."
                                        value={searchText}
                                        onChange={(e) =>
                                          setSearchText(e.target.value)
                                        }
                                      />
                                      <div className="input-group-append mx-2">
                                        <span className="input-group-text">
                                          <i
                                            className="fa fa-search"
                                            aria-hidden="true"
                                            style={{ fontSize: "23px" }}
                                          ></i>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </th>
                              </tr>

                              <tr>
                                <th scope="col">Train ID</th>
                                <th scope="col">Train</th>
                                <th scope="col">STORE</th>
                                <th scope="col">Destination</th>
                                <th scope="col">Start Time</th>
                                <th scope="col">Arrival Time</th>
                                <th scope="col">Train CAPACITY</th>
                              </tr>
                            </thead>
                            <tbody>
                              {trainList?.map((train) => {
                                return (
                                  <tr key={train?.train_id}>
                                    <th scope="row" className="row_style">
                                      <Link>{train?.train_id}</Link>
                                    </th>
                                    <td>{train?.name}</td>
                                    <td>{train?.store_id}</td>
                                    <td>{train?.destination}</td>
                                    <td>{train?.start_time}</td>
                                    <td>{train?.arrival_time}</td>
                                    <td>{train?.train_capacity}</td>
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
            </section>
          </div>
        </COODash>
      </div>
    </div>
  );
}
