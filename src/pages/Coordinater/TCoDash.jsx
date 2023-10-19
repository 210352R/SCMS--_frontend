import React, { useEffect, useState } from "react";
import DetCard from "./DetCard";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function TCoDash() {
  const [orderList, setOrderList] = useState([{}]);

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
  }, []);

  return (
    <div className="container-fluid min-vh-100">
      <div className="row">
        <div
          className="col-12"
          style={{ height: "50px", backgroundColor: "#B8CCF0" }}
        >
          <h2>Co-ordinater dashboard ----- </h2>
        </div>
        <div className="col-12 d-flex mt-3 flex-wrap">
          {/* Add your DetCard components here */}
          {/* DetCard 1 */}
          <div className="col-md-2 col-sm-6 col-12">
            <DetCard
              Topic={"Train trip token 1"}
              subTopic={"Train-01"}
              details={"Train trip token 1"}
              command="Add orders"
              link="#"
            />
          </div>

          {/* DetCard 2 */}
          <div className="col-md-2 col-sm-6 col-12">
            <DetCard
              Topic={"Train trip token 2"}
              subTopic={"Train-02"}
              details={"Train trip token 2"}
              command="Add orders"
              link="#"
            />
          </div>

          {/* DetCard 2 */}
          <div className="col-md-2 col-sm-6 col-12">
            <DetCard
              Topic={"Train trip token 2"}
              subTopic={"Train-02"}
              details={"Train trip token 2"}
              command="Add orders"
              link="#"
            />
          </div>

          {/* DetCard 2 */}
          <div className="col-md-2 col-sm-6 col-12">
            <DetCard
              Topic={"Train trip token 2"}
              subTopic={"Train-02"}
              details={"Train trip token 2"}
              command="Add orders"
              link="#"
            />
          </div>

          {/* DetCard 2 */}
          <div className="col-md-2 col-sm-6 col-12">
            <DetCard
              Topic={"Train trip token 2"}
              subTopic={"Train-02"}
              details={"Train trip token 2"}
              command="Add orders"
              link="#"
            />
          </div>

          {/* DetCard 2 */}
          <div className="col-md-2 col-sm-6 col-12">
            <DetCard
              Topic={"Train trip token 2"}
              subTopic={"Train-02"}
              details={"Train trip token 2"}
              command="Add orders"
              link="#"
            />
          </div>

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
                                    to={`/TCAddorder/${order?.order_id}/${order?.store_id}/${order?.netCapacity}`}
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
  );
}
