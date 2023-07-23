import React from "react";
import { useCart } from "react-use-cart";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
const Cart = () => {
  const notify = () =>
    toast.success("Product successfully removed", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      theme: "colored",
    });
  const {
    items,
    updateItemQuantity,
    removeItem,
    isEmpty,
    totalUniqueItems,
    emptyCart,
    cartTotal,
  } = useCart();

     const [t, i18n] = useTranslation("global");
       useEffect(() => {
         window.scrollTo(0, 0);
       }, []);
 const navigate = useNavigate();


const handleProceed = ()=>{
  const isLoggedIn =  localStorage.getItem("user");
if(isLoggedIn){
  navigate('/checkout');
}else{
   navigate("/loginform");
}




}






  return isEmpty ? (
    <div className="text-center ">
      <h1 className="text-center mt-5">{t("cartHead")}</h1>

      <div className="d-flex align-items-center justify-content-center">
        <i
          className="fa-solid fa-cart-shopping my-5"
          style={{ fontSize: "150px", color: "#999", marginTop: "100px" }}
        ></i>
      </div>
      <p style={{ color: "black" }}>Your cart is currently empty.</p>
      <Link to="/product">
        <Button className="mb-5 my-3" variant="outline-secondary">
          <b>RETURN TO SHOP</b>
        </Button>
      </Link>
    </div>
  ) : (
    <div>
      <div className="contact-bg my-5 pb-5">
        <div className=" mt-5 contact p-5 container text-center rounded-3 pb-5">
          <h1 className=" mt-5  ">{t("cartHead")}</h1>
          <p className="text-center">
            <a href="/">{t("menu1")}</a>
            <i className=" mx-2 fa-solid fa-angle-right"></i>{" "}
            <span>{t("cartHead")}</span>
          </p>
        </div>
      </div>
      <div className="container cart">
        <div className="row g-5">
          <div className="col-md-12 mb-5 col-lg-4 order-md-last b-0">
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

            <button
              onClick={handleProceed}
              style={{ color: "#fff", backgroundColor: "#ae9775" }}
              type="submit"
              className="btn p-2 w-100"
            >
              Proceed check out
            </button>
          </div>

          <div className="col-md-12 col-lg-8 cart-totals">
            <div className="table-responsive table-bordered">
              <Table bordered>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item: any, c: any) => {
                    console.log(item);
                    console.log(item.quantity);
                    return (
                      <tr key={item.id}>
                        <td className="d-flex align-items-center ">
                          <div className="cart-img">
                            <img
                              src={item.photo}
                              width={100}
                              alt=""
                              className="me-3"
                            />
                          </div>
                          <div
                            className="cards-title"
                            style={{ whiteSpace: "nowrap" }}
                          >
                            {item.title}
                          </div>
                        </td>
                        <td>${+item.price}</td>
                        <td
                          className=" d-flex align-items-center justify-content-center"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          <Button
                            variant="outline-dark"
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity - 1)
                            }
                          >
                            <i
                              style={{ fontSize: "12px" }}
                              className="fa-solid fa-minus"
                            ></i>
                          </Button>
                          <div>
                            <span className="mx-2">{item.quantity}</span>
                          </div>
                          <Button
                            variant="outline-dark"
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <i
                              style={{ fontSize: "12px" }}
                              className="fa-solid fa-plus"
                            ></i>
                          </Button>
                        </td>
                        <td>${+item.price * +item.quantity}</td>

                        <td>
                          <Button
                            variant=""
                            onClick={() => {
                              notify();
                              removeItem(item.id);
                            }}
                          >
                            <i className="fa-solid fa-xmark"></i>
                          </Button>
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
                        </td>
                      </tr>
                    );
                  })}

                  <Button
                    className="mt-5"
                    variant="secondary"
                    onClick={() => {
                      emptyCart();
                    }}
                  >
                    <i className="fa-solid fa-trash-can"></i> Empty Cart
                  </Button>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
