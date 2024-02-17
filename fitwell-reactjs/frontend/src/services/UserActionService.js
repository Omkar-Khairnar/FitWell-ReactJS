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

    //Updating User Profile
    async updateProfile(reqData){
        const response= await fetch(`${host}/api/userActions/updateProfile`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(reqData),
        })
        const json = await response.json();
        return json;
    }
    
    //Putting a review
    async putReview(reqData){
        const response= await fetch(`${host}/api/userActions/putReview`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(reqData),
        })
        const json = await response.json();
        return json;
    }

    //Getting Particular User Payment
    async getUserPayments(reqData){
        const response= await fetch(`${host}/api/userActions/get-user-payments`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(reqData),
        })
        const json = await response.json();
        return json;
    }

    //async addToCart
    async addToCart(reqData){
        const response= await fetch(`${host}/api/userActions/addtocart`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(reqData),
        })
        const json = await response.json();
        return json;
    }

    async getUserCartProducts(reqData){
        const response= await fetch(`${host}/api/userActions/get-user-cart-products`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(reqData),
        })
        const json = await response.json();
        return json;
    }

    async checkOutCart(reqData){
        const response= await fetch(`${host}/api/userActions/checkoutcart`, {
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