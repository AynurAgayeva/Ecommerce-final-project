import React from 'react'
import { useContext, useState, useEffect } from "react";
import { ThemeModeContext } from "../context/ThemeModeContext";
import { langEn, langAz } from "../data/langdata";
import langMode from "../images/dash-menu.png";
 
  import i18next from "i18next";
  import { useTranslation } from "react-i18next";

const Footer:React.FC = () => {
    const [theme, setTheme] = useContext(ThemeModeContext);

     const [t, i18n] = useTranslation("global");

     const handleChangeLanguage = (lang: string) => {
       i18next.changeLanguage(lang);
       localStorage.setItem("lang", lang);
     };
  return (
    <div>
      <div className="footer-con pt-4">
        <div className="container">
          <footer className="bg-footer row  py-5 ">
            <div className=" olis col-lg-4 col-12 mb-3">

              
              <a
                href="/"
                className=" d-flex align-items-center  mb-4  text-decoration-none"
              >
                <img
                  src="http://ollis.like-themes.com/wp-content/uploads/2018/02/ollis_logo_white_1x.png"
                  alt=""
                />
              </a>
              <a href="" className="round">
                <i className="fa-solid fa-phone-volume"></i> 0 (550) 680-34-12{" "}
                <span className="mt-5">Round-the-clock</span>
              </a>
              <div className="list d-flex mt-4  ">
                <li className="nav-item mb-2 mt-1">
                  <div className="dropdown end-0 mb-3 me-3 bd-mode-toggle">
                    <a
                      id="bd-theme"
                      type="button"
                      aria-expanded="false"
                      data-bs-toggle="dropdown"
                    >
                      <i className="fa-solid fa-globe"></i>
                    </a>{" "}
                    <ul className="dropdown-menu mt-1 p-1 ">
                      <li>
                        <button
                          onClick={() => {
                            handleChangeLanguage("en");
                          }}
                        >
                          English
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            handleChangeLanguage("az");
                          }}
                        >
                          Azerbaijani
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            handleChangeLanguage("ru");
                          }}
                        >
                          Russian
                        </button>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item mb-2">
                  <button
                    style={{ background: "none", border: "none" }}
                    className={theme === "light" ? "dark" : "light"}
                    onClick={() => {
                      setTheme(theme === "light" ? "dark" : "light");
                    }}
                  >
                    {theme === "light" ? (
                      <i className="fa-regular fa-moon"></i>
                    ) : (
                      <i className="fa-solid fa-sun"></i>
                    )}
                  </button>
                </li>
                {/* <li className="nav-item mb-2 ms-4 mt-1">
                  <a href="/dashboard" type="button" style={{ color: "#ae9775" }}>
                    <i className="fa-solid fa-chart-line"></i>
                  </a>
                </li> */}
              </div>
            </div>

            <div className="col mb-3" />
            <div className=" explore col mb-3">
              <h2 className="mb-4">{t("footercol2")}</h2>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 ">
                    <i className="fa-solid fa-angle-right"></i>{" "}
                    {t("footerlist1")}
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 ">
                    <i className="fa-solid fa-angle-right"></i>{" "}
                    {t("footerlist2")}
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 ">
                    <i className="fa-solid fa-angle-right"></i>{" "}
                    {t("footerlist3")}
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 ">
                    <i className="fa-solid fa-angle-right"></i>{" "}
                    {t("footerlist4")}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col latest mb-3 ">
              <h2 className="mb-4">{t("footercol3")}</h2>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 ">
                    <i className="fa-solid fa-angle-right"></i>{" "}
                    {t("footerlist5")}
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 ">
                    <i className="fa-solid fa-angle-right"></i>{" "}
                    {t("footerlist6")}
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 ">
                    <i className="fa-solid fa-angle-right"></i>{" "}
                    {t("footerlist7")}
                  </a>
                </li>
                <div className="icons mt-4">
                  <i className="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-facebook"></i>
                  <i className="fa-brands fa-instagram"></i>
                  <i className="fa-brands fa-youtube"></i>
                </div>
              </ul>
            </div>
          </footer>
        </div>
        <div className="footer-end">
          <div className="container">
            <footer className=" end d-flex flex-wrap justify-content-between align-items-center py-3  ">
              <div className="col-12 d-flex align-items-center">
                <p className="mb-3 mb-md-0">
                  <span>{t("copyRight")}</span> © {t("copyRight2")} - 2020 -
                  <span>{t("copyRightEnd")}</span>
                </p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer











