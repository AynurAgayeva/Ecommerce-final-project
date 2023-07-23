import React from 'react';
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
const CheckOut: React.FC = () => {
  //  const notify3 = () =>
  //    toast.info("Operation completed successfully", {
  //      position: "bottom-right",
  //      autoClose: 1000,
  //      hideProgressBar: true,
  //      closeOnClick: true,
  //      pauseOnHover: true,
  //      draggable: true,
  //      progress: 0,
  //      theme: "colored",
  //    });
    
  const navigate = useNavigate();
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
     const [t, i18n] = useTranslation("global");
  const { emptyCart, cartTotal, totalUniqueItems } = useCart();
    
  return  (
    <div>
      <main>
        <div className="text-center checkout">
          <div className="contact-bg my-5 pb-5">
            <div className=" mt-5 contact p-5 container text-center rounded-3 pb-5">
              <h1 className=" mt-5  ">{t("dropmenu7")}</h1>
              <p className="text-center">
                <a href="/">Home</a>
                <i className=" mx-2 fa-solid fa-angle-right"></i>{" "}
                <span> {t("dropmenu7")}</span>
              </p>
            </div>
          </div>
          <div className="container" style={{ overflowX: "hidden" }}>
            <div className="row g-5">
              <div className="right col-md-5 col-lg-4 order-md-last pt-lg-5">
                <h3 className="d-flex justify-content-between align-items-center mb-3">
                  <span className="">CART TOTALS</span>
                </h3>
                <ul className="list-group mb-3">
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h3 className="my-0 mb-3">SubTotal</h3>
                      <h6 className="my-0 mb-3">Shipping</h6>
                    </div>
                    <div className="right">
                      <span>{totalUniqueItems} </span>

                      <p className="text-body-secondary my-2">Free shipping</p>
                      <p className="text-body-secondary mb-2">
                        Local Pickup: $10.00
                      </p>
                    </div>
                  </li>

                  <li className="list-group-item d-flex justify-content-between">
                    <h3 className="my-0 mb-3">TOTAL</h3>
                    <p className="text-body-secondary mb-3">${cartTotal}</p>
                  </li>
                </ul>

                <Link
                  to="/cart"
                  style={{ color: "#fff", backgroundColor: "#ae9775" }}
                  type="button"
                  className="btn p-2 w-100"
                  data-bs-toggle="modal"
                  data-bs-target="#successModal"
                  onClick={(e) => {
                    // notify3();
                    emptyCart();
                  }}
                >
                  Place Order
                </Link>
                <div
                  className="modal fade modal-dark"
                  id="successModal"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          {t("checkModal")}
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body text-start ">
                        {t("checkMessage")}
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          {t("checkclose")}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <ToastContainer
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
                /> */}
              </div>
              <div className="left col-md-7 col-lg-8">
                <h1 className="mb-3 billing">{t("checkoutHead")}</h1>
                <form className="needs-validation" noValidate>
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <label htmlFor="firstName" className="form-label">
                        {t("checkoutName")}
                      </label>
                      <input
                        type="text"
                        className="p-2 form-control"
                        id="firstName"
                        placeholder=""
                        defaultValue=""
                        required
                      />
                      <div className="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="firstName" className="form-label">
                        {t("checkoutLastName")}
                      </label>
                      <input
                        type="text"
                        className="p-2 form-control"
                        id="firstName"
                        placeholder=""
                        defaultValue=""
                        required
                      />
                      <div className="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>

                    <div className="col-12">
                      <label htmlFor="email" className="form-label">
                        {t("checkoutCompany")}
                        <span className="text-muted">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        className="p-2 form-control"
                        id="email"
                        placeholder=""
                      />
                      <div className="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                      </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="email" className="form-label">
                        Email <span className="text-muted">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        className="p-2 form-control"
                        id="email"
                        placeholder="you@example.com"
                      />
                      <div className="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                      </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="address" className="form-label">
                        Address
                      </label>
                      <input
                        type="text"
                        className="p-2 form-control"
                        id="address"
                        placeholder="1234 Main St"
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter your shipping address.
                      </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="address2" className="form-label">
                        Address 2 <span className="text-muted">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        className=" p-2 form-control"
                        id="address2"
                        placeholder="Apartment or suite"
                      />
                    </div>
                    <div className="col-md-5">
                      <label htmlFor="country" className="form-label">
                        Country
                      </label>
                      <select className="form-select" id="country" required>
                        <option value="">Choose...</option>
                        <option>United States</option>
                      </select>
                      <div className="invalid-feedback">
                        Please select a valid country.
                      </div>
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="state" className="form-label">
                        State
                      </label>
                      <select className="form-select" id="state" required>
                        <option value="">Choose...</option>
                        <option>California</option>
                      </select>
                      <div className="invalid-feedback">
                        Please provide a valid state.
                      </div>
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="zip" className="form-label">
                        Zip
                      </label>
                      <input
                        type="text"
                        className="p-2 form-control"
                        id="zip"
                        placeholder=""
                        required
                      />
                      <div className="invalid-feedback">Zip code required.</div>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="p-1 form-check-input"
                      id="same-address"
                    />
                    <label
                      className="mt-1 form-check-label"
                      htmlFor="same-address"
                    >
                      Shipping address is the same as my billing address
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="p-1 form-check-input"
                      id="save-info"
                    />
                    <label
                      className="mt-1 form-check-label"
                      htmlFor="save-info"
                    >
                      Save this information for next time
                    </label>
                  </div>
                  <hr className="my-4" />
                  <h4 className="mb-3">Payment</h4>
                  <div className="my-3">
                    <div className="form-check">
                      <input
                        id="credit"
                        name="paymentMethod"
                        type="radio"
                        className="p-1 form-check-input"
                        defaultChecked
                        required
                      />
                      <label className="mt-1 form-check-label" htmlFor="credit">
                        Credit card
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        id="debit"
                        name="paymentMethod"
                        type="radio"
                        className="p-1 form-check-input"
                        required
                      />
                      <label className="mt-1 form-check-label" htmlFor="debit">
                        Debit card
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        id="paypal"
                        name="paymentMethod"
                        type="radio"
                        className="p-1 form-check-input"
                        required
                      />
                      <label className="mt-1 form-check-label" htmlFor="paypal">
                        PayPal
                      </label>
                    </div>
                  </div>
                  <div className="row gy-3">
                    <div className="col-md-6">
                      <label htmlFor="cc-name" className="form-label">
                        Name on card
                      </label>
                      <input
                        type="text"
                        className="p-1 form-control mb-1"
                        id="cc-name"
                        placeholder=""
                        required
                      />
                      <small className="text-muted mt-1">
                        Full name as displayed on card
                      </small>
                      <div className="invalid-feedback">
                        Name on card is required
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="cc-number" className="form-label">
                        Credit card number
                      </label>
                      <input
                        type="text"
                        className="p-1 form-control"
                        id="cc-number"
                        placeholder=""
                        required
                      />
                      <div className="invalid-feedback">
                        Credit card number is required
                      </div>
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="cc-expiration" className="form-label">
                        Expiration
                      </label>
                      <input
                        type="text"
                        className="p-1 form-control"
                        id="cc-expiration"
                        placeholder=""
                        required
                      />
                      <div className="invalid-feedback">
                        Expiration date required
                      </div>
                    </div>
                    <div className="col-md-3 mb-5">
                      <label htmlFor="cc-cvv" className="form-label">
                        CVV
                      </label>
                      <input
                        type="text"
                        className="p-1 form-control"
                        id="cc-cvv"
                        placeholder=""
                        required
                      />
                      <div className="invalid-feedback">
                        Security code required
                      </div>
                    </div>
                  </div>
                  {/* <hr className="my-4" />
                  <button
                    className="w-100 btn mb-5 btn-lg"
                    type="submit"
                    style={{ color: "#fff", backgroundColor: "#ae9775" }}
     
                  >
                    Continue to checkout
                  </button> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CheckOut