import React, { useEffect, useState } from "react";
import "./Order.css";
import AdminActions from "../../../services/AdminActions";

const Order = () => {
  const[orders, setOrders] = useState(null);
  
  const getAllOrders = async () => {
    const res = await AdminActions.getAllAdminOrder();
    if(!res.error && res.data.adminOrders.length > 0) {
      setOrders(res.data.adminOrders);
    }
  };
  console.log("🚀 ~ file: AdminOrder.jsx:7 ~ Order ~ orders:", orders)

  useEffect(() => {
    getAllOrders();
  },[]);
  let count = 1;
  return (
    <div className="container-fluid px-4">
      <div className="dashboard-content" id="dashboard-order-page">
        <h1 className="past-order-heading"> ORDERS</h1>
        <div className="container">
          <div className="container-fluid px-4 overflow-scroll">
            <div className="row my-5">
              <h3 className="fs-4 mb-3">Total Members</h3>
              <div className="col">
                <table className="table bg-white rounded shadow-sm  table-hover">
                  <thead>
                    <tr>
                      <th scope="col" width="50">
                        Sr.
                      </th>
                      <th scope="col">Name</th>
                      <th scope="col">DateOfOrder</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Status</th>
                      <th scope="col">Address</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders !== null && orders.length > 0 && 
                    orders.map((item)=> (
                    
                    <tr>
                      <th scope="row">{count++}</th>
                      <td>{item.name}</td>
                      <td>{item.Dateoforder}</td>
                      <td>{item.amount}</td>
                      <td>{item.status}</td>
                      <td>{item.address}</td>
                        <td style={{padding : "0%"}}>
                      <form method="post" action="/adminactions/deleteorder" style={{padding : "0%"}}>
                        <input
                          type="text"
                          value={item._id}
                          className="d-none"
                          name="orderid"
                        />
                          <button
                            type="submit"
                            style={{
                              border: "none",
                              backgroundColor: "transparent",
                              padding : "auto"
                            }}
                          >
                            <i
                              className="fa-solid fa-trash"
                              style={{
                                color: "red",
                                backgroundColor: "transparent",
                                cursor: "pointer",
                                padding : "0%"
                              }}
                            ></i>
                          </button>
                      </form>
                        </td>
                    </tr>
                    ))}
                    </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
