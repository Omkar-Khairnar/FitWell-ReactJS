const host="http://localhost:5001"

class AdminAction{
    async getAllAdminTrainerList(){
        const response= await fetch(`${host}/api/adminTrainer/getAllAdminTrainer`, {
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

    async getAllAdminPayment(){
        const response= await fetch(`${host}/api/adminPayment/getAllAdminPayment`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
            }),
        })
        const json = await response.json();
        console.log("🚀 ~ file: AdminActions.js:27 ~ AdminAction ~ getAllAdminPayment ~ json:", json)
        return json;
    }
    
    async getAllAdminFeedback(){
        const response= await fetch(`${host}/api/adminFeedback/getAllAdminFeedback`, {
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
    
    
    async getAllAdminCustomer(){
        const response= await fetch(`${host}/api/adminCustomer/getAllAdminCustomer`, {
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
    
    
    async getAllAdminOrder(){
        const response= await fetch(`${host}/api/adminOrder/getAllAdminOrder`, {
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

module.exports=new AdminAction();