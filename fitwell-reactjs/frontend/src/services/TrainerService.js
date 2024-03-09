const { PUBLIC_SERVER_URL } = require("../api");

const host=PUBLIC_SERVER_URL

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
}

module.exports=new TrainerService();