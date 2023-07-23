import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";


const Gallery = () => {
    const [t, i18n] = useTranslation("global");

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div>
      <div class="gallery row align-items-md-stretch ">
        <div className="mt-5 gallery-bg p-5 container text-center rounded-3 pb-5 mb-5">
          <h1 className=" mt-5">Gallery</h1>
          <p className="text-center mb-5">
            <a href="/">Home</a>
            <i className=" mx-2 fa-solid fa-angle-right"></i>{" "}
            <span> Gallery</span>
          </p>
        </div>

        <div class="col-md-6">
          <div class="h-100 p-5  rounded-3" data-aos={"zoom-out-down"}>
            <img
              src="http://ollis.like-themes.com/wp-content/uploads/2018/02/article_01-755x500.jpg"
              width={"100%"}
              alt=""
            ></img>
            <h1 className="mt-5 text-center">{t("galleryImg1")}</h1>
          </div>
        </div>
        <div class="col-md-6">
          <div class=" p-5  rounded-3" data-aos={"zoom-out-right"}>
            <img
              src="http://ollis.like-themes.com/wp-content/uploads/2018/02/article_02-755x500.jpg"
              width={"100%"}
              alt=""
            ></img>
            <h1 className="mt-5 text-center">{t("galleryImg2")}</h1>
          </div>
        </div>
        <div class="col-md-6">
          <div class="h-100 p-5  rounded-3" data-aos={"zoom-out-down"}>
            <img
              src="http://ollis.like-themes.com/wp-content/uploads/2018/02/article_05-755x500.jpg"
              width={"100%"}
              alt=""
            ></img>
            <h1 className="mt-5 text-center">{t("galleryImg3")}</h1>
          </div>
        </div>
        <div class="col-md-6">
          <div class="p-5  rounded-3" data-aos={"zoom-out-right"}>
            <img
              src="http://ollis.like-themes.com/wp-content/uploads/2018/02/article_09-755x500.jpg"
              width={"100%"}
              alt=""
            ></img>
            <h1 className="mt-5 text-center">{t("galleryImg4")}</h1>
          </div>
        </div>
        <div class="col-md-6">
          <div class="h-100 p-5  rounded-3" data-aos={"zoom-out-down"}>
            <img
              src="http://ollis.like-themes.com/wp-content/uploads/2018/02/article_16-755x500.jpg"
              width={"100%"}
              alt=""
            ></img>
            <h1 className="mt-5 text-center">{t("galleryImg5")}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
