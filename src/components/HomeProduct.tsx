
import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";




const HomeProduct = () => {

  const [product, setProduct] = useContext(ProductContext);
  return (
    <div className="container text-center my-5">
      <p id="online" className="mt-5">
        online store
      </p>
      <h1 className="text-center future my-3">Future Collection</h1>
      <div className="row">
        {product.slice(2, 10).map((item: any) => (
          <div className="card-con col-12 col-sm-12 col-md-6 col-lg-3">
            <div className="card card-single mb-5 ">
            
              <div>
                <img src={item.photo} className="card-img-top logo-dark" alt="..." />
                <img src={item.photoDark} className="card-img-top logo-white" alt="..." />
              </div>

              <h6 className="my-3 mt-5 text-center">{item.title}</h6>
              <p style={{ color: "#ae9775" }} className="my-2 text-center">
                <span>
                  <i
                    className={
                      item.rate >= 2
                        ? "fa-solid fa-star"
                        : item.rate >= 1.5
                        ? "fa-solid fa-star-half-stroke"
                        : "fa-regular fa-star"
                    }
                  ></i>
                </span>
                <span>
                  <i
                    className={
                      item.rate >= 3
                        ? "fa-solid fa-star"
                        : item.rate >= 2.5
                        ? "fa-solid fa-star-half-stroke"
                        : "fa-regular fa-star"
                    }
                  ></i>
                </span>
                <span>
                  <i
                    className={
                      item.rate >= 4
                        ? "fa-solid fa-star"
                        : item.rate >= 3.5
                        ? "fa-solid fa-star-half-stroke"
                        : "fa-regular fa-star"
                    }
                  ></i>
                </span>
                <span>
                  <i
                    className={
                      item.rate >= 5
                        ? "fa-solid fa-star"
                        : item.rate >= 4.5
                        ? "fa-solid fa-star-half-stroke"
                        : "fa-regular fa-star"
                    }
                  ></i>
                </span>
                <span>
                  <i
                    className={
                      item.rate >= 6
                        ? "fa-solid fa-star"
                        : item.rate >= 5.5
                        ? "fa-solid fa-star-half-stroke"
                        : "fa-regular fa-star"
                    }
                  ></i>
                </span>
              </p>
              <div className="text-center my-3">
                <button
                  className="price me-3 text-decoration-line-through"
                  style={{
                    border: "none",
                    background: "none",
                    fontSize: "18px",
                  }}
                >
                  ${item.price}
                </button>
                <button
                  style={{
                    color: "#D12323",
                    border: "none",
                    background: "none",
                    fontSize: "18px",
                  }}
                  className="discount  "
                >
                  ${item.discount}
                </button>
              </div>
              <ul className="text-center mb-4">
                <li
                  style={{
                    fontWeight: "500",
                    color: "#707070",
                    fontSize: "15px",
                    marginBottom: "7px",
                  }}
                >
                  Seating Capacity: 2
                </li>
                <li
                  style={{
                    fontWeight: "500",
                    color: "#707070",
                    fontSize: "15px",
                    marginBottom: "7px",
                  }}
                >
                  Weight Capacity: 550 lb.
                </li>
                <li
                  style={{
                    fontWeight: "500",
                    color: "#707070",
                    fontSize: "15px",
                    marginBottom: "7px",
                  }}
                >
                  Adult Assembly Required: Yes
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeProduct