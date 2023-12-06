import React from 'react'
import "../User_Dashboard.css";

const UserOrders = () => {
  return (
    <div class="dashboard-content" id="dashboard-order-page">
          <h1 class="past-order-heading">YOUR ORDERS</h1>
          <div class="container">
            <div class="container-orders"> 
              {/* <% orders.forEach((order)=>{ %> */}
                <div id="card-user-order" class="card text-center"> 
                  <div class="card-body">
                    <div class="past-order-img" style={{width: '30%'}}>
                      {/* <img src="data:image/<%=order.image.contentType%>;base64, <%=order.image.data.toString('base64')%>" alt="order-item-img" id="past-order-item-img"/> */}
                      <img src="https://squatdeadlift.com/wp-content/uploads/2021/04/71uwfbcAkYL._AC_SX679_.jpg" alt="" style={{height:'100px'}} />
                    </div>
                    <div class="past-order-info-content mx-auto">
                      <h3 class="past-order-product-name">
                        Whey Protein
                        </h3>
                      <h5 class="past-order-price">Total: Rs <span id="order-price">
                        Rs 1700
                        </span></h5>
                      <h5 class="past-order-date">Ordered On : <span id="order-date">
                        2nd December, 2023
                        {/* <%=order.Dateoforder.toDateString()%> */}
                        </span></h5>
                      <h5 class="past-order-date">Ordered ID : <span id="order-date">
                        {/* <%=order._id.toString().substring(0,14)%> */}
                        </span></h5>
                      <p class="past-order-delivery">Delivery Address : <span id="order-address">
                        {/* <%=order.address%> */}
                        </span></p>
                      <form >
                        <input type="text" 
                        // value=<%=order._id%> 
                        class="d-none" name="orderid" />
                        {/* <td> <button type="submit"  style={{border: 'none', backgroundColor: 'white', width: '50px', alignSelf: 'center' }}><i class="fa-solid fa-trash" style={{color: 'red', cursor: 'pointer'}}></i></button></td> */}
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

export default UserOrders