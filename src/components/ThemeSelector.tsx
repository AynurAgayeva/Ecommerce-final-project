import React from "react";
import { useContext, useState, useEffect } from "react";
import { ThemeModeContext } from "../context/ThemeModeContext";
import { langEn, langAz } from "../data/langdata";
import langMode from "../images/dash-menu.png";
import langMode2 from "../images/dash.png";

const ThemeSelector = () => {
  const [theme, setTheme] = useContext(ThemeModeContext);
  const [lang, setLang] = useState(langEn);
  const [goUpButton, setGoUpButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setGoUpButton(true);
      } else {
        setGoUpButton(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //  const handleLanguageChange = () => {
  //    const newLang = lang.lang === "EN" ? langAz : langEn;
  //    setLang(newLang);
  //    console.log(newLang)

  //  };
  return (
    <div>
   
      <div
        className="dropdown position-fixed end-0 bottom-0 mb-3 me-3 bd-mode-toggle"
        style={{ zIndex: "1888"  }}
      >
        {goUpButton && (
          <button
            className="btn btn-bd-primary py-2 px-3  d-flex align-items-center"
            id="bd-theme"
            type="button"
            style={{ borderRadius: 0, border: "1px solid #ae9775" }}
            onClick={scrollUp}
          >
            <span style={{ fontSize: "11px", color: "#ae9775" }}>
              GO <br /> TOP
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default ThemeSelector;
