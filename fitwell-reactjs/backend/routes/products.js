const express=require('express')
const router=express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const ProductServices = require('../services/ProductServices')
const upload = require('../middlewares/productMulter')
const {getRedisCachedProducts} = require('../middlewares/redisMiddlewares/getCachedProducts.js')
const fs = require('fs')
const path = require('path')
const redis = require('../utils/redis') 
require('dotenv').config()

router.post('/getProducts', getRedisCachedProducts, async(req,res)=>{
    if(req.cachedProducts !== null && req.cachedProducts !== undefined){
        const response =  {
            error: false, 
            msg: 'Products Fetched Successfully', 
            data: {
                LatestCategory:req.cachedProducts.LatestCategory,
                NutrientsCategory:req.cachedProducts.NutrientsCategory,
                ProteinCategory:req.cachedProducts.ProteinCategory,
                EnergyCategory:req.cachedProducts.EnergyCategory,
                RecoveryCategory:req.cachedProducts.RecoveryCategory,        
            }
        }

        return res.send(response);
    }
    else{
        const response=await ProductServices.getProducts();
        if(!response.error){
            const parsedData = await JSON.stringify(response.data)
            await redis.set('products', parsedData, 'EX', 3000);
        }
        return res.send(response)
    }
})

// router.post('/getCachedData', async(req,res)=>{
//     const data = await redis.get('products');
//     if(data != null){
//         data = JSON.parse(data.LatestCategory);
//         return res.send(data);
//     }
//     else{
//         return res.send("Nhi mila cache mein");
//     }
// })

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
