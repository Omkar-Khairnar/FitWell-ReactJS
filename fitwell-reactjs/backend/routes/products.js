const express=require('express')
const router=express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const ProductServices = require('../services/ProductServices')
const upload = require('../middlewares/productMulter')
const fs = require('fs')
const path = require('path')
require('dotenv').config()

router.post('/getProducts', async(req,res)=>{
    const response=await ProductServices.getProducts();
    return res.send(response)
})
router.post('/getProductsList', async(req,res)=>{
    const response=await ProductServices.getProductsList();
    return res.send(response)
})
router.post('/deleteProduct', async(req,res)=>{
    const response=await ProductServices.deleteProduct(req.body);
    return res.send(response)
})
router.post('/getProductsSearchResult', async(req,res)=>{
    const response=await ProductServices.getProductsSearchResult(req.body);
    return res.send(response)
})

router.post('/addProduct', upload.single('productImage'), async(req, res)=>{
    try{
        let fileName = req.file ? req.file.filename : '';
        if(!fileName || fileName === undefined || fileName === ''){
            return res.send({error:true, msg:'File Upload Error'});
        }
        req.body.img={
            data: fs.readFileSync(path.join(__dirname + '/../uploads/products/' + req.file.filename)),
            contentType: 'image/png'
        }
        
        const response = await ProductServices.addProduct(req.body);
        return res.send(response);
    }
    catch(error){
        console.log(error);
        return {error:true, msg:error.message}
    }
})

module.exports=router;
