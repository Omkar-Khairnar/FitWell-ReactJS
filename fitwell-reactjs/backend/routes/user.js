const express=require('express')
const router=express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const UserServices = require('../services/UserServices')
require('dotenv').config()
const multer = require('multer')
const upload= require('../middlewares/multer.js')


router.post('/userLogin', async(req, res)=>{
    const response= await UserServices.userLogin(req.body);
    return res.send(response);
})

router.post('/updateDate', async(req, res)=>{
    const response= await UserServices.updateDate(req.body);
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

router.use((err, req, res, next) =>{
    if (err instanceof multer.MulterError) {
        // Multer error occurred
        console.error(err.stack);
        res.status(400).send('Multer error: ' + err.message);
      } else {
        // Other types of errors
        console.error(err.stack);
        res.status(500).send('Something broke!');
      }
})


module.exports=router;