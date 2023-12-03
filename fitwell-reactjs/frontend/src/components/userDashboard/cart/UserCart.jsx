import React from "react";
import "../User_Dashboard.css";
import "./UserCart.css";

// import CheckOut from './CheckOut';
import {Link} from 'react-router-dom'
const UserCart = () => {
  return (
    <div
      class="dashboard-content"
      id="dashboard-review-page"
      style={{ backgroundColor: "white" }}
    >
      <div class="parent-container">
        <div class="cart-container">
          <table>
            <tr>
              <th class="userCartTH" style={{ width: "100%" }}>
                Product
              </th>
              <th class="userCartTH" style={{ width: "100%" }}>
                Category
              </th>
              <th class="userCartTH" style={{ width: "100%" }}>
                Subtotal
              </th>
            </tr>
            {/* <%let amount=0%> */}
            {/* <%for (var i = 0; i < products.length; i++) { %> */}
            <tr>
              <td>
                <div class="cart-info">
                  <div>
                    <img
                      className="userCartImg"
                      src="data:image/<%=products[i][0].img.contentType%>;base64, <%=products[i][0].img.data.toString('base64')%>"
                      alt=""
                    />
                    <h4>{/* <%=products[i][0].name%> */}</h4>

                    {/* <%amount=amount+products[i][0].price%> */}
                    <h5>
                      price :Rs
                      <span class="cart-product-price">
                        {/* <%=products[i][0].price%> */}
                      </span>
                    </h5>
                    <br />
                  </div>
                </div>
              </td>
              <td>{/* <%=products[i][0].category%> */}</td>
              <td>
                Rs
                {/* <%=products[i][0].price%> */}
              </td>
            </tr>
            {/* <%}%> */}
          </table>
        </div>

        <div class="total-price">
          <table class="UserCartTotalPrice">
            <tr>
              <th class="userCartTH" style={{ width: "100%" }} colspan="2">
                Price Details
              </th>
            </tr>
            <tr>
              <td>Sub total</td>
              <td>
                Rs
                {/* <%=amount%>.00 */}
              </td>
            </tr>
            <tr>
              <td>Discount 5%</td>
              <td>
                - Rs
                {/* <%=Math.floor((amount*5)/100)%> */}
                .00
              </td>
            </tr>
            <tr>
              <td>Delivery charges</td>
              <td>+ Rs80.00</td>
            </tr>
            <tr>
              <td>Total Amount</td>
              <td>
                = Rs
                {/* <%=amount -Math.floor((amount*5)/100) +80 %> */}
              </td>
              <br />
              <br />
            </tr>
            <td>
              <button
                type="button"
                id="checkbut"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                Check Out
              </button>
              {/* <CheckOut /> */}
            </td>
          </table>
        </div>
      </div>
      <Link id="back" tp="/Products">
        <h4>Continue Shopping</h4>
      </Link>
      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-body" style={{ backgroundColor: "white" }}>
              <section id="payment">
                <div class="container">
                  <div class="column-two">
                    <table class="details">
                      <tr class="last">
                        <th colspan="2">Review Your Details:</th>
                      </tr>
                      <tr>
                        <td>Name:</td>
                        <td>
                          <h5>{/* <%=userDetails.name%> */}</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>Amount:</td>
                        <td>
                          <i class="fi-xnsuxm-rupee"></i>
                          <h5>{/* Rs <%=amount%> */}</h5>{" "}
                        </td>
                      </tr>
                      <tr>
                        <td>Discount(5%):</td>
                        <td>
                          <i class="fi-xnsuxm-rupee"></i>
                          <h5>
                            - Rs
                            {/* <%=Math.floor((amount*5)/100)%> */}
                          </h5>{" "}
                        </td>
                      </tr>
                      <tr>
                        <td>Delivery Charges:</td>
                        <td>
                          <i class="fi-xnsuxm-rupee"></i>
                          <h5>+ Rs 80</h5>
                        </td>
                      </tr>

                      <tr class="last">
                        <td>Total Amount:</td>
                        {/* <%let finalamount= amount -Math.floor((amount*5)/100) +80  %> */}
                        <td>
                          <i class="fi-xnsuxm-rupee"></i>
                          <h4>
                            {/* Rs<%=amount -Math.floor((amount*5)/100) +80 %> */}
                          </h4>
                        </td>
                      </tr>
                    </table>

                    <table class="payment-method">
                      <tr class="last">
                        <th>Enter Address and Payment Method:</th>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="radio"
                            name="payment-method"
                            id="payment-method"
                          />
                          <label for="payment-method">
                            Net Banking/Credit/Debit Card
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          NOTE: After clicking the "Sure, Get me Started" button
                          below, your order will be placed.
                        </td>
                      </tr>
                      <form method="post" action="/useractions/checkoutcart">
                        <tr>
                          <td>
                            <label for="address">Enter Address</label>
                            <input
                              type="text"
                              id="address"
                              name="address"
                              placeholder="Enter Delivery Address"
                              style={{ width: "max-content", height: "30px" }}
                            />
                          </td>
                        </tr>
                        <input
                          type="number"
                          class="d-none"
                          name="finalamount"
                          value="<%=finalamount%>"
                        />
                        <tr>
                          <td>
                            <button
                              class="btn"
                              type="submit"
                              style={{
                                height: "30px",
                                backgroundColor: "orange",
                                fontSize: "larger",
                                paddingBottom: "40px",
                              }}
                            >
                              Confirm Order
                            </button>
                          </td>
                        </tr>
                      </form>
                    </table>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <Link id="back" to="./products">
            <h4>Continue Shopping</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserCart;
