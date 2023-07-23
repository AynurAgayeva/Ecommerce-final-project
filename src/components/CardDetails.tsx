import React, { useContext } from "react";

import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import productdata from "../data/productdata";
import { useCart } from "react-use-cart";


interface ProductDetailsProps {}

const CartDetails: React.FC<ProductDetailsProps> = () => {
  const { addItem } = useCart();


  const [product] = useContext(ProductContext);
  const { url } = useParams<{ url: string }>();
  const productdetails: any = productdata.find((p) => p.id.toString() === url);
  return (
    <div className="container col-xxl-8 px-4 py-5 mt-5">
     
      <div className="row flex-lg-row-reverse align-items-center g-5 ">
       
        <div className="col-10 col-sm-8 col-lg-6">
          <h2 className="fw-bold lh-1 mb-4">{productdetails.title}</h2>
          <div className="top d-flex justify-content-between">
            
           
           
          </div>
        

        

          <div className="wish mt-3 ">
            <span style={{ fontSize: "13px" }}>
              <i className="fa-regular fa-heart me-2"></i>Wishlist{" "}
              <span className="mx-3"></span>
              <i className="fa-solid fa-code-compare me-2"></i>Compare
            </span>
            <button
              className="btn btn-dark ms-5"
              onClick={() => {
                addItem(productdetails);
              }}
            >
              +Add to cart
            </button>
          </div>
          <hr className="dashed" />

          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <div className="meta">
              <div className="sku">
                <span style={{ fontWeight: "500" }}>SKU:</span>
                {productdetails.sku}
              </div>
              <div className="cate">
                <span style={{ fontWeight: "500" }}>Categories:</span>
                {productdetails.category}
              </div>
              <div>
                <span style={{ fontWeight: "500" }}>Brands</span>: Brand 03,
                Brand 04, Brand 06
              </div>
            </div>
            <span></span>
          </div>

          <p>{}</p>
        </div>
    
      </div>
    </div>
  );
};

export default CartDetails;
