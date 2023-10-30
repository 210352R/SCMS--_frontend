import React, { useEffect, useState } from "react";
import DetCard from "./DetCard";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import AddminDashboard from "../Admin/AddminDashboard";
import COODash from "./COODash";

export default function TCoDash() {
  const { id } = useParams();
  const [orderList, setOrderList] = useState([{}]);

  const [tokenList, setTokenList] = useState([{}]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/coordinater/getAllOrdersWithCapacity`)
      .then((res) => {
        console.log("Running ---- ");
        console.log("Order ---- ", res.data);
        if (res.data.sucess) {
          setOrderList(res.data.orders);
        }
      })
      .catch((err) => {
        console.log("Error ---- ", err);
      });
    console.log("Running ---- ");

    axios
      .get(`http://localhost:8000/traintoken/getNotFillTokenDetails`)
      .then((res) => {
        console.log("Running ---- ");
        console.log("Order ---- ", res.data);
        if (res.data.sucess) {
          setTokenList(res.data.tokens);
        }
      });
  }, []);

  console.log("ohuihgoujgiodfjgoijd : ", tokenList);

  return (
    <COODash username={id}>
      <div className="container-fluid min-vh-100">
        <div className="row">
          <div className="col-12 d-flex mt-3 justify-content-center  flex-wrap">
            {/* Add your DetCard components here */}
            {tokenList.map((token, index) => (
              <div key={index} className="col-md-2 col-sm-6 col-12">
                <DetCard
                  Topic={`Train trip token ${token.token_Id}`}
                  subTopic={`Train - ${token.name}`}
                  details={`Avilable - ${
                    token.train_capacity - token.curr_capacity
                  }`}
                  store={`store - ${token.store_id}`}
                  link="#"
                />
              </div>
            ))}

            {/* Add more DetCard components as needed */}
          </div>
        </div>
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
                            <tr>
                              <th scope="col">ORDER ID</th>
                              <th scope="col">Customer ID</th>
                              <th scope="col">DATE</th>
                              <th scope="col">STORE</th>
                              <th scope="col">ROUTE ID</th>
                              <th scope="col">CAPACITY</th>
                              <th scope="col">STATUS</th>
                            </tr>
                          </thead>
                          <tbody>
                            {orderList?.map((order) => {
                              return (
                                <tr key={order?.order_id}>
                                  <th scope="row" className="row_style">
                                    <Link
                                      to={`/TCAddorder/${order?.order_id}/${order?.store_id}/${order?.netCapacity}/${id}`}
                                    >
                                      {order?.order_id}
                                    </Link>
                                  </th>
                                  <td>{order?.customer_id}</td>
                                  <td>{order?.date}</td>
                                  <td>{order?.store_id}</td>
                                  <td>{order?.route_id}</td>
                                  <td>{order?.netCapacity}</td>
                                  <td>{order?.state}</td>
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
      </div>
    </COODash>
  );
}
