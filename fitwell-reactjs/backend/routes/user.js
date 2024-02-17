const express=require('express')
const router=express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const UserServices = require('../services/UserServices')
require('dotenv').config()

router.post('/userLogin', async(req, res)=>{
    const response= await UserServices.userLogin(req.body);
    return res.send(response);
})

router.post('/createUser', async(req,res)=>{
    const response=await UserServices.createUser(req.body);
    return res.send(response) 
})

router.get('/getAllUsers', async(req,res)=>{
    const response=await UserServices.getAllUsers();
    return res.send(response);
})


module.exports=router;