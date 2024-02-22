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
router.post('/getProductsList', async(req,res)=>{
    const response=await ProductServices.getProductsList();
    return res.send(response)
})
router.post('/deleteProduct', async(req,res)=>{
    const response=await ProductServices.deleteProduct(req.body);
    // console.log("🚀 ~ router.post ~ req.body:", req.body)
    return res.send(response)
})
router.post('/getProductsSearchResult', async(req,res)=>{
    const response=await ProductServices.getProductsSearchResult(req.body);
    console.log("🚀 ~ router.post ~ response:", response)
    return res.send(response)
})

module.exports=router;
