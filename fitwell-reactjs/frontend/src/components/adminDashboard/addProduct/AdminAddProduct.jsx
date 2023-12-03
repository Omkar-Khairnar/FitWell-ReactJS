import React from 'react';
import './AddProduct.css';
import '../admin_dashboard.css';

const AdminAddProduct = () => {
  return (
    <div class="container-fluid">
                            <h2 style={{textAlign : 'center', fontWeight:"600"}}>Add New Product</h2>
                        <div class="form-container add-product-container">
                            <form class="addProductFormAdmin" name="addProduct" action="/adminActions/newProduct" method="POST" enctype="multipart/form-data">

                                <label for="name">Product Name
                                    <input class="addProductInputTextSelect" type="text" id="name" placeholder="Product Name" name="name" value=""
                                        required />
                                </label>
                                <label for="description">Description
                                    <textarea class="addProductInputTextSelect" type="text" id="description" placeholder="Enter Description of new Product"
                                        name="description" required></textarea>
                                </label>
                                <label for="price">Price
                                    <input class="addProductInputTextSelect" type="number" min="1" id="price" value=""
                                        placeholder="Enter Product Price($)" name="price" required />
                                </label>
                                <label for="category">Category of the Product</label>
                                <select class="addProductInputTextSelect" name="category" id="category" >
                                    {/* <!-- <option value="">Select Category</option> --> */}
                                    <option class="addProductInputTextSelect" value="Energy & Endurance">Energy & Endurance</option>
                                    <option class="addProductInputTextSelect" value="Recovery & Repair">Recovery & Repair</option>
                                    <option class="addProductInputTextSelect" value="Whey Proteins">Whey Proteins</option>
                                    <option class="addProductInputTextSelect" value="Nutrients">Nutrients</option>
                                </select>
                                <label for="productImage">Product Image [Image type : png(only)]
                                    <input class="addProductInputTextSelect product-img"type="file" value="" id="productImage" name="productImage"
                                        placeholder="Upload Image" required/>
                                </label>
        
                                <button class='addProductButton' id="add-product-btn" type="submit">Add Preduct</button>
        
                            </form>
                        </div>
                    </div>
  )
}

export default AdminAddProduct