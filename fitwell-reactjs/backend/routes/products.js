const express=require('express')
const router=express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const ProductServices = require('../services/ProductServices')
require('dotenv').config()

router.post('/getProducts', async(req,res)=>{
    const response=await ProductServices.getProducts();
    return res.send(response)
})

module.exports=router;
