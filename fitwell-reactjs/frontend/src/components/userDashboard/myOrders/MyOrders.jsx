import React from 'react'
import './.css'

const MyOrders = () => {
  return (
    <div class="dashboard-content" id="dashboard-order-page">
          <h1 class="past-order-heading">YOUR ORDERS</h1>
          <div class="container">
            <div class="container-orders"> 
              {/* <% orders.forEach((order)=>{ %> */}
                <div id="card-user-order" class="card text-center"> 
                  <div class="card-body">
                    <div class="past-order-img" style="width: 30%;">
                      <img src="data:image/<%=order.image.contentType%>;base64, <%=order.image.data.toString('base64')%>" alt="order-item-img" id="past-order-item-img"/>
                    </div>
                    <div class="past-order-info-content mx-auto">
                      <h3 class="past-order-product-name">
                        {/* <%=order.name%> */}
                        </h3>
                      <h5 class="past-order-price">Total: Rs <span id="order-price">
                        {/* <%=order.amount%> */}
                        </span></h5>
                      <h5 class="past-order-date">Ordered On : <span id="order-date">
                        {/* <%=order.Dateoforder.toDateString()%> */}
                        </span></h5>
                      <h5 class="past-order-date">Ordered ID : <span id="order-date">
                        {/* <%=order._id.toString().substring(0,14)%> */}
                        </span></h5>
                      <p class="past-order-delivery">Delivery Address : <span id="order-address">
                        {/* <%=order.address%> */}
                        </span></p>
                      <form method="post" action="/userActions/deleteorder">
                        <input type="text" 
                        // value=<%=order._id%> 
                        class="d-none" name="orderid" />
                        <td> <button type="submit"  style="border: none; background-color: white;width: 50px; align-self: center;"><i class="fa-solid fa-trash" style="color:red; cursor: pointer;"></i></button></td>
                      </form>
                    </div>
                  </div>
                </div>
                {/* <% }) %> */}
            </div>
          </div>
        </div>
  )
}

export default MyOrders