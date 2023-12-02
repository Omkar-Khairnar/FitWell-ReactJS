const OrderSchema=require('../models/Order');

class OrderService{

    async createOrder(reqData){
        try{
            if(reqData.userid === undefined || reqData.userid===''){
                return {error:true, msg:'User Not Defined. Please Login'}
            }

            const order=await OrderSchema.create({
                userid:userid,
                name:reqData.name,
                image:reqData.img,
                amount:reqData.amount,
                description:reqData.description,
                address:reqData.address
            })

            if(!order){
                return {error:true, msg:'Internal Server Error'}
            }

            return {error:false, msg:'Order Created Successfully', data:order};
        }
        catch(error){
            return {error:true, msg:error.message}
        }
    }

    async deleteOrder(reqData){
        try{
            const orderid=reqData.orderid;
            const order= await OrderSchema.findByIdAndDelete(orderid);

            if(!order){
                return {error:true, msg:'Internal Server Error'}
            }

            return {error:false, msg:'Order Deleted Successfully', data:order};
        }
        catch(error){
            return {error:true, msg:error.message}
        }
    }
}

module.exports=new OrderService();