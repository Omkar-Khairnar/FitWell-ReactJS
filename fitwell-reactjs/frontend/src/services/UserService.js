const host="http://localhost:5001"

class UserService{

    //Login into account
    async userLogin(reqData){
        const response= await fetch(`${host}/api/userAuth/userLogin`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(reqData),
        })
        const json = await response.json();
        return json;
    }


    //Creating User Account
    async createUser(reqData){
        console.log(reqData);
        const response= await fetch(`${host}/api/userAuth/createUser`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(reqData),
        })
        const json = await response.json();
        return json;
    }


    //Get All list of Users
    async getAllUsers(){
        const response= await fetch(`${host}/api/userAuth/getAllUsers`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({}),
        })
        const json = await response.json();
        return json;
    }


}

module.exports=new UserService();