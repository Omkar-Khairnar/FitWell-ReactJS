const Trainer=require('../models/Trainer')


class TrainerService{
    async createTrainer(reqData){
        try{
            const name=req.body.name;
            const email=req.body.email;
            const salary=req.body.salary;
            const gender=req.body.gender;
            const image=req.body.image;
            let trainer=await Trainer.create({
                name:name,
                email:email,
                salary:salary,
                image:image,
                gender:gender
            })
            if(!trainer){
                return {error:true, msg:"Internal Server Error"}
            }

            return {error:false, msg:'Trainer Added Successfully', data:trainer}
        }
        catch(error){
            return {error:true, msg:error.message}
        }
    }
    
    async deleteTrainer(reqData){
        try{
            const trainerid=reqData.trainerid;
            const trainer=await Trainer.findById(trainerid);
            if(!trainer){
                return {error:true, msg:'Trainer Not Exist'}
            }
            let deleted=await Trainer.findByIdAndDelete(trainerid);
            return  {error:false, msg:'Trainer Deleted Successfully', data:deleted}
        }
        catch(error){
            return {error:true, msg:error.message}
        }
    }

    async getAllTrainers(reqData){
        try{
            const trainers=await Trainer.find().sort({_id:-1});
            if(!trainers){
                return {error:true, msg:'Internal Server Error'};
            }

            return {error:false, msg:'Admins Fetched Successfully', data:trainers};
        }
        catch(error){
            return {error:true, msg:error.message}
        }
    }
    
}

module.exports=new TrainerService();