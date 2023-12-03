import React from "react";
import "./Products.css";
import ProductSliderCorousel from './ProductSliderCorousel';
import {Link} from 'react-router-dom'

const Products = () => {
  return (
    <div>
      
      <ProductSliderCorousel />

      <div class="latestProducts">
        <div class="latestProductsHeader">
          <div class="latestTradings">
            <h3 class="title_LT">Latest Product</h3>
            <i
              id="rightArrow"
              class="fa fa-solid fa-2x fa-angle-right"
              aria-hidden="true"
            ></i>
          </div>
          <div class="search-container">
          <Link to="/ProductSearch">Go to search resultpage</Link>
            <form action="/productSearchResult" name="logform" method="POST">
              <input
                style={{ marginTop: "0%" }}
                type="text"
                placeholder="Search.."
                name="search"
              />
              <input
                class="d-none"
                type="text"
                name="filter"
                value="pricelow"
              />
              <button class="searchIcon" type="submit">
                
                    <i class="fa fa-search"></i>
              </button>
            </form>
          </div>
        </div>
        <div class="productsSection">
          <button id="arrowLeft1" class="arrow arrow-left" type="button">
            <i
              id="latestProductsCategory"
              class="fa fa-angle-double-left"
              aria-hidden="true"
            ></i>
          </button>
          <button id="arrowRight1" class="arrow arrow-right" type="button">
            <i
              id="latestProductsCategory"
              class="fa fa-angle-double-right"
              aria-hidden="true"
            ></i>
          </button>

          <div id="latestPro" class="allProduct mx-3">
                    {/* <% LatestCategory.forEach(function(image) { %> */}
                        <div class="col mx-2">
                            <div class="inner-col">
                                <div class="card h-auto bg-dark">
                                    <button type="button" class="btn-decs-container" data-bs-toggle="modal"
                                        data-bs-target="#latestPro<%=image._id%>">
                                        <div class="decs-container">
                                            <img class="card-img-top" alt="p1"
                                                src="data:image/<%=image.img.contentType%>;base64, <%=image.img.data.toString('base64')%>" />
                                            <div class="card-body p-2">
                                                <h5 class="card-title text-white">
                                                    {/* <%= image.name %> */}
                                                </h5>
                                                <p class="card-text">
                                                    {/* <%= image.category %> */}
                                                </p>
                                            </div>
                                        </div>
                                    </button>
                                    <div class="card-footer" style={{paddingLeft: '0%', paddingRight: '0%' }}>
                                        <p class="card-footer-price">Price : Rs.<span id="product-modal-price">
                                                {/* <%= image.price %> */}
                                            </span></p>
                                        <button class="card-footer-AddToCart" data-bs-toggle="modal"
                                            data-bs-target="#latestPro<%=image._id%>">Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <% }) %> */}
                </div>
          <div id="latestProModal">
                    {/* <% LatestCategory.forEach(function(image) { %> */}
                        <div class="modal" id="latestPro<%=image._id%>">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5 text-center" id="exampleModalLabel">
                                            {/* <%= image.name %> */}
                                        </h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="modal-product_img">
                                            <img class="card-img-top-modal" alt="p2"
                                                src="data:image/<%=image.img.contentType%>;base64, <%=image.img.data.toString('base64')%>" />
                                        </div>
                                        <div class="modal-product-description">
                                            <h3 style={{textAlign: 'center'}} class="card-text">
                                                Category :
                                                {/* <%= image.category %> */}
                                            </h3>
                                            <h3>About</h3>
                                            <p class="productsP" >
                                                {/* <%= image.description %> */}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="modal-footer bg-black"
                                        style={{display: 'flex', justifyContent: 'space-between' ,fontSize : 'larger'}}>
                                        <p class="card-footer-price">Price : Rs. <span
                                                id="product-modal-price">
                                                {/* <%= image.price %> */}
                                            </span></p>
                                        <form method="post" action="/useractions/addtocart">
                                            <input class="d-none" type="text" name="productid"
                                                // value=<%=image._id%>
                                                />
                                            <button type="submit" class="btn bg-dark">Add To
                                                Cart</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <% }) %> */}
                </div>
        </div>
      </div>

      <div class="ProteinCategory">
        <div class="latestProductsHeader">
          <div class="latestTradings">
            <h3 class="title_LT">Whey Proteins</h3>
            <i
              id="rightArrow"
              class="fa fa-solid fa-2x fa-angle-right"
              aria-hidden="true"
            ></i>
          </div>
        </div>
        <div class="productsSection">
          <button id="arrowLeft2" class="arrow arrow-left" type="button">
            <i
              id="latestProductsCategory"
              class="fa fa-angle-double-left"
              aria-hidden="true"
            ></i>
          </button>
          <button id="arrowRight2" class="arrow arrow-right" type="button">
            <i
              id="latestProductsCategory"
              class="fa fa-angle-double-right"
              aria-hidden="true"
            ></i>
          </button>
          <div id="wheyPro" class="allProduct mx-3">
                    {/* <% ProteinCategory.forEach(function(image) { %> */}
                        <div class="col mx-2">
                            <div class="inner-col">
                                <div class="card h-auto bg-dark">
                                    <button type="button" class="btn-decs-container" data-bs-toggle="modal"
                                        data-bs-target="#wheyProModal<%=image._id%>">
                                        <div class="decs-container">
                                            <img class="card-img-top" alt="p1"
                                                src="data:image/<%=image.img.contentType%>;base64, <%=image.img.data.toString('base64')%>" />
                                            <div class="card-body p-2">
                                                <h5 class="card-title text-white">
                                                    {/* <%= image.name %> */}
                                                </h5>
                                                <p class="card-text">
                                                    {/* <%= image.category %> */}
                                                </p>
                                            </div>
                                        </div>
                                    </button>
                                    <div class="card-footer" style={{paddingLeft: '0%' ,paddingRight: '0%' }}>
                                        <p class="card-footer-price">Price : Rs.<span id="product-modal-price">
                                                {/* <%= image.price %> */}
                                            </span></p>
                                        <button class="card-footer-AddToCart" data-bs-toggle="modal"
                                            data-bs-target="#wheyProModal<%=image._id%>">Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <% }) %> */}
                </div>
          <div id="wheyProModal">
                    {/* <% ProteinCategory.forEach(function(image) { %> */}
                        <div class="modal" id="wheyProModal<%=image._id%>">
                            <div class="modal-dialog modal-dialog-centered modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5 text-center" id="exampleModalLabel">
                                            {/* <%= image.name %> */}
                                        </h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="modal-product_img">
                                            <img class="card-img-top-modal" alt="p2"
                                                src="data:image/<%=image.img.contentType%>;base64, <%=image.img.data.toString('base64')%>" />
                                        </div>
                                        <div class="modal-product-description">
                                            <h3 style={{textAlign: 'center'}} class="card-text">
                                                Category :
                                                {/* <%= image.category %> */}
                                            </h3>
                                            <h3>About</h3>
                                            <p class="productsP" >
                                                {/* <%= image.description %> */}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="modal-footer bg-black"
                                        style={{display: 'flex', justifyContent: 'space-between' ,fontSize : 'larger'}}>
                                        <p class="card-footer-price">Price : Rs. <span
                                                id="product-modal-price">
                                                {/* <%= image.price %> */}
                                            </span></p>
                                        <form method="post" action="/useractions/addtocart">
                                            <input class="d-none" type="text" name="productid"
                                                // value=<%=image._id%>
                                                />
                                            <button type="submit" class="btn bg-dark">Add To
                                                Cart</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <% }) %> */}
                </div>
        </div>
      </div>

      <div class="NutrientsCategory">
        <div class="latestProductsHeader">
          <div class="latestTradings">
            <h3 class="title_LT">Nutrients : Vitamins & Minerals</h3>
            <i
              id="rightArrow"
              class="fa fa-solid fa-2x fa-angle-right"
              aria-hidden="true"
            ></i>
          </div>
        </div>
        <div class="productsSection">
          <button id="arrowLeft3" class="arrow arrow-left" type="button">
            <i
              id="latestProductsCategory"
              class="fa fa-angle-double-left"
              aria-hidden="true"
            ></i>
          </button>
          <button id="arrowRight3" class="arrow arrow-right" type="button">
            <i
              id="latestProductsCategory"
              class="fa fa-angle-double-right"
              aria-hidden="true"
            ></i>
          </button>

          <div id="vitaminPro" class="allProduct mx-3">
                    {/* <% NutrientsCategory.forEach(function(image) { %> */}
                        <div class="col mx-2">
                            <div class="inner-col">
                                <div class="card h-auto bg-dark">
                                    <button type="button" class="btn-decs-container" data-bs-toggle="modal"
                                        data-bs-target="#vitaminPro<%=image._id%>">
                                        <div class="decs-container">
                                            <img class="card-img-top" alt="p1"
                                                src="data:image/<%=image.img.contentType%>;base64, <%=image.img.data.toString('base64')%>" />
                                            <div class="card-body p-2">
                                                <h5 class="card-title text-white">
                                                    {/* <%= image.name %> */}
                                                </h5>
                                                <p class="card-text">
                                                    {/* <%= image.category %> */}
                                                </p>
                                            </div>
                                        </div>
                                    </button>
                                    <div class="card-footer" style={{paddingLeft: '0%' ,paddingRight: '0%' }}>
                                        <p class="card-footer-price">Price : Rs.<span id="product-modal-price">
                                                {/* <%= image.price %> */}
                                            </span></p>
                                        <button class="card-footer-AddToCart" data-bs-toggle="modal"
                                            data-bs-target="#vitaminPro<%=image._id%>">Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <% }) %> */}
                </div>
          <div class="vitaminProModal">
                    {/* <% NutrientsCategory.forEach(function(image) { %> */}
                        <div class="modal" id="vitaminPro<%=image._id%>">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5 text-center" id="exampleModalLabel">
                                        {/* <%= image.name %> */}
                                    </h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="modal-product_img">
                                        <img class="card-img-top-modal" alt="p2"
                                            src="data:image/<%=image.img.contentType%>;base64, <%=image.img.data.toString('base64')%>" />
                                    </div>
                                    <div class="modal-product-description">
                                        <h3 style={{textAlign: 'center'}} class="card-text">
                                            Category :
                                            {/* <%= image.category %> */}
                                        </h3>
                                        <h3>About</h3>
                                        <p class="productsP" >
                                            {/* <%= image.description %> */}
                                        </p>
                                    </div>
                                </div>
                                <div class="modal-footer bg-black"
                                    style={{display: 'flex', justifyContent: 'space-between' ,fontSize : 'larger'}}>
                                    <p class="card-footer-price">Price : Rs. <span
                                            id="product-modal-price">
                                            {/* <%= image.price %> */}
                                        </span></p>
                                    <form method="post" action="/useractions/addtocart">
                                        <input class="d-none" type="text" name="productid"
                                            // value=<%=image._id%>
                                            />
                                        <button type="submit" class="btn bg-dark">Add To
                                            Cart</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                        {/* <% }) %> */}
                    
                </div>
        </div>
      </div>

      <div class="EnergyCategory">
        <div class="latestProductsHeader">
          <div class="latestTradings">
            <h3 class="title_LT">Energy & Endurance</h3>
            <i
              id="rightArrow"
              class="fa fa-solid fa-2x fa-angle-right"
              aria-hidden="true"
            ></i>
          </div>
        </div>
        <div class="productsSection">
          <button id="arrowLeft4" class="arrow arrow-left" type="button">
            <i
              id="latestProductsCategory"
              class="fa fa-angle-double-left"
              aria-hidden="true"
            ></i>
          </button>
          <button id="arrowRight4" class="arrow arrow-right" type="button">
            <i
              id="latestProductsCategory"
              class="fa fa-angle-double-right"
              aria-hidden="true"
            ></i>
          </button>

          <div id="energyPro" class="allProduct mx-3">
                    {/* <% EnergyCategory.forEach(function(image) { %> */}
                        <div class="col mx-2">
                            <div class="inner-col">
                                <div class="card h-auto bg-dark">
                                    <button type="button" class="btn-decs-container" data-bs-toggle="modal"
                                        data-bs-target="#energyPro<%=image._id%>">
                                        <div class="decs-container">
                                            <img class="card-img-top" alt="p1"
                                                src="data:image/<%=image.img.contentType%>;base64, <%=image.img.data.toString('base64')%>" />
                                            <div class="card-body p-2">
                                                <h5 class="card-title text-white">
                                                    {/* <%= image.name %> */}
                                                </h5>
                                                <p class="card-text">
                                                    {/* <%= image.category %> */}
                                                </p>
                                            </div>
                                        </div>
                                    </button>
                                    <div class="card-footer" style={{paddingLeft: '0%' ,paddingRight: '0%' }}>
                                        <p class="card-footer-price">Price : Rs.<span id="product-modal-price">
                                                {/* <%= image.price %> */}
                                            </span></p>
                                        <button class="card-footer-AddToCart" data-bs-toggle="modal"
                                            data-bs-target="#energyPro<%=image._id%>">Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <% }) %> */}


                </div>
          <div id="energyProModal">
                    {/* <% EnergyCategory.forEach(function(image) { %> */}
                        <div class="modal" id="energyPro<%=image._id%>">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5 text-center" id="exampleModalLabel">
                                            {/* <%= image.name %> */}
                                        </h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="modal-product_img">
                                            <img class="card-img-top-modal" alt="p2"
                                                src="data:image/<%=image.img.contentType%>;base64, <%=image.img.data.toString('base64')%>" />
                                        </div>
                                        <div class="modal-product-description">
                                            <h3 style={{textAlign: 'center'}} class="card-text">
                                                Category :
                                                {/* <%= image.category %> */}
                                            </h3>
                                            <h3>About</h3>
                                            <p class="productsP" >
                                                {/* <%= image.description %> */}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="modal-footer bg-black"
                                        style={{display: 'flex', justifyContent: 'space-between' ,fontSize : 'larger'}}>
                                        <p class="card-footer-price">Price : Rs. <span
                                                id="product-modal-price">
                                                {/* <%= image.price %> */}
                                            </span></p>
                                        <form method="post" action="/useractions/addtocart">
                                            <input class="d-none" type="text" name="productid"
                                                // value=<%=image._id%>
                                                />
                                            <button type="submit" class="btn bg-dark">Add To
                                                Cart</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <% }) %> */}


                </div>
        </div>
      </div>

      <div class="RecoveryCategory">
        <div class="latestProductsHeader">
          <div class="latestTradings">
            <h3 class="title_LT">Recovery & Repairs</h3>
            <i
              id="rightArrow"
              class="fa fa-solid fa-2x fa-angle-right"
              aria-hidden="true"
            ></i>
          </div>
        </div>
        <div class="productsSection">
          <button id="arrowLeft5" class="arrow arrow-left" type="button">
            <i
              id="latestProductsCategory"
              class="fa fa-angle-double-left"
              aria-hidden="true"
            ></i>
          </button>
          <button id="arrowRight5" class="arrow arrow-right" type="button">
            <i
              id="latestProductsCategory"
              class="fa fa-angle-double-right"
              aria-hidden="true"
            ></i>
          </button>

          <div id="repairPro" class="allProduct mx-3">
                     {/* <% RecoveryCategory.forEach(function(image) { %> */}
                        <div class="col mx-2">
                            <div class="inner-col">
                                <div class="card h-auto bg-dark">
                                    <button type="button" class="btn-decs-container" data-bs-toggle="modal"
                                        data-bs-target="#repairPro<%=image._id%>">
                                        <div class="decs-container">
                                            <img class="card-img-top" alt="p1"
                                                src="data:image/<%=image.img.contentType%>;base64, <%=image.img.data.toString('base64')%>" />
                                            <div class="card-body p-2">
                                                <h5 class="card-title text-white">
                                                    {/* <%= image.name %> */}
                                                </h5>
                                                <p class="card-text">
                                                    {/* <%= image.category %> */}
                                                </p>
                                            </div>
                                        </div>
                                    </button>
                                    <div class="card-footer" style={{paddingLeft: '0%' ,paddingRight: '0%' }}>
                                        <p class="card-footer-price">Price : Rs.<span id="product-modal-price">
                                                {/* <%= image.price %> */}
                                            </span></p>
                                        <button class="card-footer-AddToCart" data-bs-toggle="modal"
                                            data-bs-target="#repairPro<%=image._id%>">Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <% }) %> */}


                </div>
          <div id="repairProModal" class="allProduct mx-3">
                    {/* <% RecoveryCategory.forEach(function(image) { %> */}
                        <div class="modal" id="repairPro<%=image._id%>">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5 text-center" id="exampleModalLabel">
                                            {/* <%= image.name %> */}
                                        </h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="modal-product_img">
                                            <img class="card-img-top-modal" alt="p2"
                                                src="data:image/<%=image.img.contentType%>;base64, <%=image.img.data.toString('base64')%>" />
                                        </div>
                                        <div class="modal-product-description">
                                            <h3 style={{textAlign: 'center'}} class="card-text">
                                                Category :
                                                {/* <%= image.category %> */}
                                            </h3>
                                            <h3>About</h3>
                                            <p class="productsP" >
                                                {/* <%= image.description %> */}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="modal-footer bg-black"
                                        style={{display: 'flex', justifyContent: 'space-between' ,fontSize : 'larger'}}>
                                        <p class="card-footer-price">Price : Rs. <span
                                                id="product-modal-price">
                                                {/* <%= image.price %> */}
                                            </span></p>
                                        <form method="post" action="/useractions/addtocart">
                                            <input class="d-none" type="text" name="productid"
                                                // value=<%=image._id%>
                                                />
                                            <button type="submit" class="btn bg-dark">Add To
                                                Cart</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <% }) %> */}


                </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
