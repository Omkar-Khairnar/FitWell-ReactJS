const Challenge = require('../models/Challenges')


class ChallengeService{

    async getAllChallenges(reqData){
        try{
            const challenges=await Challenge.find().sort({_id:1});
            if(!challenges){
                return {error:true, msg:'Internal Server Error'};
            }

            return {error:false, msg:'Admins Fetched Successfully', data:challenges};
        }
        catch(error){
            return {error:true, msg:error.message}
        }
    }
    
}

module.exports=new ChallengeService();