import React from 'react'
import imagesdata from '../../data/imagesdata';
  import { useTranslation } from "react-i18next";
  import { useEffect } from "react";
const Team = () => {
     useEffect(() => {
       window.scrollTo(0, 0);
     }, []);
     const [t, i18n] = useTranslation("global");
  return (
    <div className="team">
      <div className="contact-bg my-5 pb-5">
        <div className=" mt-5 contact p-5 container text-center rounded-3 pb-5">
          <h1 className=" mt-5  ">{t("teamHead")}</h1>
          <p className="text-center">
            <a href="/">{t("menu1")}</a>
            <i className=" mx-2 fa-solid fa-angle-right"></i> <span>{t("dropmenu2")}</span>
          </p>
        </div>
      </div>
      <div className="container">
        <div className="teams row">
          {imagesdata.map((item) => (
            <div className="card-con col-12 col-sm-12 col-md-6 col-lg-3">
              <div className="card1 card-single mb-5 ">
                {/* <p className="m-2 category text-end">{item.category}</p> */}
                <div>
                  <img
                    src={item.photo}
                    className="p-4 card-img-top"
                    alt="..."
                  />
                </div>

                <h5 className="mt-3 mb-2 text-center fw-bolder">
                  {item.title}
                </h5>
                <p style={{ color: "#B19777" }} className="text-center">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team