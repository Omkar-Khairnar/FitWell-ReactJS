import React from "react";
import { useEffect } from "react";
import { loadScript, createOrder } from "./razorpayUtils";

const RazorpayPayment = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        await loadScript();

        const orderData = await createOrder();

        const options = {
          key: "rzp_test_9x6rezEARWbqRW",
          amount: orderData.amount,
          currency: "INR",
          order_id: orderData.id,
          name: "Your Company Name",
          description: "Product Description",
          handler: function (response) {
            console.log("Payment successful:", response);
          },
          prefill: {
            name: "Customer Name",
            email: "customer@example.com",
            contact: "1234567890",
          },
          theme: {
            color: "#3399cc",
          },
        };
        const razorpay = new window.Razorpay(options);
        razorpay.open();
      } catch (error) {
        console.error("Error loading Razorpay:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Razorpay Payment</h1>
    </div>
  );
};

export default RazorpayPayment;
