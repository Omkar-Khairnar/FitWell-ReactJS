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
    const response=await UserActionServices.putReview(req);
    return res.send(response);
})

router.post('/addtocart', async(req,res)=>{
    const response=await UserActionServices.addToCart(req);
    return res.send(response);
})

router.post('/checkoutcart', async(req,res)=>{
    const response=await UserActionServices.checkoutcart(req);
    return res.send(response);
})

router.post('/updateprofile', async(req,res)=>{
    const response=await UserActionServices.updateProfile(req);
    return res.send(response);
})