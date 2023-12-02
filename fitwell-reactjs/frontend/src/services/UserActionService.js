const host="http://localhost:5001"

class UserActionService{

    //Submiiting Contact Form
    async contactUs(reqData){
        const response= await fetch(`${host}/api/userActions/contactus`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(reqData),
        })
        const json = await response.json();
        return json;
    }
}

module.exports=new UserActionService();