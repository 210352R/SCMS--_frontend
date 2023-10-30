import React, { useEffect, useState } from "react";
// import DetCard from "./DetCard";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import COODash from "./COODash";

export default function TCTokens() {
  const { username } = useParams();
  const [TokenList, setTokenList] = useState([{}]);
  // add parametre searchtext
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/coordinater/getTokens`)
      .then((res) => {
        console.log("Running ---- ");
        console.log("Order ---- ", res.data);
        if (res.data.sucess) {
          setTokenList(res.data.tokens);
        }
      })
      .catch((err) => {
        console.log("Error ---- ", err);
      });
    console.log("Running ---- ");
  }, []);

  console.log("Search Term ---- ", searchText);

  return (
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
                              <th scope="col">Token ID</th>
                              <th scope="col">Trip ID</th>
                              <th scope="col">Train</th>
                              <th scope="col">STORE</th>
                              <th scope="col">ROUTE ID</th>
                              <th scope="col">Date</th>
                              <th scope="col">Time</th>
                              <th scope="col">Train CAPACITY</th>
                              <th scope="col">Curr. Capacity</th>
                            </tr>
                          </thead>
                          <tbody>
                            {TokenList?.filter((token) => {
                              if (searchText === "") {
                                return token;
                              } else if (
                                token?.name
                                  .toLowerCase()
                                  .includes(searchText.toLowerCase())
                              ) {
                                return token;
                              }
                            })?.map((token) => {
                              return (
                                <tr key={token?.token_Id}>
                                  <th scope="row" className="row_style">
                                    <Link>{token?.token_Id}</Link>
                                  </th>
                                  <td>{token?.trip_id}</td>
                                  <td>{token?.name}</td>
                                  <td>{token?.store_id}</td>
                                  <td>{token?.route_id}</td>
                                  <td>{token?.Date}</td>
                                  <td>{token?.trip_start_time}</td>
                                  <td>{token?.train_capacity}</td>
                                  <td>{token?.curr_capacity}</td>
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
  );
}
