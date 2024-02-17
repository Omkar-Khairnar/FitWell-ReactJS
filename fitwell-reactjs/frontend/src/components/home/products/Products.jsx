import React, { useEffect, useState } from "react";
import "./Products.css";
// import "./ProductsScroll";
import ProductSliderCorousel from "./ProductSliderCorousel";
import ProductService from "../../../services/ProductService";
import { Buffer } from 'buffer';
import UserActionService from "../../../services/UserActionService";
import LoaderComp from "../../Loader";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../../store/slices/productsSlice.jsx"


const Products = (props) => {
  const {setmyAlert} = props;
  const dispatch = useDispatch();
  const products=useSelector(state => state.productsState.products);
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false)
  const userDetails= useSelector(state => state.user.userDetails); 
  const isLoggedIn= useSelector(state => state.user.isLoggedIn);

  const getProducts = async () => {
    try {
      setIsLoading(true)
      const res = await ProductService.getProducts();
      if (!res.error) {
        dispatch(setProducts(res.data));
        setData(res.data);
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleAddToCart=async(productid)=>{
    if(isLoggedIn===undefined || isLoggedIn==null || userDetails===undefined || userDetails===null || isLoggedIn === false){
      setmyAlert('SignIn To Buy Product', 'error');
    }
    else{
      const obj={
        productid:productid,
        userid:userDetails._id
      }
      const res=await UserActionService.addToCart(obj);
      setmyAlert(res.msg, res.error ? 'error' : 'success');
    }
  }

  useEffect(() => {
    if(products ==null || products === undefined){
      getProducts();
    }
    else{
      setData(products)
    }
  }, []);

  return (
    <div>
      <ProductSliderCorousel />
      {
        isLoading ? (
          <LoaderComp></LoaderComp>
        )
        :
        (
          <>
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
            {/* <div className="search-container">
              <Link to="/ProductSearch">Go to search result page</Link>
              <form action="/productSearchResult" name="logform" method="POST">
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
            </div> */}
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
                         
                        >
                          <div className="decs-container">
                            {item.img.data && (
                              <img
                                className="card-img-top"
                                alt="p1"
                                src={`data:image/${
                                  item.img.contentType
                                };base64,${Buffer.from(item.img.data).toString(
                                  "base64"
                                )}`}
                              />
                            )}
  
                            <div className="card-body p-2">
                              <h5 className="card-title text-white">
                                {item.name}
                              </h5>
                              <p className="card-text">{item.category}</p>
                            </div>
                          </div>
                        </button>
                        <div
                          className="card-footer"
                          style={{ paddingLeft: "0%", paddingRight: "0%" }}
                        >
                          <p className="card-footer-price">
                            Price : Rs.
                            <span id="product-modal-price">{item.price}</span>
                          </p>
                          <button
                            className="card-footer-AddToCart"
                            onClick={()=>{handleAddToCart(item._id)}}
                          >
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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
                      >
                        <div className="decs-container">
                          <img
                            className="card-img-top"
                            alt="p1"
                            src={`data:image/${
                              item.img.contentType
                            };base64,${Buffer.from(item.img.data).toString(
                              "base64"
                            )}`}
                          />
                          <div className="card-body p-2">
                            <h5 className="card-title text-white">
                              { item.name}
                            </h5>
                            <p className="card-text">
                              {item.category}
                            </p>
                          </div>
                        </div>
                      </button>
                      <div
                        className="card-footer"
                        style={{ paddingLeft: "0%", paddingRight: "0%" }}
                      >
                        <p className="card-footer-price">
                          Price : Rs.
                          <span id="product-modal-price">
                            { item.price }
                          </span>
                        </p>
                        <button
                          className="card-footer-AddToCart"
                          onClick={()=>{handleAddToCart(item._id)}}
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
                        >
                          <div className="decs-container">
                            <img
                              className="card-img-top"
                              alt="p1"
                              src={`data:image/${
                                item.img.contentType
                              };base64,${Buffer.from(item.img.data).toString(
                                "base64"
                              )}`}
                            />
                            <div className="card-body p-2">
                              <h5 className="card-title text-white">
                                {item.name}
                              </h5>
                              <p className="card-text">
                                { item.category}
                              </p>
                            </div>
                          </div>
                        </button>
                        <div
                          className="card-footer"
                          style={{ paddingLeft: "0%", paddingRight: "0%" }}
                        >
                          <p className="card-footer-price">
                            Price : Rs.
                            <span id="product-modal-price">
                             {item.price}
                            </span>
                          </p>
                          <button
                            className="card-footer-AddToCart"
                            onClick={()=>{handleAddToCart(item._id)}}
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
                        >
                          <div className="decs-container">
                            <img
                              className="card-img-top"
                              alt="p1"
                              src={`data:image/${
                                item.img.contentType
                              };base64,${Buffer.from(item.img.data).toString(
                                "base64"
                              )}`}
                            />
                            <div className="card-body p-2">
                              <h5 className="card-title text-white">
                                {item.name }
                              </h5>
                              <p className="card-text">
                                {item.category }
                              </p>
                            </div>
                          </div>
                        </button>
                        <div
                          className="card-footer"
                          style={{ paddingLeft: "0%", paddingRight: "0%" }}
                        >
                          <p className="card-footer-price">
                            Price : Rs.
                            <span id="product-modal-price">
                              {item.price}
                            </span>
                          </p>
                          <button
                            className="card-footer-AddToCart"
                            onClick={()=>{handleAddToCart(item._id)}}
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
                        >
                          <div className="decs-container">
                            <img
                              className="card-img-top"
                              alt="p1"
                              src={`data:image/${
                                item.img.contentType
                              };base64,${Buffer.from(item.img.data).toString(
                                "base64"
                              )}`}
                            />
                            <div className="card-body p-2">
                              <h5 className="card-title text-white">
                                {item.name }
                              </h5>
                              <p className="card-text">
                                {item.category}
                              </p>
                            </div>
                          </div>
                        </button>
                        <div
                          className="card-footer"
                          style={{ paddingLeft: "0%", paddingRight: "0%" }}
                        >
                          <p className="card-footer-price">
                            Price : Rs.
                            <span id="product-modal-price">
                              {item.price}
                            </span>
                          </p>
                          <button
                            className="card-footer-AddToCart"
                            onClick={()=>{handleAddToCart(item._id)}}
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
          </div>
        </div>
        </>
        )
      }
     
    </div>
  );
};

export default Products;
