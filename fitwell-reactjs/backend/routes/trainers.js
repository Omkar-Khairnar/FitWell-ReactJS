const express=require('express')
const router=express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const TrainerService = require('../services/TrainerService')
require('dotenv').config()


router.post('/createTrainer', async(req, res)=>{
    const response=await TrainerService.createTrainer(req.body);
    return res.send(response); 
})


router.post('/deleteTrainer', async(req, res)=>{
    const response=await TrainerService.deleteTrainer(req.body);
    return res.send(response); 
})

router.post('/getAllTrainers', async(req,res)=>{
    const response=await TrainerService.getAllTrainers(req.body);
    return res.send(response);
})


module.exports=router;