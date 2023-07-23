import React, { useState } from "react";
import { Button, Col, Form,InputGroup } from "react-bootstrap";
import user from "../data/user";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import { useTranslation } from "react-i18next";

const Login = () => {
 
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [alertText, setAlertText] = useState("");
    const navigate = useNavigate();
         const [t, i18n] = useTranslation("global");
      const {

        emptyCart,
      
      } = useCart();
    const [showPassword, setShowPassword] = useState(false);
  const loginSubmit = (e: React.FormEvent) => {
  

    e.preventDefault();
    if (!name || !pass) {
      alert("please,fill input");
    } else {
      for (let x in user) {
        if (name === user[x].name && pass === user[x].password) {
          localStorage.setItem("user", user[x].name);
            navigate("/checkout");
          window.location.reload();
          setAlertText("");
        } else {
          setAlertText("wrong");
        }
      }
    }
  };
useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <>
      <div
        className="login-all d-flex align-items-center justify-content-center flex-column"
        style={{ paddingTop: "80px" }}
      >
        <div className="contact-bg  pb-5">
          <div className="contact pt-5 pb-0  text-center rounded-3">
            <h1 className="pt-3">{t("menu7")}</h1>
            <p className="text-center p-3">
              <a href="/">Home</a>
              <i className=" mx-2 fa-solid fa-angle-right"></i>{" "}
              <span> {t("menu7")}</span>
            </p>
          </div>
        </div>
        <div
          className="card d-flex align-items-center justify-content-center"
          style={{ maxWidth: 1240, border: "none" }}
        >
          <p>{alertText}</p>
          <div className="row g-0">
            <div className="col-md-6 mb-5">
              <img
                src="https://kamleshyadav.com/wp/inland/wp-content/uploads/2019/01/25.png"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-5 mt-5 pt-5">
              <div className="card-body mt-5 ">
                <Form onSubmit={loginSubmit}>
                  <Form.Group className="my-4" controlId="formBasicEmail">
                    <Form.Control
                      className="p-2"
                      style={{ borderRadius: "0" }}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      type="text"
                      placeholder="Email/Username"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <InputGroup>
                      <Form.Control
                        className="p-2"
                        style={{ borderRadius: "0" }}
                        onChange={(e) => {
                          setPass(e.target.value);
                        }}
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                      />
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeSlash /> : <Eye />}
                      </button>
                    </InputGroup>
                  </Form.Group>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      id="send"
                      className="form-check-input"
                    />
                    <label className="form-check-label me-5 my-2">
                      {t("loginKeep")}
                    </label>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <button
                      className="px-3 py-3 sign-btn"
                      style={{
                        color: "#fff",
                        borderRadius: "0px",
                        backgroundColor: "#ae9775",
                        border: "none",
                      }}
                    >
                      {t("loginSign")}
                    </button>

                    <label className="form-check-label-f">
                      {t("loginForgot")}
                    </label>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
