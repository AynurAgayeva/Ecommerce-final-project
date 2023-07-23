import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import productdata from "../data/productdata";
import { useCart } from "react-use-cart";
import { GlassMagnifier } from "react-image-magnifiers";
import { useWishlist } from "react-use-wishlist";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


interface ProductDetailsProps {}

const ProductDetails: React.FC<ProductDetailsProps> = () => {
  const { addItem } = useCart();
    const { addWishlistItem } = useWishlist();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // const [state, setState] = useState(1);
  // const [message, setMessage] = useState({ alertColor: "", alertText: "" });
  const [product] = useContext(ProductContext);
  const { url } = useParams<{ url: string }>();
  const productdetails:any = productdata.find((p) => p.id.toString() === url);
     const notify5 = () =>
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
  return (
    <div className=" col-xxl-8  pb-5 ">
      <div className="contact-bg my-5 pb-5">
        <div className=" mt-5 contact p-5 container text-center rounded-3 pb-5">
          <h1 className="fw-bold mt-5 lh-1 mb-4">{productdetails.title}</h1>
          <p className="text-center">
            <a href="/product">Products</a>
            <i className=" mx-2 fa-solid fa-angle-right"></i>{" "}
            <span> {productdetails.title}</span>
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row  flex-lg-row-reverse align-items-center g-5 ">
          {/* <p
          style={{ fontWeight: "600" }}
          className={`text-center alert ${message.alertColor}`}
        >
          {message.alertText}
        </p> */}
          <div className="col-10 col-sm-8 col-lg-6 product-details">
            <div className="top d-flex justify-content-between">
              <div className="stars d-lg-flex d-none">
                <p>
                  <span>
                    <i
                      className={
                        productdetails.rate >= 2
                          ? "fa-solid fa-star"
                          : productdetails.rate >= 1.5
                          ? "fa-solid fa-star-half-stroke"
                          : "fa-regular fa-star"
                      }
                    ></i>
                  </span>
                  <span>
                    <i
                      className={
                        productdetails.rate >= 3
                          ? "fa-solid fa-star"
                          : productdetails.rate >= 2.5
                          ? "fa-solid fa-star-half-stroke"
                          : "fa-regular fa-star"
                      }
                    ></i>
                  </span>
                  <span>
                    <i
                      className={
                        productdetails.rate >= 4
                          ? "fa-solid fa-star"
                          : productdetails.rate >= 3.5
                          ? "fa-solid fa-star-half-stroke"
                          : "fa-regular fa-star"
                      }
                    ></i>
                  </span>
                  <span>
                    <i
                      className={
                        productdetails.rate >= 5
                          ? "fa-solid fa-star"
                          : productdetails.rate >= 4.5
                          ? "fa-solid fa-star-half-stroke"
                          : "fa-regular fa-star"
                      }
                    ></i>
                  </span>
                  <span>
                    <i
                      className={
                        productdetails.rate >= 6
                          ? "fa-solid fa-star"
                          : productdetails.rate >= 5.5
                          ? "fa-solid fa-star-half-stroke"
                          : "fa-regular fa-star"
                      }
                    ></i>
                  </span>
                </p>
                <a
                  href="/review"
                  className=""
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: 500,
                  }}
                ></a>
              </div>
              <p className="mb-3" style={{ fontSize: "14px", fontWeight: 500 }}>
                {" "}
                {productdetails.status ? (
                  <div style={{ color: "green" }}>
                    <i className="fa-solid fa-check"></i> In stock
                  </div>
                ) : (
                  <div style={{ color: "red" }}>
                    <i className="fa-solid fa-xmark"></i> Out of stock
                  </div>
                )}
              </p>
              <div className="iconPro">
                <a
                  className="link"
                  target={"_blank"}
                  href="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fdemo.theme-sky.com%252Fmydecor%252Fshop%252Fzinus-mikihaile-loveseat-sofa-couch-from-korean%252F&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=ru_RU"
                >
                  <i
                    className="fa-brands fa-facebook"
                    style={{
                      color: "blue",
                      marginRight: "5px",
                      fontSize: "18px",
                    }}
                  ></i>
                </a>
                <a
                  className="link"
                  target={"_blank"}
                  href="https://twitter.com/intent/tweet?text=https://demo.theme-sky.com/mydecor/shop/zinus-mikihaile-loveseat-sofa-couch-from-korean/"
                >
                  <i
                    className="fa-brands fa-twitter"
                    style={{
                      marginRight: "5px",
                      fontSize: "18px",
                    }}
                  ></i>
                </a>
                <a
                  className="link"
                  target={"_blank"}
                  href="https://www.pinterest.com/pin/create/button/?url=https://demo.theme-sky.com/mydecor/shop/zinus-mikihaile-loveseat-sofa-couch-from-korean/&media=https://mydecor-be87.kxcdn.com/mydecor/wp-content/uploads/2021/01/13.jpg"
                >
                  <i
                    className="fa-brands fa-pinterest"
                    style={{
                      color: "#A20401",
                      marginRight: "5px",
                      fontSize: "18px",
                    }}
                  ></i>
                </a>
                <a
                  className="link"
                  target={"_blank"}
                  href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26url%3Dhttps%3A%2F%2Fdemo.theme-sky.com%2Fmydecor%2Fshop%2Fzinus-mikihaile-loveseat-sofa-couch-from-korean%2F%26title%3Dsofa-couch-from-korean"
                >
                  <i
                    className="fa-brands fa-linkedin"
                    style={{
                      color: "blue",
                      marginRight: "5px",
                      fontSize: "18px",
                    }}
                  ></i>
                </a>
              </div>
            </div>
            <h5 className="mt-2 mb-3">Product Details</h5>
            <ul className="seating">
              <li
                className="my-3"
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
                className="my-3"
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
                className="my-3"
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

            {productdetails.discount ? (
              <>
                <button
                  className="price  text-decoration-line-through"
                  style={{
                    border: "none",
                    background: "none",
                    fontSize: "20px",
                  }}
                >
                  ${productdetails.price}
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
                  ${productdetails.discount}
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
                ${productdetails.price}
              </button>
            )}

            <div className="wish mt-3 ">
              <button
                className="btn"
                onClick={() => {
                          notify2();
                  addWishlistItem(productdetails);
                }}
                style={{ fontSize: "13px" }}
              >
                <i className="fa-regular fa-heart me-2"></i>Wishlist{" "}
              </button>
              <span className="mx-3"></span>
              <i className="fa-solid fa-code-compare me-2"></i>Compare
              {productdetails.status ? (
                <button
                  className="btn btn-dark m-2 mx-5 me-2"
                  onClick={() => {
                    notify5();
                    addItem(productdetails);
                  }}
                >
                  Add to cart
                </button>
              ) : (
                ""
              )}
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
            </div>
            <hr className="dashed" />

            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <div className="meta ">
                <div className="sku my-1">
                  <span style={{ fontWeight: "500" }}>SKU:</span>
                  {productdetails.sku}
                </div>
                <div className="cate my-2">
                  <span style={{ fontWeight: "500" }}>Categories:</span>
                  {productdetails.category}
                </div>
                <div className="my-2">
                  <span style={{ fontWeight: "500" }}>Brands</span>: Brand 03,
                  Brand 04, Brand 06
                </div>
              </div>
              <span></span>
            </div>

            <p>{}</p>
          </div>
          <div className=" col-lg-6">
            <GlassMagnifier
              imageSrc={productdetails.photo}
              imageAlt="Example"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
