const express=require('express')
const router=express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const UserServices = require('../services/UserServices')
require('dotenv').config()
const upload= require('../middlewares/multer.js')

router.post('/userLogin', async(req, res)=>{
    const response= await UserServices.userLogin(req.body);
    return res.send(response);
})

router.post('/createUser', upload.single('image') ,async(req,res)=>{
    req.body.image =req.file.path.replace(/\\/g, '/');
    console.log(req.body.image);
    const response=await UserServices.createUser(req.body);
    return res.send(response); 
})

router.get('/getAllUsers', async(req,res)=>{
    const response=await UserServices.getAllUsers(); 
    return res.send(response);
})


module.exports=router;