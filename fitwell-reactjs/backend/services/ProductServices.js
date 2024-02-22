const ProductSchema = require('../models/product');

class ProductServices {

    //getting products for landing home page based on categories;
    async getProducts() {
        try {
            const LatestCategory = await ProductSchema.find().sort({ _id: -1 }).limit(15);
            const NutrientsCategory = await ProductSchema.find({ category: 'Nutrients' }).limit(20);
            const ProteinCategory = await ProductSchema.find({ category: 'Whey Proteins' }).limit(20);
            const EnergyCategory = await ProductSchema.find({ category: 'Energy & Endurance' }).limit(15);
            const RecoveryCategory = await ProductSchema.find({ category: 'Recovery & Repair' }).limit(13);
            return {
                error: false, msg: 'Products Fetched Successfully', data: {
                    LatestCategory,
                    NutrientsCategory,
                    ProteinCategory,
                    EnergyCategory,
                    RecoveryCategory
                }
            }
        }
        catch (error) {
            return { error: true, msg: error.message }
        }
    }

    async getProductsList() {
        try {

            const ourProducts = await ProductSchema.find().sort({ id: 1 });
            // const countCategory = {
            //     proteinCount : 0,
            //     energyCount : 0,
            //     repairCount : 0,
            //     nutrientsCount : 0,
            // }
            // const totalProducts = 0;

            // proteinQuery = {category: 'Whey Proteins' };
            // countCategory.proteinCount = await ProductSchema.find(proteinQuery).count();

            // energyQuery = {category: 'Energy & Endurance' };
            // countCategory.energyCount = await ProductSchema.find(energyQuery).count();

            // repairQuery = {category: 'Recovery & Repair' };
            // countCategory.repairCount = await ProductSchema.find(repairQuery).count();

            // nutrientsQuery = {category: 'Nutrients' };
            // countCategory.nutrientsCount = await ProductSchema.find(nutrientsQuery).count();

            // totalProducts = await ProductSchema.count();

            return {
                error: false, msg: 'ProductsList Fetched Successfully', data: {
                    ourProducts
                    // countCategory, 
                    // totalProducts
                }
            }
        }
        catch (error) {
            return { error: true, msg: error.message }
        }
    }

    async deleteProduct(reqData) {
        try {
            const id = reqData.productId;
            // console.log("🚀 ~ ProductServices ~ deleteProduct ~ id:", id)
            const product = await ProductSchema.findByIdAndDelete(id);

            if (!product) {
                return { error: true, msg: 'Internal Server Error' }
            }

            return { error: false, msg: 'Product Deleted Successfully', data: product };
        }
        catch (error) {
            console.log("🚀 ~ ProductServices ~ deleteProduct ~ error:", error)
            return { error: true, msg: error.message }
        }
    }

    async getProductsSearchResult(reqData) {
        try {
            const filter = reqData.filter;
            const search = reqData.search;
            var searchResult;
            var searchResultCount;
            var searchQuery;

            if (filter == 'pricelow' || filter == "") {
                searchQuery = { name: { $regex: search, $options: 'i' } };
                searchResult = await ProductSchema.find(searchQuery).sort({ price: 1 });
                searchResultCount = await ProductSchema.find(searchQuery).sort({ price: 1 }).count();
            } else if (filter == 'pricehigh') {
                searchQuery = { name: { $regex: search, $options: 'i' } };
                searchResult = await ProductSchema.find(searchQuery).sort({ price: -1 });
                searchResultCount = await ProductSchema.find(searchQuery).sort({ price: -1 }).count();
            } else if (filter == 'energy') {
                searchQuery = { name: { $regex: search, $options: 'i' }, category: 'Energy & Endurance' };
                searchResult = await ProductSchema.find(searchQuery);
                searchResultCount = await ProductSchema.find(searchQuery).count();
            } else if (filter == 'nutrients') {
                searchQuery = { name: { $regex: search, $options: 'i' }, category: 'Nutrients' };
                searchResult = await ProductSchema.find(searchQuery);
                searchResultCount = await ProductSchema.find(searchQuery).count();
            } else if (filter == 'repair') {
                searchQuery = { name: { $regex: search, $options: 'i' }, category: 'Recovery & Repair' };
                searchResult = await ProductSchema.find(searchQuery);
                searchResultCount = await ProductSchema.find(searchQuery).count();
            } else {
                searchQuery = { name: { $regex: search, $options: 'i' }, category: 'Whey Proteins' };
                searchResult = await ProductSchema.find(searchQuery);
                searchResultCount = await ProductSchema.find(searchQuery).count();
            }
            return {
                error: false, msg: 'Products Fetched Successfully', data: {
                    searchResult,
                    searchResultCount,
                    search,
                    filter
                }
            }
        } catch (error) {
            return { error: true, msg: error.message }
        }
    };

    async addProduct(reqData){
        try{
            if(!reqData.img){
                return {error:true, msg:'Image Parsing Error'};
            }

            const res = await ProductSchema.create(reqData);

            if(!res){
                return {error:true, msg:'Internal Server Error'};
            }

            return {error:false, msg:'Product added successfully', data:{}}
        } catch (error) {
            return { error: true, msg: error.message }
        }

    }

}

module.exports = new ProductServices();
