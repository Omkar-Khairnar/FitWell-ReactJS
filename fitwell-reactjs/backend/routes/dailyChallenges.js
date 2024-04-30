const express=require('express')
const router=express.Router()
const ChallengeService = require('../services/ChallengeService');
require('dotenv').config()
const upload = require('../middlewares/challengesMulter')
const fs=require('fs')
const path = require('path')
const redis = require('../utils/redis') 
const {getRedisCachedChallenges} = require('../middlewares/redisMiddlewares/getCachedChallenges.js')

router.post('/getAllChallenges', getRedisCachedChallenges, async(req,res)=>{
  if(req.cachedChallenges !== null && req.cachedChallenges !== undefined){
    const response =  {
        error: false, 
        msg: 'Products Fetched Successfully', 
        data: req.cachedChallenges
    }
    return res.send(response);
  }
  else{
    const response=await ChallengeService.getAllChallenges(req.body);
    if(!response.error){
      const parsedData = await JSON.stringify(response.data)
      await redis.set('challenges', parsedData, 'EX', 3000);
    }
    return res.send(response);
  }
})


router.post('/deleteChallenge', async(req,res)=>{
  const response=await ChallengeService.deleteChallenge(req.body);
  return res.send(response);
})

router.post('/uploadChallenge',upload.single('challengeImg'), async(req, res)=>{
  try{
    let fileName = req.file ? req.file.filename : '';
    if(!fileName || fileName === undefined || fileName === ''){
        return res.send({error:true, msg:'File Upload Error'});
    }
    req.body.img={
      data: fs.readFileSync(path.join(__dirname + '/../uploads/challenges/' + fileName)),
      contentType: 'image/png'
    }
    // console.log(req.body);
    const response = await ChallengeService.addChallenge(req.body);
    console.log(response);
    return res.send(response);
  }
  catch(err){
    console.log(err);
    return {error:true, msg:err.message}
  }
})





module.exports=router;