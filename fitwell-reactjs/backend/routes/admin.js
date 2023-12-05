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

router.post('/getAllAdminTrainer', async(req,res)=>{
    const response=await AdminServices.getAllAdminTrainer(req.body);
    return res.send(response);
})

router.post('/getAllAdminPayment', async(req,res)=>{
    const response=await AdminServices.getAllAdminPayment(req.body);
    return res.send(response);
})


router.post('/getAllAdminCustomer', async(req,res)=>{
    const response=await AdminServices.getAllAdminCustomer(req.body);
    return res.send(response);
})

router.post('/getAllAdminFeedback', async(req,res)=>{
    const response=await AdminServices.getAllAdminFeedback(req.body);
    return res.send(response);
})

router.post('/getAllAdminOrder', async(req,res)=>{
    const response=await AdminServices.getAllAdminOrder(req.body);
    return res.send(response);
})


module.exports=router;