import React, { useEffect, useRef, useState } from "react";
import "./AdminViewReports.css";

const GetOrderList = ({selectedYear}) => {
    const [customerId, setCustomerId] = useState("");
    const [customerDetails, setCustomerDetails] = useState(null); // Define customerDetails state
    const [showDialog, setShowDialog] = useState(false);

    const handleCustomerIdChange = (e) => {
      setCustomerId(e.target.value);
    };

    const handleViewOrdersClick = async () => {
      try {
    //     // Replace the URL with your actual API endpoint for fetching customer details
    //      const response = await fetch(
    //      `https://api.example.com/customers/${customerId}`
    //     );

    //     if (!response.ok) {
    //       throw new Error("Failed to fetch customer details");
    //     }

    //     const data = await response.json();

    //     setCustomerDetails(data);

    //     // Show the dialog
    //     setShowDialog(true);

  
/////////////////////////////////
    const dummyData = { //below part used for testing uncomment the above and use for func
        name: "John Doe",
        orders: [
          { orderId: 1, product: "Product A", quantity: 2 },
          { orderId: 2, product: "Product B", quantity: 1 },
        ],
      };
    
      setCustomerDetails(dummyData);
      setShowDialog(true);
/////////////////////////////////////

      } catch (error) {
        console.error("Error fetching customer details:", error.message);
      }
    };

    const handleDialogClose = () => {
      // Close the dialog
      setShowDialog(false);
    };

    return (
      <div>
        <input
          className="input-details"
          type="text"
          placeholder="Enter Customer ID"
          value={customerId}
          onChange={handleCustomerIdChange}
        />
        <button className="view-orders-button" onClick={handleViewOrdersClick}>
          View Customer Orders
        </button>

        {showDialog && customerDetails && (
          <div className="order-dialog">
            <h2>Name: {customerDetails.name}</h2>
            <h3>Orders:</h3>
            <table>
                <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                </tr>
                </thead>
                <tbody>
                    {customerDetails.orders.map((order) => (
                        <tr key={order.orderId}>
                        <td>{order.orderId}</td>
                        <td>{order.product}</td>
                        <td>{order.quantity}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
          <button onClick={handleDialogClose}>Close</button>
        </div>
        )}
      </div>
    );
  };

  export default GetOrderList;