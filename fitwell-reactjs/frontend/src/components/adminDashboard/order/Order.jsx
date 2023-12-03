import React from 'react';
// import styles from './order.module.css'
import style from './order_module.css';

const Order = () => {
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
                                              <th scope="col" width="50">Sr.</th>
                                              <th scope="col">Name</th>
                                              <th scope="col">DateOfOrder</th>
                                              <th scope="col">Amount</th> 
                                              <th scope="col">Status</th>
                                              <th scope="col">Address</th>
                                              <th scope="col">Delete</th>
                                              <th scope="col"></th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            {/* <%let count=1 %> */}
                                            {/* <% orders.forEach((order)=>{ %> */}
                                              <tr>
                                                <th scope="row">
                                                  {/* <%=count%> */}
                                                  </th>
                                                {/* <% count=count+1%> */}
                                                <td>
                                                  {/* <%=order.name%> */}
                                                  </td>
                                                <td>
                                                  {/* <%=order.Dateoforder.toDateString()%> */}
                                                  </td>
                                                <td>
                                                  {/* <%=order.amount%> */}
                                                  </td>
                                                <td>
                                                  {/* <%=order.status%> */}
                                                  </td>
                                                <td>
                                                  {/* <%=order.address%> */}
                                                  </td>
                                                <form method="post" action="/adminactions/deleteorder">
                                                  <input type="text" 
                                                  // value=<%=order.id%> 
                                                  className="d-none" name="orderid" />
                                                  <td> <button type="submit" style={{border: 'none',backgroundColor: 'transparent'}}><i className="fa-solid fa-trash" style={{color:'red', backgroundColor: 'transparent', cursor: 'pointer'}}></i></button></td>
                                                </form>
                                              </tr>
                                            {/* <% })%> */}

                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                              </div>
                            </div>
                        </div>
                    </div>
  )
}

export default Order