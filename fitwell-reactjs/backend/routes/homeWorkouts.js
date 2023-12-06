const express=require('express')
const router=express.Router()
const WorkoutService = require('../services/WorkoutService')
require('dotenv').config()



router.post('/getAllWorkouts', async(req,res)=>{
  const response=await WorkoutService.getAllWorkouts(req.body);
  return res.send(response);
})



module.exports=router;