import React, { useEffect, useState } from "react";
import "./Products.css";
// import "./ProductsScroll";
import ProductSliderCorousel from "./ProductSliderCorousel";
import { Link, useNavigate } from "react-router-dom";
import ProductService from "../../../services/ProductService";
import { Buffer } from 'buffer';
import UserActionService from "../../../services/UserActionService";
import { useSelector } from 'react-redux';

const Products = () => {
  const [data, setData] = useState(null);
  const userDetails= useSelector(state => state.user.userDetails);
  const navigate=useNavigate();
  const getProducts = async () => {
    try {
      const res = await ProductService.getProducts();
      if (!res.error) {
        setData(res.data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleAddToCart=async(productid)=>{
    if(userDetails.isLoggedIn === false){
      alert('Session Expired. Please Login again.')
    }
    else{
      const obj={
        productid:productid,
        userid:userDetails._id
      }
      const res=await UserActionService.addToCart(obj);
      if(!res.error){
        navigate('/Products');
      }
    }
  }

  useEffect(() => {
    getProducts();
  }, []);


  return (
    <div>
      <ProductSliderCorousel />

      <div className="latestProducts">
        <div className="latestProductsHeader">
          <div className="latestTradings">
            <h3 className="title_LT">Latest Product</h3>
            <i
              id="rightArrow"
              className="fa fa-solid fa-2x fa-angle-right"
              aria-hidden="true"
            ></i>
          </div>
          <div className="search-container">
            <Link to="/ProductSearch">Go to search result page</Link>
            <form style={{flexDirection : 'row'}} action="/productSearchResult" name="logform" method="POST">
              <input
                style={{ marginTop: "0%" }}
                type="text"
                placeholder="Search.."
                name="search"
              />
              <input
                className="d-none"
                type="text"
                name="filter"
                value="pricelow"
              />
              <button className="searchIcon" type="submit">
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>
        </div>
        <div className="productsSection">
          <button id="arrowLeft1" className="arrow arrow-left" type="button">
            <i
              id="latestProductsCategory"
              className="fa fa-angle-double-left"
              aria-hidden="true"
            ></i>
          </button>
          <button id="arrowRight1" className="arrow arrow-right" type="button">
            <i
              id="latestProductsCategory"
              className="fa fa-angle-double-right"
              aria-hidden="true"
            ></i>
          </button>

          <div id="latestPro" className="allProduct mx-3">
            {data &&
              data.LatestCategory !== undefined &&
              data.LatestCategory !== null &&
              data.LatestCategory.map((item) => (
                <div key={item._id} className="col mx-2">
                  <div className="inner-col">
                    <div className="card h-auto bg-dark">
                      <button
                        type="button"
                        className="btn-decs-container"
                        data-bs-toggle="modal"
                        data-bs-target={`#latestPro${item._id}`}
                      >
                        <div className="decs-container">
                          {item.img.data && (
                            <img
                              className="card-img-top-product"
                              alt="p1"
                              src={`data:image/${
                                item.img.contentType
                              };base64,${Buffer.from(item.img.data).toString(
                                "base64"
                              )}`}
                            />
                          )}

                          <div className="card-body-product p-2">
                            <h5 style={{fontFamily: 'Ubuntu, sans-serif'}} className="card-title text-white">
                              {item.name}
                            </h5>
                            <p className="card-text-product">{item.category}</p>
                          </div>
                        </div>
                      </button>
                      <div
                        className="card-footer"
                        style={{ paddingLeft: "0%", paddingRight: "0%" }}
                      >
                        <p className="card-footer-price card-text-product">
                          Price : Rs.
                          <span id="product-modal-price card-text-product">{item.price}</span>
                        </p>
                        <button
                          className="card-footer-AddToCart"
                          data-bs-toggle="modal"
                          data-bs-target={`#latestPro${item._id}`}
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          
          <div id="latestProModal">
            {
              data &&
              data.LatestCategory !== undefined &&
              data.LatestCategory !== null &&
              data.LatestCategory.map((item) => (
                <div className="modal" id={`latestPro${item._id}`}>
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1
                      className="modal-title fs-5 text-center"
                      id="exampleModalLabel"
                    >
                      { item.name }
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="modal-product_img">
                      <img
                        className="card-img-top-modal"
                        alt="p2"
                        src={`data:image/${
                          item.img.contentType
                        };base64,${Buffer.from(item.img.data).toString(
                          "base64"
                        )}`}
                      />
                    </div>
                    <div className="modal-product-description">
                      <h3 style={{ textAlign: "center" }} className="card-text-product">
                        Category :{item.category}
                      </h3>
                      <h3>About</h3>
                      <p className="productsP">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div
                    className="modal-footer bg-black"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "larger",
                    }}
                  >
                    <p className="card-footer-price card-text-product">
                      Price : Rs.{" "}
                      <span id="product-modal-price card-text-product">
                        { item.price}
                      </span>
                    </p>
                    <form >
                      <input
                        className="d-none"
                        type="text"
                        name="productid"
                        value={item._id}
                      />
                      <button type="submit" className="btn bg-dark" onClick={handleAddToCart(item._id)}>
                        Add To Cart
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
              ))
            }
          </div>
        </div>
      </div>

      <div className="ProteinCategory">
        <div className="latestProductsHeader">
          <div className="latestTradings">
            <h3 className="title_LT">Whey Proteins</h3>
            <i
              id="rightArrow"
              className="fa fa-solid fa-2x fa-angle-right"
              aria-hidden="true"
            ></i>
          </div>
        </div>
        <div className="productsSection">
          <button id="arrowLeft2" className="arrow arrow-left" type="button">
            <i
              id="latestProductsCategory"
              className="fa fa-angle-double-left"
              aria-hidden="true"
            ></i>
          </button>
          <button id="arrowRight2" className="arrow arrow-right" type="button">
            <i
              id="latestProductsCategory"
              className="fa fa-angle-double-right"
              aria-hidden="true"
            ></i>
          </button>
          <div id="wheyPro" className="allProduct mx-3">
          {
            data &&
            data.ProteinCategory !== undefined &&
            data.ProteinCategory !== null && 
            data.ProteinCategory.map((item) => (    
                <div className="col mx-2">
                <div className="inner-col">
                  <div className="card h-auto bg-dark">
                    <button
                      type="button"
                      className="btn-decs-container"
                      data-bs-toggle="modal"
                      data-bs-target={`#wheyProModal${item._id}`}
                    >
                      <div className="decs-container">
                        <img
                          className="card-img-top-product"
                          alt="p1"
                          src={`data:image/${
                            item.img.contentType
                          };base64,${Buffer.from(item.img.data).toString(
                            "base64"
                          )}`}
                        />
                        <div className="card-body-product p-2">
                          <h5 style={{fontFamily : 'Ubuntu, sans-serif'}} className="card-title text-white">
                            { item.name}
                          </h5>
                          <p className="card-text-product">
                            {item.category}
                          </p>
                        </div>
                      </div>
                    </button>
                    <div
                      className="card-footer"
                      style={{ paddingLeft: "0%", paddingRight: "0%" }}
                    >
                      <p className="card-footer-price card-text-product">
                        Price : Rs.
                        <span id="product-modal-price card-text-product">
                          { item.price }
                        </span>
                      </p>
                      <button
                        className="card-footer-AddToCart"
                        data-bs-toggle="modal"
                        data-bs-target={`#wheyProModal${item._id}`}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
          </div>
          <div id="wheyProModal">
            {
              data &&
              data.ProteinCategory !== undefined &&
              data.ProteinCategory !== null && 
              data.ProteinCategory.map((item) => (    
                <div className="modal" id={`wheyProModal${item._id}`}>
                <div className="modal-dialog modal-dialog-centered modal-lg">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1
                        className="modal-title fs-5 text-center"
                        id="exampleModalLabel"
                      >
                        { item.name}
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="modal-product_img">
                        <img
                          className="card-img-top-modal"
                          alt="p2"
                          src={`data:image/${
                            item.img.contentType
                          };base64,${Buffer.from(item.img.data).toString(
                            "base64"
                          )}`}
                        />
                      </div>
                      <div className="modal-product-description">
                        <h3 style={{ textAlign: "center" }} className="card-text-product">
                          Category { item.category}
                        </h3>
                        <h3>About</h3>
                        <p className="productsP">
                          { item.description}
                        </p>
                      </div>
                    </div>
                    <div
                      className="modal-footer bg-black"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "larger",
                      }}
                    >
                      <p className="card-footer-price card-text-product">
                        Price : Rs.{" "}
                        <span id="product-modal-price card-text-product">
                          { item.price}
                        </span>
                      </p>
                      <form >
                        <input
                          className="d-none"
                          type="text"
                          name="productid"
                          value={item._id}
                        />
                        <button type="submit" className="btn bg-dark"  onClick={handleAddToCart(item._id)}>
                          Add To Cart
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              ))
            }
          </div>
        </div>
      </div>

      <div className="NutrientsCategory">
        <div className="latestProductsHeader">
          <div className="latestTradings">
            <h3 className="title_LT">Nutrients : Vitamins & Minerals</h3>
            <i
              id="rightArrow"
              className="fa fa-solid fa-2x fa-angle-right"
              aria-hidden="true"
            ></i>
          </div>
        </div>
        <div className="productsSection">
          <button id="arrowLeft3" className="arrow arrow-left" type="button">
            <i
              id="latestProductsCategory"
              className="fa fa-angle-double-left"
              aria-hidden="true"
            ></i>
          </button>
          <button id="arrowRight3" className="arrow arrow-right" type="button">
            <i
              id="latestProductsCategory"
              className="fa fa-angle-double-right"
              aria-hidden="true"
            ></i>
          </button>

          <div id="vitaminPro" className="allProduct mx-3">
            {
              data && data.NutrientsCategory !== undefined && data.NutrientsCategory !== null &&
                data.NutrientsCategory.map((item)=>(
                  <div className="col mx-2">
                  <div className="inner-col">
                    <div className="card h-auto bg-dark">
                      <button
                        type="button"
                        className="btn-decs-container"
                        data-bs-toggle="modal"
                        data-bs-target={`#vitaminPro${item._id}`}
                      >
                        <div className="decs-container">
                          <img
                            className="card-img-top-product"
                            alt="p1"
                            src={`data:image/${
                              item.img.contentType
                            };base64,${Buffer.from(item.img.data).toString(
                              "base64"
                            )}`}
                          />
                          <div className="card-body-product p-2">
                            <h5 style={{fontFamily: 'Ubuntu, sans-serif'}} className="card-title text-white">
                              {item.name}
                            </h5>
                            <p className="card-text-product">
                              { item.category}
                            </p>
                          </div>
                        </div>
                      </button>
                      <div
                        className="card-footer"
                        style={{ paddingLeft: "0%", paddingRight: "0%" }}
                      >
                        <p className="card-footer-price card-text-product">
                          Price : Rs.
                          <span id="product-modal-price card-text-product">
                           {item.price}
                          </span>
                        </p>
                        <button
                          className="card-footer-AddToCart"
                          data-bs-toggle="modal"
                          data-bs-target={`#vitaminPro${item._id}`}
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                ))
            }
          </div>
          <div className="vitaminProModal">
            {
               data && data.NutrientsCategory !== undefined && data.NutrientsCategory !== null &&
               data.NutrientsCategory.map((item)=>(
                <div className="modal" id={`vitaminPro${item._id}`}>
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1
                        className="modal-title fs-5 text-center"
                        id="exampleModalLabel"
                      >
                        { item.name}
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="modal-product_img">
                        <img
                          className="card-img-top-modal"
                          alt="p2"
                          src={`data:image/${
                            item.img.contentType
                          };base64,${Buffer.from(item.img.data).toString(
                            "base64"
                          )}`}
                        />
                      </div>
                      <div className="modal-product-description">
                        <h3 style={{ textAlign: "center" }} className="card-text-product">
                          Category :{ item.category}
                        </h3>
                        <h3>About</h3>
                        <p className="productsP">
                          { item.description}
                        </p>
                      </div>
                    </div>
                    <div
                      className="modal-footer bg-black"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "larger",
                      }}
                    >
                      <p className="card-footer-price card-text-product">
                        Price : Rs.{" "}
                        <span id="product-modal-price card-text-product">
                          { item.price}
                        </span>
                      </p>
                      <form method="post" action="/useractions/addtocart">
                        <input
                          className="d-none"
                          type="text"
                          name="productid"
                          value={item._id}
                        />
                        <button type="submit" className="btn bg-dark"  onClick={handleAddToCart(item._id)}>
                          Add To Cart
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
               ))
            }
          </div>
        </div>
      </div>

      <div className="EnergyCategory">
        <div className="latestProductsHeader">
          <div className="latestTradings">
            <h3 className="title_LT">Energy & Endurance</h3>
            <i
              id="rightArrow"
              className="fa fa-solid fa-2x fa-angle-right"
              aria-hidden="true"
            ></i>
          </div>
        </div>
        <div className="productsSection">
          <button id="arrowLeft4" className="arrow arrow-left" type="button">
            <i
              id="latestProductsCategory"
              className="fa fa-angle-double-left"
              aria-hidden="true"
            ></i>
          </button>
          <button id="arrowRight4" className="arrow arrow-right" type="button">
            <i
              id="latestProductsCategory"
              className="fa fa-angle-double-right"
              aria-hidden="true"
            ></i>
          </button>

          <div id="energyPro" className="allProduct mx-3">

            {
              data && data.EnergyCategory!==undefined && data.EnergyCategory !== null &&
                data.EnergyCategory.map((item)=>(
                  <div className="col mx-2">
                  <div className="inner-col">
                    <div className="card h-auto bg-dark">
                      <button
                        type="button"
                        className="btn-decs-container"
                        data-bs-toggle="modal"
                        data-bs-target={`#energyPro${item._id}`}
                      >
                        <div className="decs-container">
                          <img
                            className="card-img-top-product"
                            alt="p1"
                            src={`data:image/${
                              item.img.contentType
                            };base64,${Buffer.from(item.img.data).toString(
                              "base64"
                            )}`}
                          />
                          <div className="card-body-product p-2">
                            <h5 style={{fontFamily: 'Ubuntu, sans-serif'}} className="card-title text-white">
                              {item.name }
                            </h5>
                            <p className="card-text-product">
                              {item.category }
                            </p>
                          </div>
                        </div>
                      </button>
                      <div
                        className="card-footer"
                        style={{ paddingLeft: "0%", paddingRight: "0%" }}
                      >
                        <p className="card-footer-price card-text-product">
                          Price : Rs.
                          <span id="product-modal-price card-text-product">
                            {item.price}
                          </span>
                        </p>
                        <button
                          className="card-footer-AddToCart"
                          data-bs-toggle="modal"
                          data-bs-target={`#energyPro${item._id}`}
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                ))
            }
          </div>
          <div id="energyProModal">
            {
              data && data.EnergyCategory!==undefined && data.EnergyCategory !== null &&
              data.EnergyCategory.map((item)=>(
                <div className="modal" id={`energyPro${item._id}`}>
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1
                        className="modal-title fs-5 text-center"
                        id="exampleModalLabel"
                      >
                        { item.name}
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="modal-product_img">
                        <img
                          className="card-img-top-modal"
                          alt="p2"
                          src={`data:image/${
                            item.img.contentType
                          };base64,${Buffer.from(item.img.data).toString(
                            "base64"
                          )}`}
                        />
                      </div>
                      <div className="modal-product-description">
                        <h3 style={{ textAlign: "center" }} className="card-text-product">
                          Category :{item.category}
                        </h3>
                        <h3>About</h3>
                        <p className="productsP">
                          { item.description }
                        </p>
                      </div>
                    </div>
                    <div
                      className="modal-footer bg-black"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "larger",
                      }}
                    >
                      <p className="card-footer-price card-text-product">
                        Price : Rs.{" "}
                        <span id="product-modal-price card-text-product">
                          {item.price }
                        </span>
                      </p>
                      <form method="post" action="/useractions/addtocart">
                        <input
                          className="d-none"
                          type="text"
                          name="productid"
                          value={item._id}
                        />
                        <button type="submit" className="btn bg-dark"  onClick={handleAddToCart(item._id)}>
                          Add To Cart
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              ))
            }
          </div>
        </div>
      </div>

      <div className="RecoveryCategory">
        <div className="latestProductsHeader">
          <div className="latestTradings">
            <h3 className="title_LT">Recovery & Repairs</h3>
            <i
              id="rightArrow"
              className="fa fa-solid fa-2x fa-angle-right"
              aria-hidden="true"
            ></i>
          </div>
        </div>
        <div className="productsSection">
          <button id="arrowLeft5" className="arrow arrow-left" type="button">
            <i
              id="latestProductsCategory"
              className="fa fa-angle-double-left"
              aria-hidden="true"
            ></i>
          </button>
          <button id="arrowRight5" className="arrow arrow-right" type="button">
            <i
              id="latestProductsCategory"
              className="fa fa-angle-double-right"
              aria-hidden="true"
            ></i>
          </button>

          <div id="repairPro" className="allProduct mx-3">
            {
              data && data.RecoveryCategory !== undefined && data.RecoveryCategory !== null &&
                data.RecoveryCategory.map((item)=>(
                  <div className="col mx-2">
                  <div className="inner-col">
                    <div className="card h-auto bg-dark">
                      <button
                        type="button"
                        className="btn-decs-container"
                        data-bs-toggle="modal"
                        data-bs-target={`#repairPro${item._id}`}
                      >
                        <div className="decs-container">
                          <img
                            className="card-img-top-product"
                            alt="p1"
                            src={`data:image/${
                              item.img.contentType
                            };base64,${Buffer.from(item.img.data).toString(
                              "base64"
                            )}`}
                          />
                          <div className="card-body-product p-2">
                            <h5 style={{fontFamily: 'Ubuntu, sans-serif'}} className="card-title text-white">
                              {item.name }
                            </h5>
                            <p className="card-text-product">
                              {item.category}
                            </p>
                          </div>
                        </div>
                      </button>
                      <div
                        className="card-footer"
                        style={{ paddingLeft: "0%", paddingRight: "0%" }}
                      >
                        <p className="card-footer-price card-text-product">
                          Price : Rs.
                          <span id="product-modal-price card-text-product">
                            {item.price}
                          </span>
                        </p>
                        <button
                          className="card-footer-AddToCart"
                          data-bs-toggle="modal"
                          data-bs-target={`#repairPro${item._id}`}
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                ))
            }
          </div>
          <div id="repairProModal" className="allProduct mx-3">
            {
               data && data.RecoveryCategory !== undefined && data.RecoveryCategory !== null &&
               data.RecoveryCategory.map((item)=>(
                <div className="modal" id={`repairPro${item._id}`}>
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1
                        className="modal-title fs-5 text-center"
                        id="exampleModalLabel"
                      >
                        { item.name}
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="modal-product_img">
                        <img
                          className="card-img-top-modal"
                          alt="p2"
                          src={`data:image/${
                            item.img.contentType
                          };base64,${Buffer.from(item.img.data).toString(
                            "base64"
                          )}`}
                        />
                      </div>
                      <div className="modal-product-description">
                        <h3 style={{ textAlign: "center" }} className="card-text-product">
                          Category :{ item.category}
                        </h3>
                        <h3>About</h3>
                        <p className="productsP">
                          { item.description}
                        </p>
                      </div>
                    </div>
                    <div
                      className="modal-footer bg-black"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "larger",
                      }}
                    >
                      <p className="card-footer-price card-text-product">
                        Price : Rs.{" "}
                        <span id="product-modal-price card-text-product">
                          { item.price }
                        </span>
                      </p>
                      <form method="post" action="/useractions/addtocart">
                        <input
                          className="d-none"
                          type="text"
                          name="productid"
                          value={item._id}
                        />
                        <button type="submit" className="btn bg-dark"  onClick={handleAddToCart(item._id)}>
                          Add To Cart
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
               ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
