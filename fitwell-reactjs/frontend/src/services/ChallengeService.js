const host="http://localhost:5001"

class ChallengeService{
    //Getting all challenges
    async getAllChallenge(){
        const response= await fetch(`${host}/api/challenge/getAllChallenges`, {
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

    async uploadChallenge(reqData){
        console.log(reqData);
        const response= await fetch(`${host}/api/challenge/uploadChallenge`, {
            method:'POST',
            body:reqData
        })
        const json = await response.json();
        return json;
    }
}

module.exports=new ChallengeService();