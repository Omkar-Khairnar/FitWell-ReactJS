import React, { useEffect, useState } from "react";
import "../User_Dashboard.css";
import "./UserCart.css";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import UserActionService from "../../../services/UserActionService";
import LoaderComp from "../../Loader";
import { Buffer } from "buffer";

const UserCart = (props) => {
  const {setmyAlert} = props;
  const [data, setData] = useState([]); // eslint-disable-line
  const [productID, setProductID] = useState([])
  const [totalAmount, setTotalAmount] = useState(0); // eslint-disable-line
  const userDetails = useSelector((state) => state.user.userDetails);
  const isLoggedIn=useSelector(state => state.user.isLoggedIn)
  const [isLoading, setIsloading] = useState(false);
  const navigate = useNavigate();

  const calculateAmount = () => {
    let sum = 0;
      data.forEach((item) => {
        sum += parseInt(item.product.price);
      });
    setTotalAmount(sum);
  };

  const getCartProducts = async () => {
    setIsloading(true);
    const userid = userDetails._id;
    const res = await UserActionService.getUserCartProducts({ userid: userid });
    if (!res.error) {
      setData(res.data);
    }
    setIsloading(false);
  };

  const checkOutCart = async() =>{
    if(data != null && data !== undefined){
       data.forEach((item)=>{
         productID.push(item.product._id)
         setProductID([...productID])
      })
      const res = await UserActionService.checkOutCart({
        userid:userDetails._id,
        finalamount:totalAmount,
        address:'',
        data:productID,
      })
      if(!res.error){
        setTotalAmount(0);
        setData([]);
      }
      setProductID([]);
      setmyAlert(res.msg, res.error ? 'error' : 'success');
    }
  }

  const handleCheckOutCart = () => {
    checkOutCart();
  };

  useEffect(() => {
    getCartProducts();
  }, []);

  useEffect(()=>{
    calculateAmount();
  },[data]) //eslint-disable-line

  //Checking User LoggedIn or Session Expired;
  const checkUserLoggedIn=()=>{
    if(isLoggedIn === false || userDetails ===null){
      navigate('../UserSignIn')
      // alert('User Session Expired. Please Login Again') 
    }
  }
  useEffect(()=>{
    checkUserLoggedIn();
  },[])

  return (
    <div
      class="dashboard-content"
      id="dashboard-review-page"
      style={{ backgroundColor: "white" }}
    >
      {isLoading ? (
        <LoaderComp />
      ) : (
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
              {data &&
                data !== null &&
                data.map((item) => (
                  <tr>
                    <td>
                      <div class="cart-info">
                        <div>
                          <img
                            className="userCartImg"
                            src={`data:image/${
                              item.product.img.contentType
                            };base64,${Buffer.from(
                              item.product.img.data
                            ).toString("base64")}`}
                            alt=""
                          />
                          <h4>{item.product.name}</h4>
                          <h5>
                            price :Rs
                            <span class="cart-product-price">
                              {item.product.price}
                            </span>
                          </h5>
                          <br />
                        </div>
                      </div>
                    </td>
                    <td>{item.product.category}</td>
                    <td>
                      Rs
                      {item.product.price}
                    </td>
                  </tr>
                ))}
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
                <td style={{ marginLeft: "10px" }}>Sub total</td>
                <td>
                  Rs
                  {totalAmount}
                </td>
              </tr>
              <tr>
                <td style={{ marginLeft: "10px" }}>Discount 5%</td>
                <td>
                  - Rs
                  {Math.floor((totalAmount * 5) / 100)}
                  .00
                </td>
              </tr>
              <tr>
                <td style={{ marginLeft: "10px" }}>Delivery charges</td>
                <td>+ Rs80.00</td>
              </tr>
              <tr>
                <td style={{ marginLeft: "10px" }}>Total Amount</td>
                <td>
                  = Rs
                  {totalAmount - Math.floor((totalAmount * 5) / 100) + 80}
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
                  onClick={() => {
                    handleCheckOutCart();
                  }}
                >
                  Check Out
                </button>
              </td>
            </table>
          </div>
        </div>
      )}

      <Link id="back" to="/Products">
        <h4>Continue Shopping</h4>
      </Link>
    </div>
  );
};

export default UserCart;
