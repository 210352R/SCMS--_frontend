import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import "../../styles/orderDetailsCust.css";

const token = localStorage.getItem("token");
console.log("Token : ", token);
//Create an Axios instance with custom headers
const axiosInstance = axios.create({
  headers: {
    Authorization: `Bearer ${token}`, // Set the token in the 'Authorization' header
  },
});

export default function OrderDetailsPageCust() {
  const { id } = useParams();
  const [order, setOrder] = useState({});
  const [productList, setProductList] = useState([{}]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/order/getItem/${id}`)
      .then((res) => {
        console.log("Running ---- ");
        console.log("Order ---- ", res.data);
        if (res.data.sucess) {
          setOrder(res.data.order);
          setProductList(res.data.products);
        }
      })
      .catch((err) => {
        console.log("Error ---- ", err);
      });
  }, []);

  return (
    <div>
      <div className=" maincontainer min-vh-100">
        <div class="card container mt-5">
          <div cla>
            <div class="card-header">Order Details </div>
            <div class="card-body">
              <h3 class="card-title">{"topic"}</h3>
              <hr />
              <div className="row">
                <div className="col-sm-3 ">
                  {" "}
                  <b>Order Id </b>{" "}
                </div>
                <div className="col-sm-9 ">{order?.order_id}</div>

                <div className="col-sm-3 ">
                  <b>Date </b>
                </div>
                <div className="col-sm-9">{order?.date}</div>

                <div className="col-sm-3 ">
                  <b>Delivery Address </b>
                </div>
                <div className="col-sm-9">{order?.delivery_address}</div>

                <div className="col-sm-3 ">
                  <b>State </b>
                </div>
                <div className="col-sm-9">{order?.state}</div>

                <div class="table-responsive bg-white mt-5">
                  <table class="table mb-0">
                    <thead>
                      <tr>
                        <th scope="col">Product ID</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">sent_Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {productList?.map((product) => {
                        return (
                          <tr>
                            <td>{product?.product_id}</td>
                            <td>{product?.name}</td>
                            <td>{product?.quantity}</td>
                            <td>{product?.sent_quantity}</td>
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
  );
}
