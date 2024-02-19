import React, { useEffect } from "react";
import "./Pricing.css";
import axios from "axios";

const Pricing = () => {
  useEffect(() => {
    // Load Razorpay library script
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const handlePayment = async (amount) => {
    try {
      // Send a request to your backend to create a Razorpay order
      const response = await axios.post(
        "http://localhost:5001/api/payments/create-order",
        {
          amount,
          currency: "INR",
        }
      );
      console.log(response);
      const { order_id } = await response.data;
      console.log(order_id);
      const options = {
        key: "rzp_test_9x6rezEARWbqRW",
        amount: amount * 100,
        currency: "INR",
        order_id,
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Error initiating payment:", error);
      alert("Error initiating Razorpay:");
    }
  };

  return (
    <div>
      <div className="container1Pricing my-0">
        <div className="titlePricing container my-0">
          <h3 id="title-0" className="my-3 pricingH2H3">
            OUR PLAN
          </h3>
          <h2 id="title-1" className="my-2 pricingH2H3">
            {" "}
            CHOOSE YOUR PRICING PLAN
          </h2>
        </div>
        <div className="price-row">
          <div className="price-col">
            <p>SINGLE CLASS</p>
            <h2 id="title">
              Class <br />
              Drop-in
            </h2>
            <h3 id="pri"> ₹ 4200 </h3>
            <ul>
              <li>Free riding</li>
              <li>Unlimited equipment</li>
              <li>Personal trainer</li>
              <li>Weight losing classes</li>
              <li>No time restriction</li>
            </ul>
            <button
              onClick={() => handlePayment(4200)}
              className="enrollNowButton"
              id="enroll1"
            >
              ENROLL NOW
            </button>
          </div>
          <div className="price-col">
            <p> ADVANCED </p>
            <h2 id="title">6 Month unlimited</h2>
            <h3 id="pri">₹ 5770 </h3>
            <ul>
              <li>Free riding</li>
              <li>Unlimited equipment</li>
              <li>Personal trainer</li>
              <li>Weight losing classes</li>
              <li>No time restriction</li>
            </ul>
            <button
              onClick={() => handlePayment(5770)}
              className="enrollNowButton"
              id="enroll"
            >
              ENROLL NOW
            </button>
          </div>
          <div className="price-col">
            <p>PREMIUM</p>
            <h2 id="title">12 Month unlimited</h2>
            <h3 id="pri">₹ 8400</h3>
            <ul>
              <li>Free riding</li>
              <li>Unlimited equipment</li>
              <li>Personal trainer</li>
              <li>Weight losing classes</li>
              <li>No time restriction</li>
            </ul>
            <button
              onClick={() => handlePayment(8400)}
              className="enrollNowButton"
              id="enroll"
            >
              ENROLL NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
