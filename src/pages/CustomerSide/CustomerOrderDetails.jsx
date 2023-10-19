import React from "react";

export default function CustomerOrderDetails() {
  return (
    <div>
      <div className="p-3 align-self-center">
        <h1 className="word-art font-italic">Order List</h1>
      </div>
      <section className="intro">
        <div className="gradient-custom-1 h-100">
          <div className="mask d-flex align-items-center h-100">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="table-responsive bg-white table-semi-transparent">
                    <table className="table mb-0">
                      <thead>
                        <tr>
                          <th scope="col">OREDR ID</th>
                          <th scope="col">Customer ID</th>
                          <th scope="col">DATE</th>
                          <th scope="col">STORE</th>
                          <th scope="col">ROUTE ID</th>
                          <th scope="col">STATUS</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orderList?.map((order) => {
                          return (
                            <tr key={order?.order_id}>
                              <th scope="row" className="row_style">
                                <Link
                                  to={`/custorderdetails/${order?.order_id}`}
                                >
                                  {order?.order_id}
                                </Link>
                              </th>
                              <td>{order?.customer_id}</td>
                              <td>{order?.date}</td>
                              <td>{order?.store_id}</td>
                              <td>{order?.route_id}</td>
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
  );
}
