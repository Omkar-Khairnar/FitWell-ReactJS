const express=require('express')
const router=express.Router()
const ReviewService = require('../services//ReviewService')
require('dotenv').config()


router.post('/getAllReviews', async(req,res)=>{
    const response=await ReviewService.getAllReviews();
    return res.send(response);
})


module.exports=router