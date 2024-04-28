const express=require('express')
const router=express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const UserActionServices = require('../services/UserActionServices')
require('dotenv').config()
const upload = require('../middlewares/multer.js')
const path =require('path')
const cloudinary = require('../utils/cloudinary.js')


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


router.post('/updateprofile', upload.single('image'), async (req, res) => {
    try {
      if(req.file !== undefined && req.file !== null && req.file.path !== null && req.file.path !== undefined){
        const result = await cloudinary.uploader.upload(req.file.path);  
        req.body.image = result.secure_url;
      }  
      const response = await UserActionServices.updateProfile(req.body);
      return res.send(response);
    } catch (error) {
      console.error('Error uploading image and updating profile:', error);
      return res.status(500).json({ success: false, message: 'Server error' });
    }
});

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