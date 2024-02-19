const express = require('express');
const router = express.Router();
const Razorpay = require('razorpay');
const Order = require('../models/orderModel');
const connectDB = require('../db');
require('dotenv').config();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

connectDB();

router.post('/create-order', async (req, res) => {
  try {
    console.log('Request body:', req.body);

    const { amount, currency } = req.body;

    const options = {
      amount,
      currency,
      receipt: 'receipt#1',
      payment_capture: 1,
    };

    const order = await razorpay.orders.create(options);

    const newOrder = new Order({
      orderId: order.id,
      amount,
      currency,
    });
    await newOrder.save();

    res.json({ order_id: order.id });
  } catch (error) {
    console.error('Error creating payment order:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
