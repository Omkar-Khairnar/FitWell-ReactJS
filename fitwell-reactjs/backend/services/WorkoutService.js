const Workout = require('../models/HomeWorkout')


class WorkoutService{

    async getAllWorkouts(reqData){
        try{
            const workouts=await Workout.find().sort({_id:1});
            if(!workouts){
                return {error:true, msg:'Internal Server Error'};
            }

            return {error:false, msg:'Admins Fetched Successfully', data:workouts};
        }
        catch(error){
            return {error:true, msg:error.message}
        }
    }
    
}

module.exports=new WorkoutService();