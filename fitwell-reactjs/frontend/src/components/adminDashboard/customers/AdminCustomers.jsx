import React, { useEffect, useState } from "react";
import "../admin_dashboard.css";

const AdminActions = require("../../../services/AdminActions");

const AdminCustomers = () => {
  const [customers, setCustomers] = useState(null);
  const getAllCustomers = async () => {
    const res = await AdminActions.getAllAdminCustomer();
    if (!res.error && res.data.length > 0) {
      setCustomers(res.data);
    }
  };
  console.log(
    "🚀 ~ file: AdminCustomers.jsx:9 ~ AdminCustomers ~ customers:",
    customers
  );

  useEffect(() => {
    getAllCustomers();
  }, []);

  let count = 1;

  return (
    <div class="container-fluid px-4 overflow-scroll">
      <div class="row my-5">
        <h3 class="fs-4 mb-3">Total Members</h3>
        <div class="col">
          <table class="table bg-white rounded shadow-sm  table-hover">
            <thead>
              <tr>
                <th scope="col" width="50">
                  Sr.
                </th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">DOJ</th>
                <th scope="col">Gender</th>
                <th scope="col">Weight</th>
                <th scope="col">Height</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              {customers !== null &&
                customers.length > 0 &&
                customers.map((item) => (
                  <tr>
                    <th scope="row">{count++}</th>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.DateOfJoin}</td>
                    <td>{item.gender}</td>
                    <td>{item.weight}</td>
                    <td>{item.height}</td>
                    <td style={{padding : "0%"}}>
                      <form method="post" action="/adminactions/deleteuser" style={{padding : "0%"}}>
                        <input
                          type="text"
                          value={item._id}
                          class="d-none"
                          name="userid"
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
                            class="fa-solid fa-trash"
                            style={{ color: "red", cursor: "pointer", padding : "auto" }}
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
  );
};

export default AdminCustomers;
