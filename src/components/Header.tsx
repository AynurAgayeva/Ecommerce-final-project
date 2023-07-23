import { NavLink, Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { useLocation } from "react-router-dom";
import { BoxArrowInRight,  BoxArrowLeft } from "react-bootstrap-icons";
import { ProductContext } from "../context/ProductContext";
import { useContext, useState } from "react";
import { useWishlist } from "react-use-wishlist";
import { ThemeModeContext } from "../context/ThemeModeContext";
import logoLight from "../images/ollis-white-logo.png";


import {useTranslation} from "react-i18next"

const Header:React.FC = () => {
  const { totalItems } = useCart();
    const [theme, setTheme] = useContext(ThemeModeContext);
   const { totalWishlistItems } = useWishlist();
  const [product] = useContext(ProductContext);
  const [value, setValue] = useState<string>("");
  const location = useLocation();
  const { pathname } = location;
  
  const splitLocation = pathname.split("/");



      const [t, i18n]= useTranslation("global")

  return (
    <div className="all">
      <div className="homeone">
        <div className="head">
          <nav
            className="navbar navbar-expand-lg"
            style={{ backgroundColor: "#fff" }}
          >
            <div className="container">
              <a className="navbar-brand" href="#">
                <img
                  className="logo-dark"
                  src={"http://ollis.like-themes.com/wp-content/uploads/2018/02/ollis_logo_1x.png"}
                  alt=""
                />
                <img className="logo-white" src={logoLight} alt="" />
              </a>
              <button
                style={{ border: "none" }}
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink
                      className={`nav-link ${
                        location.pathname === "/" ? "active" : ""
                      }`}
                      to="/"
                    >
                      {t("menu1")}
                    </NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {t("menu2")}
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/testimonial">
                          {t("dropmenu1")}
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/team">
                          {t("dropmenu2")}
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/faq">
                          {t("dropmenu3")}
                        </Link>
                      </li>

                      <li>
                        <Link className="dropdown-item" to="/gallery">
                          {t("dropmenu4")}
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <NavLink
                      className={`nav-link  ${
                        location.pathname === "/blog" ? "active" : ""
                      }`}
                      to="/blog"
                      role="button"
                    >
                      {t("menu3")}
                    </NavLink>
                    {/* <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul> */}
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {t("menu4")}
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/product">
                          {t("dropmenu5")}
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/cart">
                          {t("dropmenu6")}
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/checkout">
                          {t("dropmenu7")}
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/loginform">
                          {t("dropmenu8")}
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <NavLink
                      className={`nav-link  ${
                        location.pathname === "/blog" ? "active" : ""
                      }`}
                      to="/notfoundpage"
                      role="button"
                    >
                      {t("menu5")}
                    </NavLink>
                  </li>
                  <li className="nav-item ">
                    <NavLink
                      className={`nav-link  ${
                        location.pathname === "/contact" ? "active" : ""
                      }`}
                      to="/contact"
                      role="button"
                    >
                      {t("menu6")}
                    </NavLink>
                  </li>
                </ul>

                <form className="d-flex" role="search">
                  <Link to="/cart" className="btn" type="submit">
                    <span className="count-number">{totalItems}</span>
                    <i className="fa-solid fa-cart-shopping"></i>
                  </Link>

                  <Link className="btn " type="submit" to="/wishlist">
                    <span className="count-number2">{totalWishlistItems}</span>
                    <i className="fa-regular fa-heart"></i>
                  </Link>
                  <button
                    type="button"
                    className="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                  {localStorage.getItem("user") === null ? (
                    <Link to="/loginform">
                      <button className="btn ms-0">
                        <BoxArrowLeft />{" "}
                        <span className="me-1"> {t("menu7")} </span>
                      </button>
                    </Link>
                  ) : (
                    <>
                      <div>
                        <p className="mt-2  login-name" style={{ color: "#ae9775" }}>
                          {localStorage.getItem("user")}
                        </p>
                      </div>
                      <button
                        className="btn"
                        onClick={() => {
                          localStorage.removeItem("user");
                          window.location.reload();
                        }}
                      >
                        <span className=""> {t("menu8")} </span>
                        <BoxArrowInRight />
                      </button>
                    </>
                  )}
                </form>
              </div>
            </div>
          </nav>
          <div>
            <div
              className="modal fade modal-dark"
              id="exampleModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      {t("menu9")}
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter product"
                        onChange={(e) => {
                          setValue(e.target.value);
                        }}
                      />
                    </div>
                    <ul className="list-group">
                      {value === ""
                        ? ""
                        : product
                            .filter((p: any) =>
                              p.title.toLocaleLowerCase().includes(value)
                            )
                            .map((item: any) => {
                              return (
                                <Link to={`/product/${item.id}`}>
                                  <li className="list-group-item">
                                    {item.title}
                                  </li>
                                </Link>
                              );
                            })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header
















