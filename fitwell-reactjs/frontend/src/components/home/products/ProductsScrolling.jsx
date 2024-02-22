import React from "react";


import "./Products.css";

const mapCategoryTitle = [
  { title: "Latest Product", category: "LatestCategory" },
  { title: "Whey Proteins", category: "ProteinCategory" },
  // { title: "Nutrients : Vitamins & Minerals", category: "NutrientsCategory" },

];

const ProductsScrolling = () => {


  return (
    <div>
      {mapCategoryTitle &&
        mapCategoryTitle.map((it) => (
          <div >
            <div className="latestProductsHeader">
              <div className="latestTradings">
                <h3 className="title_LT">{it.title}</h3>
              </div>
            </div>
            <div className="productsSection">
              <div id={`arrowLeft${it.category}`} className="arrow arrow-left">
                <i
                  id="latestProductsCategory"
                  className="fa fa-angle-double-left"
                  aria-hidden="true"
                ></i>
              </div>
              <div
                id={`arrowRight${it.category}`}
                className="arrow arrow-right"
              >
                <i
                  id="latestProductsCategory"
                  className="fa fa-angle-double-right"
                  aria-hidden="true"
                ></i>
              </div>

              <div id={it.category} className="allProduct mx-3">
                    <div className="card-body-product p-2">a</div>
                    <div className="card-body-product p-2">b</div>
                    <div className="card-body-product p-2">c</div>
                    <div className="card-body-product p-2">d</div>
                    <div className="card-body-product p-2">e</div>
                    <div className="card-body-product p-2">f</div>
                    <div className="card-body-product p-2">g</div>
                    <div className="card-body-product p-2">h</div>
                    <div className="card-body-product p-2">i</div>
                    <div className="card-body-product p-2">j</div>
                    <div className="card-body-product p-2">k</div>
                    <div className="card-body-product p-2">l</div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductsScrolling;
