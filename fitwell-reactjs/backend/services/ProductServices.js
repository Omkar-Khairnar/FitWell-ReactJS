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

    async getProductsSearchResult(reqData) {
        try {
            // console.log("🚀 ~ ProductServices ~ getProductsSearchResult ~ reqData:", reqData)

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

}

module.exports = new ProductServices();
