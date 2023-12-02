const host="http://localhost:5001"



class ReviewService{
    //fetching Top 10 reviews
    async getAllReviews(){
        const res=await fetch(`${host}/api/review/getAllReviews`,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
            }),
        })

        const json = await res.json();
        return json;
    }
}

module.exports=new ReviewService();