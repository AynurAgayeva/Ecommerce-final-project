import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ProductContext } from "../context/ProductContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "react-use-wishlist";
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useTranslation } from "react-i18next";

interface Propst {
  photo: string;
  photoDark: string;
  title: string;
  discount: number;
  price: number;
  id: number;
  alldata: any;
  category: any;
  cart: any;
  rate: any;
}
const SingleProduct: React.FC<Propst> = ({
     
  photo,
  photoDark,
  title,
  discount,
  price,
  id,
  category,
  cart,
  rate,
  alldata,
}) => {
  const { addItem } = useCart();
  const { addWishlistItem } = useWishlist();
  const [t, i18n] = useTranslation("global");
  const notify = () =>
    toast.success("Product has been added to cart", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      theme: "colored",
    });
     const notify2 = () =>
       toast.info("Product has been added to wish", {
         position: "bottom-right",
         autoClose: 1000,
         hideProgressBar: true,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: 0,
         theme: "colored",
       });

  const [product, setProduct] = useContext(ProductContext);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div className="daily mb-5 col-12 col-sm-12 col-md-6 col-lg-6">
        <div
          className="card card-single"
          data-aos={"zoom-in-down"}
          style={{ border: "none" }}
        >
          <Link
            className="product-url"
            to={`/product/${id}`}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <img src={photo} className="card-img-top logo-dark" alt="..." />
            <img
              src={photoDark}
              className="card-img-top logo-white"
              alt="..."
            />
          </Link>
        </div>
        <button
          className="my-3"
          style={{
            border: "none",
            backgroundColor: "#e5e5e5",
            padding: "3px 8px",
          }}
          type="button"
          data-bs-toggle="modal"
          data-bs-target={`#exampleModal${id}`}
        >
          {t("productsViewBtn")}
        </button>
        <div
          className="modal fade"
          id={`exampleModal${id}`}
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  {title}
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <img
                  className="logo-dark"
                  src={photo}
                  alt=""
                  width={"100%"}
                  style={{ cursor: "zoom-in" }}
                />

                <img
                  src={photoDark}
                  className="card-img-top logo-white"
                  alt="..."
                  width={"100%"}
                  style={{ cursor: "zoom-in" }}
                />
              </div>
              <div className="container d-flex justify-content-between align-items-center">
                <div className="products">
                  <h5 className="mt-2 mb-3">Product Details</h5>
                  <ul>
                    <li
                      style={{
                        fontWeight: "500",
                        color: "#707070",
                        fontSize: "15px",
                        marginBottom: "7px",
                      }}
                    >
                      Seating Capacity: 2
                    </li>
                    <li
                      style={{
                        fontWeight: "500",
                        color: "#707070",
                        fontSize: "15px",
                        marginBottom: "7px",
                      }}
                    >
                      Weight Capacity: 550 lb.
                    </li>
                    <li
                      style={{
                        fontWeight: "500",
                        color: "#707070",
                        fontSize: "15px",
                        marginBottom: "7px",
                      }}
                    >
                      Adult Assembly Required: Yes
                    </li>
                  </ul>
                </div>
                {discount ? (
                  <>
                    <button
                      className="price  text-decoration-line-through"
                      style={{
                        border: "none",
                        background: "none",
                        fontSize: "20px",
                      }}
                    >
                      ${price}
                    </button>
                    <button
                      style={{
                        color: "red",
                        border: "none",
                        background: "none",
                        fontSize: "20px",
                      }}
                      className="discount "
                    >
                      ${discount}
                    </button>
                  </>
                ) : (
                  <button
                    className="price"
                    style={{
                      border: "none",
                      background: "none",
                      fontSize: "20px",
                    }}
                  >
                    ${price}
                  </button>
                )}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <h6 className="my-2">{title}</h6>
        {discount ? (
          <>
            <button
              className="price me-3  text-decoration-line-through"
              style={{
                border: "none",
                background: "none",
                fontSize: "20px",
              }}
            >
              ${price}
            </button>
            <button
              style={{
                color: "red",
                border: "none",
                background: "none",
                fontSize: "20px",
              }}
              className="discount "
            >
              ${discount}
            </button>
          </>
        ) : (
          <button
            className="price me-3"
            style={{
              border: "none",
              background: "none",
              fontSize: "20px",
            }}
          >
            ${price}
          </button>
        )}
        <hr />

        <div className="end d-flex justify-content-between">
          <button
            className="btn btn-outline add"
            onClick={() => {
              notify();
              addItem(alldata);
            }}
          >
            {t("homeProductBtn")}
          </button>
          <ToastContainer
            position="bottom-right"
            autoClose={2000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          <span>
            <button
              className="b-0 wish"
              onClick={() => {
                notify2();
                addWishlistItem(alldata);
              }}
              style={{ background: "none", border: "none" }}
            >
              <i className="fa-regular fa-heart me-3"></i>
            </button>
            <i className="fa-solid fa-code-compare"></i>
          </span>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
