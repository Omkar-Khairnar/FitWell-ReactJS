const host="http://localhost:5001"

class ProductService{
    //Getting Products for product-landing page
    async getProducts(){
        const res=await fetch(`${host}/api/product/getProducts`,{
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

module.exports=new ProductService();