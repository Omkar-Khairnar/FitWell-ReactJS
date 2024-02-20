const express=require('express')
const router=express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const UserActionServices = require('../services/UserActionServices')
require('dotenv').config()

router.post('/contactus', async(req,res)=>{
    const response=await UserActionServices.contactUs(req.body);
    return res.send(response);
})

router.post('/putReview', async(req,res)=>{
    const response=await UserActionServices.putReview(req.body);
    return res.send(response);
})

router.post('/addtocart', async(req,res)=>{
    const response=await UserActionServices.addToCart(req.body);
    return res.send(response);
})

router.post('/checkoutcart', async(req,res)=>{
    const response=await UserActionServices.checkoutcart(req.body);
    return res.send(response);
})

router.post('/updateprofile', async(req,res)=>{
    const response=await UserActionServices.updateProfile(req.body);
    return res.send(response);
})

//getting particular user payments
router.post('/get-user-payments', async(req,res)=>{
    const response=await UserActionServices.getUserPayments(req.body);
    return res.send(response);
})

//getting particular user cart products
router.post('/get-user-cart-products', async(req,res)=>{
    const response=await UserActionServices.getUserCartProducts(req.body);
    return res.send(response);
})

module.exports=router;