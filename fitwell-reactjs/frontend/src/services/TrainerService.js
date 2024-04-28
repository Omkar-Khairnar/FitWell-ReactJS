const host="http://localhost:5001"

class TrainerService{
    //Getting all trainers
    async getAllTrainers(){
        const response= await fetch(`${host}/api/trainer/getAllTrainers`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
            }),
        })
        const json = await response.json();
        return json;
    }
    async addTrainer(reqData){
        console.log("🚀 ~ TrainerService ~ addTrainer ~ reqData:", reqData)
        const response= await fetch(`${host}/api/trainer/createTrainer`, {
            method:'POST',
            body:reqData,
        })
        
        const json = await response.json();
        return json;
    }
}

module.exports=new TrainerService();