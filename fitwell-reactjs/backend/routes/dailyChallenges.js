const express=require('express')
const router=express.Router()
const ChallengeService = require('../services/ChallengeService');
require('dotenv').config()



router.post('/getAllChallenges', async(req,res)=>{
  const response=await ChallengeService.getAllChallenges(req.body);
  return res.send(response);
})



module.exports=router;