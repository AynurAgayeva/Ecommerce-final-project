import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Blog from "../components/Blog";
import organicImg from "../images/organic.png";
import shippedImg from "../images/shipped.png";
import shieldImg from "../images/shield.png";
import pricetagImg from "../images/pricetag.png";
import supportImg from "../images/support.png";
import cardImg from "../images/card.png";
import { Component } from "react";
import Slider from "react-slick";
import logoOne from "../images/logo1 (1).png";
import logoTwo from "../images/logo2 (2).png";
import logoThree from "../images/logo3 (3).png";
import logoFour from "../images/logo4 (4).png";
import logoFive from "../images/logo5 (5).png";
import logoSix from "../images/logo6 (6).png";
import { langEn, langAz } from "../data/langdata";
import { useState } from "react";
import { useCart } from "react-use-cart";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home: React.FC = () => {
  const [product] = useContext(ProductContext);
  const { addItem } = useCart();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const [t, i18n] = useTranslation("global");
  const location = useLocation();

  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
  return (
    <div>
      <div className="hero">
        <Slider {...settings}>
          <div className="carousel-item item-two pt-lg-5 active mb-0 pb-lg-0 pb-5  ">
            <section className="main  container mt-lg-3 pt-lg-0 pe-4">
              <div className="row">
                <div className="col-lg-6 col-sm-12 col-md-12 py-5 ">
                  <div className="ms-lg-5 main-left w-60 py-lg-5  ">
                    <h1 className="">
                      <span>{t("bannerHead")} </span> {t("bannerhead")}
                    </h1>

                    <p className="py-lg-5">{t("bannerdesc")}</p>
                    <div className="btn-con">
                      <a href="/product" className="shop">
                        {t("bannerbtn")} →{" "}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-10 col-sm-8  col-lg-6 mt-lg-5 py-lg-5">
                  <div className="main-right ms-lg-5">
                    <img
                      src="http://ollis.like-themes.com/wp-content/uploads/2018/02/FUR_SLIDE_02.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="carousel-item item-two pt-lg-5 exclusive pb-lg-0 pb-5 ">
            <section className="main  container mt-lg-3 pt-lg-0 pe-4">
              <div className="row">
                <div className="col-lg-6 col-sm-12 col-md-12 py-5 ">
                  <div className="ms-lg-5 main-left w-60  py-lg-5">
                    <h1 className="">
                      <span>{t("bannerHead2")}</span> <br />
                      {t("bannerhead2")}
                    </h1>

                    <p className="py-lg-5">{t("bannerdesc")}</p>
                    <div className="btn-con">
                      <a href="/product" className="shop">
                        {t("bannerbtn")} →{" "}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-10 col-sm-8  col-lg-6 mt-lg-5 py-lg-5">
                  <div className="main-right ms-lg-5" data-aos={"flip-left"}>
                    <img
                      src="http://ollis.like-themes.com/wp-content/uploads/2018/02/FUR_SLIDE_01.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="carousel-item item-two pt-lg-5 pb-lg-0 pb-5 ">
            <section className="main  container mt-lg-3 pt-lg-0 pe-4">
              <div className="row">
                <div className="col-lg-6 col-sm-12 col-md-12 py-5 ">
                  <div className="ms-lg-5 main-left w-60  py-lg-5">
                    <h1 className="">
                      <span>{t("bannerHead3")}</span> <br />
                      {t("bannerhead3")}
                    </h1>

                    <p className="py-lg-5">{t("bannerdesc")}</p>
                    <div className="btn-con">
                      <a href="/product" className="shop">
                        {t("bannerbtn")} →{" "}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-10 col-sm-8  col-lg-6 mt-lg-5 py-lg-5">
                  <div className="main-right ms-lg-5 ">
                    <img
                      src="http://ollis.like-themes.com/wp-content/uploads/2018/02/FUR_SLIDE_03.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Slider>
      </div>

      <div className="preview mt-0 mb-5">
        <div className="row g-2 ">
          <div className=" preview-left py-5 col-12 col-lg-6">
            <div className="px-4  my-5 text-center">
              <h1 className="display-5 fw-bold pb-2">
                {t("previewHeaderLeft")}
              </h1>
              <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">{t("previewdesc")}</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                  <button 
                    type="button"
                    className="btn btn-outline-secondary btn-lg px-4"
                  >
                    {t("previewBtn")} →
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 py-5 preview-right">
            <div className="px-4 my-5 text-center">
              <h1 className="display-5 pb-3 fw-bold ">
                {t("previewHeaderRight")}
              </h1>
              <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">{t("previewdesc")}</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-lg px-4"
                  >
                    {t("previewBtn")} →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container homeproducts text-center my-5">
        <p id="online" className="mt-5">
          {t("homeProducthead")}
        </p>
        <h1 className="text-center future my-3">{t("homeProductHead")}</h1>
        <div className="row">
          {product.slice(3, 11).map((item: any) => (
            <div className="card-con col-12 col-sm-12 col-md-6 col-lg-3">
              <div className="card card-single mb-5 ">
                <div>
                  {item.status ? (
                    <p
                      className=" category m-1 pe-2 "
                      style={{
                        whiteSpace:"nowrap",
                        fontSize: "12px",
                        padding: "13px 5px",
                        color: "#fff",
                        borderRadius: "50%",
                        backgroundColor: "#ae9775",
                        width: "58px",
                      }}
                    >
                      {t("productSale")}
                    </p>
                  ) : (
                    <div className="mt-5"></div>
                  )}
                  <Link className="product-url" to={`/product/${item.id}`}>
                    <img
                      src={item.photo}
                      className="card-img-top logo-dark"
                      alt="..."
                    />
                    <img
                      src={item.photoDark}
                      className="card-img-top logo-white"
                      alt="..."
                    />
                  </Link>
                </div>

                <h6 className="my-3 mt-5 text-center">{item.title}</h6>
                <p style={{ color: "#ae9775" }} className="my-2 text-center">
                  <span>
                    <i
                      className={
                        item.rate >= 2
                          ? "fa-solid fa-star"
                          : item.rate >= 1.5
                          ? "fa-solid fa-star-half-stroke"
                          : "fa-regular fa-star"
                      }
                    ></i>
                  </span>
                  <span>
                    <i
                      className={
                        item.rate >= 3
                          ? "fa-solid fa-star"
                          : item.rate >= 2.5
                          ? "fa-solid fa-star-half-stroke"
                          : "fa-regular fa-star"
                      }
                    ></i>
                  </span>
                  <span>
                    <i
                      className={
                        item.rate >= 4
                          ? "fa-solid fa-star"
                          : item.rate >= 3.5
                          ? "fa-solid fa-star-half-stroke"
                          : "fa-regular fa-star"
                      }
                    ></i>
                  </span>
                  <span>
                    <i
                      className={
                        item.rate >= 5
                          ? "fa-solid fa-star"
                          : item.rate >= 4.5
                          ? "fa-solid fa-star-half-stroke"
                          : "fa-regular fa-star"
                      }
                    ></i>
                  </span>
                  <span>
                    <i
                      className={
                        item.rate >= 6
                          ? "fa-solid fa-star"
                          : item.rate >= 5.5
                          ? "fa-solid fa-star-half-stroke"
                          : "fa-regular fa-star"
                      }
                    ></i>
                  </span>
                </p>
                <div className="text-center my-3">
                  {item.discount ? (
                    <>
                      <button
                        className="price  text-decoration-line-through"
                        style={{
                          border: "none",
                          background: "none",
                          fontSize: "20px",
                        }}
                      >
                        ${item.price}
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
                        ${item.discount}
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
                      ${item.price}
                    </button>
                  )}
                </div>
                <ul className="text-center mb-4">
                  <button
                    className="btn btn-outline-dark home-add rounded-0"
                    onClick={() => {
                      notify5();
                      addItem(item);
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
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="seat my-5 mt-lg-0 pt-lg-0 ">
        <div className="row container  pt-5  ">
          <div className="col-lg-6 col-sm 12 col-md-12 py-5  ">
            <div className="ms-5 ps-lg-5 seat-left py-4">
              <h1 className=" ">
                {t("softSeatHead")} <br />
                <span> {t("softSeathead")} </span>
              </h1>

              <p className="py-4 ">{t("bannerdesc")}</p>
              <div className="price mb-4  ">
                <button className=" text-center text-decoration-line-through">
                  $390
                </button>

                <button className="ms-3">
                  <span>$259</span>
                </button>
              </div>
              <div className="shop">
                <Link
                  type="button"
                  to="/product"
                  className=" btn-lg mt-3 add  text-decoration-none"
                >
                  {t("bannerbtn")}→{" "}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-10 col-sm-8 mt-lg-5    col-lg-6  py-5">
            <div className="seat-right  d-flex align-items-center justify-content-center">
              <div className="circle">
                {" "}
                <h2>-50%</h2>
              </div>

              <img
                src="http://ollis.like-themes.com/wp-content/uploads/2020/01/discount-chair-cut.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="capability-card mt-5 pt-5  ps-5 pe-5">
        <div className="row g-5 d-flex align-items-center justify-content-evenly">
          <div className="col-12 col-sm-6 col-md-4">
            <div
              className="card p-3"
              style={{ border: "none", boxShadow: "0 0 20px rgb(0 0 0 / 5%)" }}
            >
              <div className="img-card mt-3 d-flex align-items-center justify-content-center">
                <img width="80px" src={shippedImg} alt="" />
              </div>
              <div className="card-body">
                <h4 className="text-center card-title">
                  {t("capabilityFree")}
                </h4>
                <p
                  style={{
                    fontSize: 16,
                    color: "#595959",
                    lineHeight: "1.6rem",
                  }}
                  className="card-text"
                >
                  {t("capabilityFreeDesc")}
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div
              className="card p-3"
              style={{ border: "none", boxShadow: "0 0 20px rgb(0 0 0 / 5%)" }}
            >
              <div className="img-card mt-3 d-flex align-items-center justify-content-center">
                <img width="80px" src={shieldImg} alt="" />
              </div>
              <div className="card-body">
                <h4 className="text-center card-title">
                  {t("capabilityGuar")}
                </h4>
                <p
                  style={{
                    fontSize: 16,
                    color: "#595959",
                    lineHeight: "1.6rem",
                  }}
                  className="card-text"
                >
                  {t("capabilityGuarDesc")}
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div
              className="card p-3"
              style={{ border: "none", boxShadow: "0 0 20px rgb(0 0 0 / 5%)" }}
            >
              <div className="img-card mt-3 d-flex align-items-center justify-content-center">
                <img width="80px" src={pricetagImg} alt="" />
              </div>
              <div className="card-body">
                <h4 className="text-center card-title">
                  {t("capabilityDiscount")}
                </h4>
                <p
                  style={{
                    fontSize: 16,
                    color: "#595959",
                    lineHeight: "1.6rem",
                  }}
                  className="card-text"
                >
                  {t("capabilityDiscountDesc")}
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div
              className="card p-3"
              style={{ border: "none", boxShadow: "0 0 20px rgb(0 0 0 / 5%)" }}
            >
              <div className="img-card mt-3 d-flex align-items-center justify-content-center">
                <img width="80px" src={cardImg} alt="" />
              </div>
              <div className="card-body">
                <h4 className="text-center card-title">
                  {t("capabilityOnline")}
                </h4>
                <p
                  style={{
                    fontSize: 16,
                    color: "#595959",
                    lineHeight: "1.6rem",
                  }}
                  className="card-text"
                >
                  {t("capabilityOnlineDesc")}
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div
              className="card p-3"
              style={{ border: "none", boxShadow: "0 0 20px rgb(0 0 0 / 5%)" }}
            >
              <div className="img-card mt-3 d-flex align-items-center justify-content-center">
                <img width="80px" src={organicImg} alt="" />
              </div>
              <div className="card-body">
                <h4 className="text-center card-title">
                  {t("capabilityCertificate")}
                </h4>
                <p
                  style={{
                    fontSize: 16,
                    color: "#595959",
                    lineHeight: "1.6rem",
                  }}
                  className="card-text"
                >
                  {t("capabilityCertificateDesc")}
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div
              className="card p-3"
              style={{ border: "none", boxShadow: "0 0 20px rgb(0 0 0 / 5%)" }}
            >
              <div className="img-card mt-3 d-flex align-items-center justify-content-center">
                <img width="80px" src={supportImg} alt="" />
              </div>
              <div className="card-body">
                <h4
                  style={{ color: "#0D0845" }}
                  className="text-center card-title"
                >
                  {t("capabilitySupport")}
                </h4>
                <p
                  style={{
                    fontSize: 16,
                    color: "#595959",
                    lineHeight: "1.6rem",
                  }}
                  className="card-text"
                >
                  {t("capabilitySupportDesc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offer-con py-5 my-5">
        <div className="offer row container">
          <div className="offer-left my-5 col-12 col-lg-6 col-md-12 ">
            <div className="offer-input">
              <form>
                <h1 className="h3 mb-3 fw-normal">{t("offerhead")}</h1>
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">{t("offerName")}</label>
                </div>
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">{t("offerEmail")}</label>
                </div>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label htmlFor="floatingPassword">{t("offerPass")}</label>
                </div>

                <button className="w-100 btn btn-lg " type="submit">
                  {t("offerBtn")}
                </button>
              </form>
            </div>
          </div>
          <div className="offer-right  my-5 col-12 col-lg-6 col-md-12">
            <div className=" me-5">
              <h1 className="pt-lg-5 mt-lg-5 ms-lg-5">{t("offerHead")}</h1>

              <button className=" btn-lg mt-3 ms-lg-5 add  text-center ">
                {t("previewBtn")} →{" "}
              </button>
            </div>
          </div>
        </div>
      </div>

      <Blog />
      <div className=" mt-5 ">
        <hr />
        <div className="instagram mt-5">
          <h2 className="text-center my-5"></h2>
          <div className="container">
            <div className="row pt-2">
              <div className="col-6 col-sm-6 col-md-4 col-lg-2 mb-4">
                <div className="card1 p-5">
                  <img
                    src="http://ollis.like-themes.com/wp-content/uploads/2018/02/logo_01.png"
                    className="card-img-top logo-dark"
                    alt="..."
                  />
                  <img className="logo-white" src={logoOne} alt="" />
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2 mb-4">
                <div className="card1 p-4 mt-3">
                  <img
                    src="http://ollis.like-themes.com/wp-content/uploads/2020/01/logo_02.png"
                    className="card-img-top logo-dark"
                    alt="..."
                  />
                  <img className="logo-white" src={logoTwo} alt="" />
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2 mb-4">
                <div className="card1 p-5">
                  <img
                    src="http://ollis.like-themes.com/wp-content/uploads/2018/02/logo_03.png"
                    className="card-img-top logo-dark"
                    alt="..."
                  />
                  <img className="logo-white" src={logoThree} alt="" />
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2 mb-4">
                <div className="card1 p-5">
                  <img
                    src="http://ollis.like-themes.com/wp-content/uploads/2018/02/logo_04.png"
                    className="card-img-top logo-dark"
                    alt="..."
                  />
                  <img className="logo-white" src={logoFour} alt="" />
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2 mb-4">
                <div className="card1 p-5">
                  <img
                    src="http://ollis.like-themes.com/wp-content/uploads/2018/02/logo_05.png"
                    className="card-img-top logo-dark"
                    alt="..."
                  />
                  <img
                    width="180px"
                    className="logo-white"
                    src={logoFive}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-2 mb-4">
                <div className="card1 p-5">
                  <img
                    src="http://ollis.like-themes.com/wp-content/uploads/2018/02/logo_06.png"
                    className="card-img-top logo-dark"
                    alt="..."
                  />
                  <img className="logo-white" src={logoSix} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="news-bg d-flex align-items-center justify-content-center ">
        <div className="newsletter   mt-5 ">
          <div className="news-text  pt-3">
            <h2 className="mb-4 text-center">
              <span>{t("newsHead")}</span> <br />
              {t("newshead")}
            </h2>
            <div className="news-text-bottom d-flex align-items-center justify-content-center  me-3">
              <form className="d-flex align-items-center justify-content-center pb-5">
                <input
                  className=" mb-lg-0   "
                  type="email"
                  placeholder="Your email..."
                />

                <button className=" ms-1 btn-lg"> {t("newsBtn")}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

//  <div
//         id="carouselExampleControlsNoTouching"
//         className="carousel slide"
//         data-bs-touch="false"
//       >
//         <div className="carousel-inner">
//           <div className="carousel-item item-one active ">
//             <section className="main  container mt-lg-3 pt-lg-0 pe-4">
//               <div className="row">
//                 <div className="col-lg-6 col-sm-12 col-md-12 py-5 ">
//                   <div className="ms-lg-5 main-left w-60 py-lg-5  ">
//                     <h1 className="">
//                       <span>Furniture &</span> Interior Design Agency
//                     </h1>

//                     <p className="py-lg-5">
//                       For each project we establish relationships with
//                       partners who we know will help us create added value for
//                       your project. .
//                     </p>
//                     <div className="btn-con">
//                       <button className="shop">SHOP NOW → </button>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-10 col-sm-8  col-lg-6 mt-lg-5 py-lg-5">
//                   <div className="main-right ms-lg-5">
//                     <img
//                       src="http://ollis.like-themes.com/wp-content/uploads/2018/02/FUR_SLIDE_02.png"
//                       alt=""
//                     />
//                   </div>
//                 </div>
//               </div>
//             </section>
//           </div>

//           <div className="carousel-item item-two  ">
//             <section className="main  container mt-lg-3 pt-lg-0 pe-4">
//               <div className="row">
//                 <div className="col-lg-6 col-sm-12 col-md-12 py-5 ">
//                   <div className="ms-lg-5 main-left w-60  py-lg-5">
//                     <h1 className="">
//                       <span>Exclusive </span> <br />
//                       Wood & Leather Furniture
//                     </h1>

//                     <p className="py-lg-5">
//                       For each project we establish relationships with
//                       partners who we know will help us create added value for
//                       your project. .
//                     </p>
//                     <div className="btn-con">
//                       <button className="shop">SHOP NOW → </button>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-10 col-sm-8  col-lg-6 mt-lg-5 py-lg-5">
//                   <div className="main-right ms-lg-5" data-aos={"flip-left"}>
//                     <img
//                       src="http://ollis.like-themes.com/wp-content/uploads/2018/02/FUR_SLIDE_01.png"
//                       alt=""
//                     />
//                   </div>
//                 </div>
//               </div>
//             </section>
//           </div>
//           <div className="carousel-item item-two  ">
//             <section className="main  container mt-lg-3 pt-lg-0 pe-4">
//               <div className="row">
//                 <div className="col-lg-6 col-sm-12 col-md-12 py-5 ">
//                   <div className="ms-lg-5 main-left w-60  py-lg-5">
//                     <h1 className="">
//                       <span>Planning </span> <br />
//                       and Interior Decor
//                     </h1>

//                     <p className="py-lg-5">
//                       For each project we establish relationships with
//                       partners who we know will help us create added value for
//                       your project. .
//                     </p>
//                     <div className="btn-con">
//                       <button className="shop">SHOP NOW → </button>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-10 col-sm-8  col-lg-6 mt-lg-5 py-lg-5">
//                   <div className="main-right ms-lg-5 ">
//                     <img
//                       src="http://ollis.like-themes.com/wp-content/uploads/2018/02/FUR_SLIDE_03.png"
//                       alt=""
//                     />
//                   </div>
//                 </div>
//               </div>
//             </section>
//           </div>
//         </div>
//         <button
//           className="carousel-control-prev"
//           type="button"
//           data-bs-target="#carouselExampleControlsNoTouching"
//           data-bs-slide="prev"
//         >
//           <a href="slide" className="">
//             <button
//               style={{
//                 color: "black",
//                 backgroundColor: "#fff",
//                 padding: "10px 15px",
//                 fontSize: "22px",
//               }}
//               className="fa-solid fa-arrow-left"
//               aria-hidden="true"
//             ></button>
//             <span className="visually-hidden">Previous</span>
//           </a>
//         </button>
//         <button
//           className="carousel-control-next"
//           type="button"
//           data-bs-target="#carouselExampleControlsNoTouching"
//           data-bs-slide="next"
//         >
//           <a href="slide" className="">
//             <button
//               style={{
//                 color: "black",
//                 backgroundColor: "#fff",
//                 padding: "10px 15px",
//                 fontSize: "22px",
//               }}
//               className="fa-solid fa-arrow-right"
//               aria-hidden="true"
//             ></button>
//             <span className="visually-hidden">Previous</span>
//           </a>
//         </button>
//       </div>
