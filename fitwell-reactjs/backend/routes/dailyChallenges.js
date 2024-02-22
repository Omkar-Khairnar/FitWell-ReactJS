const express=require('express')
const router=express.Router()
const ChallengeService = require('../services/ChallengeService');
require('dotenv').config()
const upload = require('../middlewares/challengesMulter')
const fs=require('fs')
const path = require('path')

router.post('/getAllChallenges', async(req,res)=>{
  const response=await ChallengeService.getAllChallenges(req.body);
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