import React from 'react'
import "../User_Dashboard.css";

const UserCart = () => {
  return (
    <div class="dashboard-content" id="dashboard-review-page">
          <div class="parent-container">
            <div class="cart-container">
              <table>
                <tr>
                  <th>Product</th>
                  <th>Category</th>
                  <th>Subtotal</th>
                </tr>
                {/* <%let amount=0%> */}
                {/* <%for (var i = 0; i < products.length; i++) { %> */}
                  <tr>
                    <td>
                      <div class="cart-info">
                        <div>
                          <img src="data:image/<%=products[i][0].img.contentType%>;base64, <%=products[i][0].img.data.toString('base64')%>" alt=""/>
                          <h4>
                            {/* <%=products[i][0].name%> */}
                            </h4>
                          
                          {/* <%amount=amount+products[i][0].price%> */}
                          <h5>price :Rs<span class="cart-product-price">
                            {/* <%=products[i][0].price%> */}
                            </span></h5><br />
                        </div>
                      </div>
                    </td>
                    <td>
                      {/* <%=products[i][0].category%> */}
                      </td>
                    <td>Rs
                      {/* <%=products[i][0].price%> */}
                      </td>
                  </tr>
                {/* <%}%> */}
              </table>
            </div> 

            <div class="total-price">
              <table>
                <tr>
                  <th colspan="2">Price Details</th>
                </tr>
                <tr>
                  <td>Sub total</td>
                  <td>Rs
                    {/* <%=amount%>.00 */}
                    </td>
                </tr>
                <tr>
                  <td>Discount 5%</td>
                  <td>- Rs
                    {/* <%=Math.floor((amount*5)/100)%> */}
                    .00</td>
                </tr>
                <tr>
                  <td>Delivery charges</td>
                  <td>+ Rs80.00</td>
                </tr>
                <tr>
                  <td>Total Amount</td>
                  <td>= Rs
                    {/* <%=amount -Math.floor((amount*5)/100) +80 %> */}
                    </td>
                  <br /><br />
                </tr>
                <td>
                  <button type="button" id="checkbut" class="btn btn-primary" data-toggle="modal"
                    data-target="#exampleModalCenter">Check Out</button>
                </td>
              </table>
            </div>
          </div>
          <a id="back" href="./products">
            <h4>Continue Shopping</h4>
          </a>
        </div>
  )
}

export default UserCart