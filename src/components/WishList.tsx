import React from "react";
import { useCart } from "react-use-cart";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useWishlist } from "react-use-wishlist";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

const WishList = () => {
          const [t, i18n] = useTranslation("global");
       useEffect(() => {
         window.scrollTo(0, 0);
       }, []);
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
  const { addItem } = useCart();
  const { items, isWishlistEmpty, removeWishlistItem, emptyWishlist } =
    useWishlist();
  return isWishlistEmpty ? (
    <div className="container  ">
      <h1 className="text-center my-5">Ollis</h1>
      <Table>
        <thead className="table">
           
          <tr>
            <th>Product</th>
            <th>Unit Price</th>
            <th>Stock Status</th>
            <th></th>
          </tr>

        </thead>
        <tbody>
          <td className="my-5 fs-5">No products added to the wishlist</td>
        </tbody>
      </Table>

      <div className="iconPro mt-3">
        <a
          className="link"
          target={"_blank"}
          href="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fdemo.theme-sky.com%252Fmydecor%252Fshop%252Fzinus-mikihaile-loveseat-sofa-couch-from-korean%252F&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=ru_RU"
        >
          <i
            className="fa-brands fa-facebook"
            style={{
              color: "blue",
              marginRight: "5px",
              fontSize: "18px",
            }}
          ></i>
        </a>
        <a
          className="link"
          target={"_blank"}
          href="https://twitter.com/intent/tweet?text=https://demo.theme-sky.com/mydecor/shop/zinus-mikihaile-loveseat-sofa-couch-from-korean/"
        >
          <i
            className="fa-brands fa-twitter"
            style={{
              marginRight: "5px",
              fontSize: "18px",
            }}
          ></i>
        </a>
        <a className="link" target={"_blank"} href="https://web.whatsapp.com/">
          <i
            className="fa-brands fa-whatsapp"
            style={{
              color: "green",
              marginRight: "5px",
              fontSize: "18px",
            }}
          ></i>
        </a>
        <a
          className="link"
          target={"_blank"}
          href="https://www.pinterest.com/pin/create/button/?url=https://demo.theme-sky.com/mydecor/shop/zinus-mikihaile-loveseat-sofa-couch-from-korean/&media=https://mydecor-be87.kxcdn.com/mydecor/wp-content/uploads/2021/01/13.jpg"
        >
          <i
            className="fa-brands fa-pinterest"
            style={{
              color: "#A20401",
              marginRight: "5px",
              fontSize: "18px",
            }}
          ></i>
        </a>
        <a
          className="link"
          target={"_blank"}
          href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26url%3Dhttps%3A%2F%2Fdemo.theme-sky.com%2Fmydecor%2Fshop%2Fzinus-mikihaile-loveseat-sofa-couch-from-korean%2F%26title%3Dsofa-couch-from-korean"
        >
          <i
            className="fa-brands fa-linkedin"
            style={{
              color: "blue",
              marginRight: "5px",
              fontSize: "18px",
            }}
          ></i>
        </a>
      </div>
    </div>
  ) : (
    <>
      <div className="contact-bg my-5 pb-5">
        <div className=" mt-5 contact p-5 container text-center rounded-3 pb-5">
          <h1 className=" mt-5  ">{t("wishHead")}</h1>
          <p className="text-center">
            <a href="/">{t("menu1")}</a>
            <i className=" mx-2 fa-solid fa-angle-right"></i>{" "}
            <span>{t("wishHead")}</span>
          </p>
        </div>
      </div>
      <div className="container  wishlist">
        <Table>
          <thead className="table container">
            <tr>
              <th>Product </th>
              <th>Unit Price</th>
              <th>Stock Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, c) => {
              return (
                <tr key={c}>
                  <td className="d-flex align-items-center">
                    <img src={item.photo} width={100} alt="" className="me-3" />
                    {item.title}
                  </td>
                  <td>${item.price}</td>
                  <td>
                    {item.status ? (
                      <div style={{ color: "green" }}>
                        <i className="fa-solid fa-check"></i> In stock
                      </div>
                    ) : (
                      <div style={{ color: "red" }}>
                        <i className="fa-solid fa-xmark"></i> Out of stock
                      </div>
                    )}
                  </td>
                  <td className="d-flex align-items-center">
                    <Button
                      variant=""
                      onClick={() => {
                        notify();
                        removeWishlistItem(item.id);
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
                    {item.status ? (
                      <button
                        className="btn btn-dark m-2 me-2"
                        onClick={() => {
                          notify5();
                          addItem(item);
                        }}
                      >
                        Add to cart
                      </button>
                    ) : (
                      ""
                    )}
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
              variant="danger"
              onClick={() => {
                emptyWishlist();
              }}
            >
              <i className="fa-solid fa-trash-can"></i> Empty WishList
            </Button>
          </tbody>
        </Table>
        <div className="iconPro">
          <a
            className="link"
            target={"_blank"}
            href="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fdemo.theme-sky.com%252Fmydecor%252Fshop%252Fzinus-mikihaile-loveseat-sofa-couch-from-korean%252F&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=ru_RU"
          >
            <i
              className="fa-brands fa-facebook"
              style={{
                color: "blue",
                marginRight: "5px",
                fontSize: "18px",
              }}
            ></i>
          </a>
          <a
            className="link"
            target={"_blank"}
            href="https://twitter.com/intent/tweet?text=https://demo.theme-sky.com/mydecor/shop/zinus-mikihaile-loveseat-sofa-couch-from-korean/"
          >
            <i
              className="fa-brands fa-twitter"
              style={{
                marginRight: "5px",
                fontSize: "18px",
              }}
            ></i>
          </a>
          <a
            className="link"
            target={"_blank"}
            href="https://web.whatsapp.com/"
          >
            <i
              className="fa-brands fa-whatsapp"
              style={{
                color: "green",
                marginRight: "5px",
                fontSize: "18px",
              }}
            ></i>
          </a>
          <a
            className="link"
            target={"_blank"}
            href="https://www.pinterest.com/pin/create/button/?url=https://demo.theme-sky.com/mydecor/shop/zinus-mikihaile-loveseat-sofa-couch-from-korean/&media=https://mydecor-be87.kxcdn.com/mydecor/wp-content/uploads/2021/01/13.jpg"
          >
            <i
              className="fa-brands fa-pinterest"
              style={{
                color: "#A20401",
                marginRight: "5px",
                fontSize: "18px",
              }}
            ></i>
          </a>
          <a
            className="link"
            target={"_blank"}
            href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26url%3Dhttps%3A%2F%2Fdemo.theme-sky.com%2Fmydecor%2Fshop%2Fzinus-mikihaile-loveseat-sofa-couch-from-korean%2F%26title%3Dsofa-couch-from-korean"
          >
            <i
              className="fa-brands fa-linkedin"
              style={{
                color: "blue",
                marginRight: "5px",
                fontSize: "18px",
              }}
            ></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default WishList;
