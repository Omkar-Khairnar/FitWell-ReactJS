const express=require('express')
const router=express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const OrderService = require('../services/OrderService')
const AdminServices = require('../services/AdminServices')
require('dotenv').config()


router.post('/createOrder', async(req,res)=>{ 
    const response=await OrderService.createOrder(req.body);
    return res.send(response);
})


router.post('/deleteOrder', async(req,res)=>{
    const response=await OrderService.deleteOrder(req.body);
    return res.send(response);
})

router.post('/getUserOrders', async(req,res)=>{
    const response = await OrderService.getUserOrders(req.body);
    return res.send(response)
})


module.exports=router