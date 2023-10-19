import React from "react";
import Data from "../../data.json";
import "./TrainCoordinaterBoard.css";

export default function TrainCoordinaterBoard() {
  const [trains, setTrains] = React.useState(Data.trains);
  const [orders, setOrders] = React.useState(Data.orders);

  const trainDetails = trains.map((train) => {
    if (train.capacity > 0) {
      return (
        <h4 className="train">
          {train.name} : Remaining Capacity {train.capacity}
        </h4>
      );
    }
    return <h4 className="train-full">{train.name} : Full </h4>;
  });

  const trainOption = trains.map((train) => {
    if (train.capacity > 0) {
      return <option value={train.id}>{train.name}</option>;
    }
  });

  function handleChange(event, orderId) {
    const { value } = event.target;
    const updatedOrders = orders.map((order) => {
      if (order.order_id == orderId) {
        return {
          ...order,
          train: value,
        };
      }
      return order;
    });
    setOrders(updatedOrders);
  }

  function handleConfirm(orderId, trainId, size) {
    if (trainId !== "-1") {
      const updatedTrains = trains.map((train) => {
        if (train.id == trainId && train.capacity >= size) {
          const updatedOrders = orders.filter(
            (order) => order.order_id !== orderId
          );
          setOrders(updatedOrders);
          return {
            ...train,
            capacity: train.capacity - size,
          };
        }
        return train;
      });
      setTrains(updatedTrains);
    }
  }

  const orderDetails = orders.map((order) => {
    return (
      <div key={order.order_id} className="order">
        <h5>Order ID : {order.order_id}</h5>
        <h5>Deliver Address : {order.delivery_address}</h5>
        <h5>Order Size : {order.size}</h5>

        <select
          value={order.train}
          onChange={(event) => handleChange(event, order.order_id, order.size)}
        >
          <option value="-1">-Select Train-</option>
          {trainOption}
        </select>
        <button
          className="train-submit"
          onClick={() => handleConfirm(order.order_id, order.train, order.size)}
        >
          Confirm
        </button>
      </div>
    );
  });

  return (
    <div className="coo-page">
      <div className="train-details">{trainDetails}</div>

      <div className="orders">{orderDetails}</div>
    </div>
  );
}
