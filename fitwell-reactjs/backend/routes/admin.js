const express=require('express')
const router=express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const AdminServices = require('../services/AdminServices')
require('dotenv').config()

router.post('/adminLogin', async(req, res)=>{
    const response= await AdminServices.adminLogin(req.body);
    return res.send(response);
})

router.post('/createAdmin', async(req,res)=>{
    const response=await AdminServices.createAdmin(req.body);
    return res.send(response)
})

router.post('/getAllAdmins', async(req,res)=>{
    const response=await AdminServices.getAllAdmins(req.body);
    return res.send(response);
})

module.exports=router;