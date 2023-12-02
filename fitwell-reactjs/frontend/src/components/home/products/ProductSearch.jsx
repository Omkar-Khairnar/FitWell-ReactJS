import React from "react";
import "./Products.css";
import ProductSliderCorousel from "./ProductSliderCorousel";

const ProductSearch = () => {
  return (
    <div>
      <ProductSliderCorousel />
      <div class="latestProducts">
        <div class="latestProductsHeader">
          <div class="latestTradings">
            <h3 class="title_LT">Searched Products</h3>
            <i
              id="rightArrow"
              class="fa fa-solid fa-2x fa-angle-right"
              aria-hidden="true"
            ></i>
          </div>
          <div class="filters">
            <form action="/productSearchResult" name="filterForm" method="POST">
              <input
                class="d-none"
                type="text"
                name="search"
                value="<%= search %>"
              />
              <select
                name="filter"
                id="filterID"
                style={{backgroundColor: 'orange',  borderRadius: '5px', fontWeight: 'bold'}}
                class="p-2"
              >
                <option value="">Select Filters</option>
                <option value="pricelow">Lowest Price</option>
                <option value="pricehigh">Highest Price</option>
                <option value="energy">Energy & Endurance</option>
                <option value="nutrients">Nutrients</option>
                <option value="repair">Recovery & Repair</option>
                <option value="protein">Whey Protein</option>
              </select>
              <button
                type="submit"
                style={{backgroundColor: 'orange',  borderRadius: '5px', fontWeight: 'bold'}}
                class="p-1"
              >
                Apply Filter
              </button>
            </form>
          </div>

          <div class="search-container d-flex flex-row">
            <form action="/productSearchResult" name="searchForm" method="POST">
              <input
                type="text"
                placeholder="Search.."
                name="search"
                value=""
              />
              <input
                class="d-none"
                type="text"
                name="filter"
                value="pricelow"
              />
              <button class="searchIcon" type="submit">
                <i class="fa p-1 fa-search"></i>
              </button>
            </form>
          </div>
        </div>
        <div class="productsSection">
          <div class="row row-cols-2 row-cols-md-5 container-fluid mx-0 my-4">
            {/* <% if (searchResultCount===0) { %> */}
            <h1 style={{textAlign: 'center',width: '100%'}}>No Product Found !</h1>

            {/* <% } else { %> */}
            <h1 style={{textAlign: 'center', width: '100%' , color: 'aliceblue', marginBottom: '20px'}}>
              {/* <%- searchResultCount %> Results Found for Your Search : <%= search %> */}
            </h1>
            {/* <% searchResult.forEach(function(image) { %> */}

            <div class="col  mx-0">
              <div class="inner-col">
                <div class="card h-auto bg-dark">
                  <button
                    type="button"
                    class="btn-decs-container"
                    data-bs-toggle="modal"
                    data-bs-target="#<%=image._id%>"
                  >
                    <div class="decs-container">
                      <img
                        class="card-img-top"
                        alt="p1"
                        src="data:image/<%=image.img.contentType%>;base64, <%=image.img.data.toString('base64')%>"
                      />
                      <div class="card-body p-2">
                        <h5 class="card-title text-white">
                          {/* <%= image.name %> */}
                        </h5>
                        <p class="card-text">{/* <%= image.category %> */}</p>
                      </div>
                    </div>
                  </button>
                  <div class="modal" id="<%=image._id%>">
                    <div class="modal-dialog modal-static modal-dialog-centered modal-lg">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1
                            class="modal-title fs-5 text-center"
                            id="exampleModalLabel"
                          >
                            {/* <%= image.name %> */}
                          </h1>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <div class="modal-product_img">
                            <img
                              class="card-img-top-modal"
                              alt="p2"
                              src="data:image/<%=image.img.contentType%>;base64, <%=image.img.data.toString('base64')%>"
                            />
                          </div>
                          <div class="modal-product-description">
                            <h3 style={{textAlign: 'center'}} class="card-text">
                              Category :{/* <%= image.category %> */}
                            </h3>
                            <h3>About</h3>
                            <p>{/* <%= image.description %> */}</p>
                          </div>
                        </div>
                        <div
                          class="modal-footer bg-black"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            fontSize: "larger",
                          }}
                        >
                          <p class="card-footer-price">
                            Price : Rs.{" "}
                            <span id="product-modal-price">
                              {/* <%= image.price %> */}
                            </span>
                          </p>
                          <form method="post" action="/addtocart">
                            <input
                              class="d-none"
                              type="text"
                              name="productid"
                              // value=<%=image._id%>
                            />
                            <button type="submit" class="btn bg-dark">
                              Add To Cart
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="card-footer"
                    style={{ paddingLeft: "0%", paddingRight: "0%" }}
                  >
                    <p class="card-footer-price">
                      Price : Rs.
                      <span id="product-modal-price">
                        {/* <%= image.price %> */}
                      </span>
                    </p>
                    <button
                      class="card-footer-AddToCart"
                      data-bs-toggle="modal"
                      data-bs-target="#<%=image._id%>"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <% }) %> */}
            {/* <% } %> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSearch;
