const express = require('express');
const router = express.Router();
const Razorpay = require('razorpay');
const razorpayPayments = require('../models/razorpayPayments');
const connectDB = require('../db');
require('dotenv').config();

const razorpay = new Razorpay({
  key_id: "rzp_test_9x6rezEARWbqRW",
  key_secret: "kfEoV4dVNKGsJS2Lp2u5u5bQ",
});

connectDB();

router.post('/create-order', async (req, res) => {
  try {
    // console.log('Request body:', req.body);

    const { amount, currency } = req.body;

    const options = {
      amount,
      currency,
      receipt: 'receipt#1',
      payment_capture: 1,
    };

    const order = await razorpay.orders.create(options);
    // console.log(order)

    const newOrder = new razorpayPayments({
      orderId: order.id,
      amount,
      currency
    });
    
    await newOrder.save();
    res.json({ order_id: order.id });
  } catch (error) {
    console.error('Error creating payment order:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
