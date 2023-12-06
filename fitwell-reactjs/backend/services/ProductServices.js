const ProductSchema=require('../models/product');

class ProductServices{

    //getting products for landing home page based on categories;
    async getProducts(){
        try{
            const LatestCategory = await ProductSchema.find().sort({ _id: -1 }).limit(15);
            const NutrientsCategory = await ProductSchema.find({ category: 'Nutrients' }).limit(20);
            const ProteinCategory = await ProductSchema.find({ category: 'Whey Proteins' }).limit(20);
            const EnergyCategory = await ProductSchema.find({ category: 'Energy & Endurance' }).limit(15);
            const RecoveryCategory = await ProductSchema.find({ category: 'Recovery & Repair' }).limit(13); 

            return {error:false, msg:'Products Fetched Successfully', data:{
                LatestCategory,
                NutrientsCategory,
                ProteinCategory,
                EnergyCategory,
                RecoveryCategory
            }}
        }
        catch(error){
            return {error:true, msg:error.message}
        }
    }

}

module.exports=new ProductServices();
