import React, { useContext } from "react";
import { useEffect } from "react";
import { ProductContext } from "../../context/ProductContext";
  import i18next from "i18next";
  import { useTranslation } from "react-i18next";

const Testimonials: React.FC = () => {
  const [product] = useContext(ProductContext);
   const [t, i18n] = useTranslation("global");
     useEffect(() => {
       window.scrollTo(0, 0);
     }, []);
  return (
    <div className="testimonial mb-5">
      <div className="contact-bg my-5 pb-5">
        <div className=" mt-5 contact p-5 container text-center rounded-3 pb-5">
          <h1 className=" mt-5  ">{t("dropmenu1")}</h1>
          <p className="text-center">
            <a href="/">{t("menu1")}</a>
            <i className=" mx-2 fa-solid fa-angle-right"></i>{" "}
            <span> {t("dropmenu1")}</span>
          </p>
        </div>
      </div>
      <div className="head text-center mb-5">
        <p>{t("testimonialhead")}</p>
        <h1 className="mt-2">{t("testimonialHead")}</h1>
      </div>
      <div className="test-con">
        <div
          id="carouselExampleControlsNoTouching"
          className="carousel slide"
          data-bs-touch="false"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="px-4 py-3 text-center">
                <i className="fa-solid fa-quote-right "></i>

                <div className="col-lg-6 mx-auto">
                  <p className="lead mb-4 mt-5">{t("testimonialUser1")}</p>
                  <div className="image d-grid gap-2 d-sm-flex align-items-center justify-content-center">
                    <img
                      width={70}
                      height={70}
                      src={"http://ollis.like-themes.com/wp-content/uploads/2018/02/client-01-110x110.jpg"}
                      alt=""
                    />
                  </div>
                  <h6 className="my-2">Stefania Rashard</h6>
                  <p className="free">{t("testimonialPosition1")}</p>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="px-4 py-3 text-center">
                <i className="fa-solid fa-quote-right "></i>

                <div className="col-lg-6 mx-auto">
                  <p className="lead mb-4 mt-5">{t("testimonialUser2")}</p>
                  <div className="image d-grid gap-2 d-sm-flex align-items-center justify-content-center">
                    <img
                      width={70}
                      height={70}
                      src={"http://ollis.like-themes.com/wp-content/uploads/2018/02/client-02-110x110.jpg"}
                      alt=""
                    />
                  </div>
                  <h6 className="my-2">Patric stone</h6>
                  <p className="free">Freelancer</p>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="px-4 py-3 text-center">
                <i className="fa-solid fa-quote-right "></i>

                <div className="col-lg-6 mx-auto">
                  <p className="lead mb-4 mt-5">{t("testimonialUser3")}</p>
                  <div className="image d-grid gap-2 d-sm-flex align-items-center justify-content-center">
                    <img
                      width={70}
                      height={70}
                      src={"http://ollis.like-themes.com/wp-content/uploads/2018/02/client-04-110x110.jpg"}
                      alt=""
                    />
                  </div>
                  <h6 className="my-2">Hugo James</h6>
                  <p className="free">{t("testimonialPosition3")}</p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="prev"
          >
            <a href="slide" className="">
              <button
                style={{
                  color: "black",
                  backgroundColor: "#fff",
                  padding: "10px 15px",
                  fontSize: "30px",
                  border: "none",
                }}
                className="fa-solid fa-arrow-left"
                aria-hidden="true"
              ></button>
              <span className="visually-hidden">Previous</span>
            </a>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="next"
          >
            <a href="slide" className="">
              <button
                style={{
                  color: "black",
                  backgroundColor: "#fff",
                  padding: "10px 15px",
                  fontSize: "30px",
                  border: "none",
                }}
                className="fa-solid fa-arrow-right"
                aria-hidden="true"
              ></button>
              <span className="visually-hidden">Previous</span>
            </a>
          </button>
        </div>
      </div>
      <div className="masonry"></div>
    </div>
  );
};

export default Testimonials;
