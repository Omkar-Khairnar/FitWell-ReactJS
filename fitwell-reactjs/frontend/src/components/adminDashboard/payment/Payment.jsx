import React from 'react'
import './Payment.css'

const Payment = () => {
  return (
    <div class="container-fluid px-4">
                        <h2 style={{textAlign: 'center'}}>All Payments...</h2>

                        <div class="table" style={{backgroundColor: 'rgba(255, 250, 243, 0.747)'}}>
                            <table class="table table-striped">
                                <thead class="thead-dark">

                                    <tr>
                                        <th scope="col">Date</th>
                                        <th scope="col">Transaction ID</th>
                                        <th scope="col">Payment Method</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Status</th>
                                    </tr>

                                </thead>
                                <tbody>
                                  {/* <% payments.forEach((item)=>{ %> */}
                                    <tr id="row1">
                                      <th scope="row" id="payment-date1">
                                        {/* <%=item.Dateoforder.toDateString()%> */}
                                      </th>
                                      <td id="payment-transactionID1">
                                        {/* <%=item._id%> */}
                                      </td>
                                      <td id="payment-Method1">
                                        {/* <%=item.paymentmethod%> */}
                                      </td>
                                      <td id="payment-desc1">
                                        {/* <%=item.description%> */}
                                      </td>
                                      <td id="payment-amount1">Rs 
                                      {/* <%=item.amount%> */}
                                    </td>
                                      <td id="payment-status1">
                                        {/* <%=item.status%> */}
                                      </td>
                                    </tr>
                                  {/* <%}) %> */}
                                  </tbody>
                            </table>
                        </div>

                    </div>
  )
}

export default Payment