import React, { useEffect, useState } from "react";
import "./Products.css";
// import "./ProductsScroll";
import ProductSliderCorousel from "./ProductSliderCorousel";
import ProductService from "../../../services/ProductService";
import { Buffer } from "buffer";
import UserActionService from "../../../services/UserActionService";
import LoaderComp from "../../Loader";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../../store/slices/productsSlice.jsx";

const mapCategoryTitle = [
  { title: "Latest Product", category: "LatestCategory" },
  { title: "Whey Proteins", category: "ProteinCategory" },
  { title: "Nutrients : Vitamins & Minerals", category: "NutrientsCategory" },
  { title: "Energy & Endurance", category: "EnergyCategory" },
  { title: "Recovery & Repairs", category: "RecoveryCategory" },
];

const Products = (props) => {
  const { setmyAlert } = props;
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsState.products);
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const userDetails = useSelector((state) => state.user.userDetails);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const getProducts = async () => {
    try {
      setIsLoading(true);
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
  console.log("🚀 ~ getProducts ~ data:", data)

  const handleAddToCart = async (productid) => {
    if (
      isLoggedIn === undefined ||
      isLoggedIn == null ||
      userDetails === undefined ||
      userDetails === null ||
      isLoggedIn === false
    ) {
      setmyAlert("SignIn To Buy Product", "error");
    } else {
      const obj = {
        productid: productid,
        userid: userDetails._id,
      };
      const res = await UserActionService.addToCart(obj);
      setmyAlert(res.msg, res.error ? "error" : "success");
    }
  };

  useEffect(() => {
    if (products == null || products === undefined) {
      getProducts();
    } else {
      setData(products);
    }
  }, []);

  return (
    <div>
      <ProductSliderCorousel />
      {isLoading ? (
        <LoaderComp></LoaderComp>
      ) : (
        <>
          {mapCategoryTitle &&
            mapCategoryTitle.map((it) => (
              <div className={it.category}>
                <div className="latestProductsHeader">
                  <div className="latestTradings">
                    <h3 className="title_LT">{it.title}</h3>
                    <i
                      id="rightArrow"
                      className="fa fa-solid fa-2x fa-angle-right"
                      aria-hidden="true"
                    ></i>
                  </div>
                  {it.category === "LatestCategory" ? (
                    <div className="search-container">
                      <form
                        style={{ flexDirection: "row" }}
                        action="/productSearchResult"
                        name="logform"
                        method="POST"
                      >
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
                  ) : null}
                </div>
                <div className="productsSection">
                  <button
                    id={`arrowLeft${it.category}`}
                    className="arrow arrow-left"
                    type="button"
                  >
                    <i
                      id="latestProductsCategory"
                      className="fa fa-angle-double-left"
                      aria-hidden="true"
                    ></i>
                  </button>
                  <button
                    id={`arrowLeft${it.category}`}
                    className="arrow arrow-right"
                    type="button"
                  >
                    <i
                      id="latestProductsCategory"
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    ></i>
                  </button>
                  <div id={it.category} className="allProduct mx-3">
                    {data &&
                      data[it.category] !== undefined &&
                      data[it.category] !== null &&
                      data[it.category].map((item) => (
                        <div className="col mx-2">
                          <div className="inner-col">
                            <div className="card h-auto bg-dark">
                              <button
                                type="button"
                                className="btn-decs-container"
                                data-bs-toggle="modal"
                                data-bs-target={`#${it.category}Modal${item._id}`}
                              >
                                <div className="decs-container">
                                  <img
                                    className="card-img-top-product"
                                    alt="p1"
                                    src={`data:image/${
                                      item.img.contentType
                                    };base64,${Buffer.from(
                                      item.img.data
                                    ).toString("base64")}`}
                                  />
                                  <div className="card-body-product p-2">
                                    <h5
                                      style={{
                                        fontFamily: "Ubuntu, sans-serif",
                                      }}
                                      className="card-title text-white"
                                    >
                                      {item.name}
                                    </h5>
                                    <p className="card-text-product">
                                      {item.category}
                                    </p>
                                  </div>
                                </div>
                              </button>
                              <div
                                className="card-footer"
                                style={{
                                  paddingLeft: "0%",
                                  paddingRight: "0%",
                                }}
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
                                  data-bs-target={`#${it.category}Modal${item._id}`}
                                >
                                  Add To Cart
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                  <div id={`${it.category}${"Modal"}`}>
                    {data &&
                      data[it.category] !== undefined &&
                      data[it.category] !== null &&
                      data[it.category].map((item) => (
                        <div
                          className="modal"
                          id={`${it.category}Modal${item._id}`}
                        >
                          <div className="modal-dialog modal-dialog-centered modal-lg">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h1
                                  className="modal-title fs-5 text-center"
                                  id="exampleModalLabel"
                                >
                                  {item.name}
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
                                    };base64,${Buffer.from(
                                      item.img.data
                                    ).toString("base64")}`}
                                  />
                                </div>
                                <div className="modal-product-description">
                                  <h3
                                    style={{ textAlign: "center" }}
                                    className="card-text-product"
                                  >
                                    Category {item.category}
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
                                    {item.price}
                                  </span>
                                </p>
                                
                                  <button
                                    type="submit"
                                    className="btn bg-dark"
                                    onClick={() => {
                                      handleAddToCart(item._id);
                                    }}
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
            ))}
        </>
      )}
    </div>
  );
};

export default Products;
