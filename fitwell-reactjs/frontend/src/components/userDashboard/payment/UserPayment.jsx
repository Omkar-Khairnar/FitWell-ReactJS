import React from 'react'
import '../User_Dashboard.css';
import './UserPayment.css'

const UserPayment = () => {
  return (
    <div class="dashboard-content" id="dashboard-payment-page" cl>
          <div class="container">
            <h1>Payment Page</h1>
            <div class="table">
              <table class="table table-striped">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col" style={{color : "black"}}>Date</th>
                    <th scope="col" style={{color : "black"}}>Transaction ID</th>
                    <th scope="col" style={{color : "black"}}>Payment Method</th>
                    <th scope="col" style={{color : "black"}}>Description</th>
                    <th scope="col" style={{color : "black"}}>Amount</th>
                    <th scope="col" style={{color : "black"}}>Status</th>
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
                      <td id="payment-desc1">Debited</td> 
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
        </div>
  )
}

export default UserPayment