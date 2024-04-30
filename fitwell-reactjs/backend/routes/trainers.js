const express=require('express')
const router=express.Router()

const TrainerService = require('../services/TrainerService')
require('dotenv').config()

/**
 * @swagger
 * /api/trainer/createTrainer:
 *   post:
 *     summary: Create a trainer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Trainer added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                 msg:
 *                   type: string
 *                 data:
 *                   type: object
 */
router.post('/createTrainer', async(req, res)=>{
    // console.log("backend : welcome", req.body);
    const response=await TrainerService.createTrainer(req.body);
    return res.send(response); 
})

/**
 * @swagger
 * /api/trainer/deleteTrainer:
 *   post:
 *     summary: Delete a trainer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               trainerid:
 *                 type: string
 *     responses:
 *       200:
 *         description: Trainer deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                 msg:
 *                   type: string
 *                 data:
 *                   type: object
 */
router.post('/deleteTrainer', async(req, res)=>{
    const response=await TrainerService.deleteTrainer(req.body);
    return res.send(response); 
})

/**
 * @swagger
 * /api/trainer/getAllTrainers:
 *   post:
 *     summary: Get all trainers
 *     requestBody:
 *       required: false
 *     responses:
 *       200:
 *         description: Trainers fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                 msg:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 */
router.post('/getAllTrainers', async(req,res)=>{
    const response=await TrainerService.getAllTrainers(req.body);
    return res.send(response);
})


module.exports=router;