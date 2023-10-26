import React, { useEffect, useState } from "react";
import AddminDashboard from "./AddminDashboard";
import axios from "axios";

import { Link, useParams } from "react-router-dom";
import OrderCard from "../../components/cards/OrderCard";

export default function AdminStoreDetail() {
  const { id } = useParams();
  const [storeList, setStoreList] = useState([{}]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/store/getAll`)
      .then((res) => {
        console.log("Running ---- ");
        console.log("Stores  ---- ", res.data);
        if (res.data.sucess) {
          setStoreList(res.data.stores);
        }
      })
      .catch((err) => {
        console.log("Error ---- ", err);
      });
    console.log("Running ---- ");
  }, []);

  console.log("Store List ---- ", storeList);

  return (
    <div>
      <AddminDashboard id={id}>
        <h1>Stores</h1>
        <div
          className="d-flex justify-content-center  flex-wrap"
          style={{ width: "100%" }}
        >
          {storeList?.map((store) => {
            return (
              <div>
                <OrderCard
                  name={store.name}
                  city={store.city}
                  address={store.address}
                />
              </div>
            );
          })}
        </div>
      </AddminDashboard>
    </div>
  );
}
