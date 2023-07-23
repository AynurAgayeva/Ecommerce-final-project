import React, { useState, useRef, useContext, useEffect } from "react";
import productdata from "../data/productdata";
import SingleProduct from "../pages/SingleProduct";
import { ProductContext } from "../context/ProductContext";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

const Product: React.FC = () => {
  const [product, setProduct] = useContext(ProductContext);
  const [t, i18n] = useTranslation("global");

  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);


// const [currentPage, setCurrentPage] = useState(1);

// const itemsPerPage = 8;

// const indexOfLastItem = currentPage * itemsPerPage;
// const indexOfFirstItem = indexOfLastItem - itemsPerPage;

// const totalPages = Math.ceil(product.length / itemsPerPage);


// const handlePageChange = (pageNumber:any) => {
//   setCurrentPage(pageNumber);
// };


  const filterResult = (catItem: string): void => {
    const result = productdata.filter((fdata) => {
      return fdata.category === catItem;
    });
    setProduct(result);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
const compare = (a:any, b:any, ascendingOrder:any) => {
        if (a < b) {
          return ascendingOrder ? -1 : 1;
        }
        if (a > b) {
          return ascendingOrder ? 1 : -1;
        }
        return 0;
      }
      const handleChange = (value:any) => {
        if(value == 'none'){
            setProduct([...product]);
        } else {
          let toType:any, toAscending:any
          switch(value){
            case 'ascending' : toType = true; toAscending = true; break;
            case 'descending' : toType = true; toAscending = false; break;
            case 'high' : toType = false; toAscending = false; break;
            case 'low' : toType = false; toAscending = true; break;
          }
          let current = [...product];
          current.sort((a, b) => toType ?
                 compare(a.title, b.title, toAscending) 
                 : 
                 compare(a.price, b.price, toAscending))
          setProduct([...current]);
        }
      }


  return (
    <div>
      <div className="contact-bg my-5 pb-5">
        <div className=" mt-5 contact p-5 container text-center rounded-3 pb-5">
          <h1 className="mt-5">{t("productsHead")}</h1>
          <p className="text-center">
            <a href="/">{t("menu1")}</a>
            <i className=" mx-2 fa-solid fa-angle-right"></i>{" "}
            <span> {t("menu4")}</span>
          </p>
        </div>
      </div>
      <div className="container ">
        <div className="row g-5">
          <div className="col-md-5 col-lg-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setValue(inputRef.current?.value ?? "");
              }}
            >
              <div className="col-8 input-group my-5">
                <input
                  type="text"
                  className="form-control"
                  // ref={inputRef}
                  placeholder="Search products..."
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                />
                <button
                  className="btn btn-outline-secondary search"
                  type="button"
                  id="button-addon2"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </form>

            <div
              className="buttons button-category d-flex flex-column float-start"
              style={{ textAlign: "center" }}
            >
              <h1 className="mb-3">{t("productsCategory")}</h1>
              <hr />

              <a
                type="button"
                className="mb-3 mx-2"
                onClick={() => {
                  filterResult("Mattresses");
                }}
                style={{ textDecoration: "none", color: "black" }}
              >
                {t("productsCategory1")}
              </a>
              <a
                type="button"
                className="mb-3"
                onClick={() => {
                  filterResult("Home Interior");
                }}
                style={{ textDecoration: "none", color: "black" }}
              >
                {t("productsCategory2")}
              </a>
              <a
                type="button"
                className="mb-3 mx-2"
                onClick={() => {
                  filterResult("Interior");
                }}
                style={{ textDecoration: "none", color: "black" }}
              >
                {t("productsCategory3")}
              </a>

              <a
                type="button"
                className="mb-3 mx-2"
                onClick={() => {
                  filterResult("Furniture");
                }}
                style={{ textDecoration: "none", color: "black" }}
              >
                {t("productsCategory4")}
              </a>
              <a
                type="button"
                className="mb-3 mx-2"
                onClick={() => {
                  filterResult("Uncategorized");
                }}
                style={{ textDecoration: "none", color: "black" }}
              >
                {t("productsCategory3s")}
              </a>
              <a
                type="button"
                className="mb-3 mx-2"
                onClick={() => {
                  filterResult("Decoration");
                }}
                style={{ textDecoration: "none", color: "black" }}
              >
                {t("productsCategory3d")}
              </a>
            </div>
          </div>

          <div className="col-md-7 col-lg-8 mt-5">
            <div className="row">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setValue(inputRef.current?.value ?? "");
                }}
              >
                <div className="col-8 input-group default-sort my-5 ">
                  <input
                    type="text"
                    className="form-control sort"
                    ref={inputRef}
                    placeholder="Showing 24 results"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button className="default">
                    <select onChange={(e) => handleChange(e.target.value)}>
                      <option value="ascending">Sort by popularity</option>
                      <option value="descending">Sort by latest</option>
                      {/* <option value="high">High-Low</option>
                      <option value="low">Low-High</option> */}
                    </select>
                  </button>
                </div>
              </form>
              {product
                .filter((p: any) =>
                  p.title
                    .toLocaleLowerCase()
                    .includes(value.toLocaleLowerCase())
                )

                .map((item: any) => (
                  <SingleProduct
                    key={item.id}
                    photo={item.photo}
                    photoDark={item.photoDark}
                    category={item.category}
                    title={item.title}
                    discount={item.discount}
                    price={item.price}
                    cart={item.cart}
                    rate={item.rate}
                    id={item.id}
                    alldata={item}
                  />
                ))}
              {/* <div className="pagination my-5 d-flex align-items-center justify-content-center">
                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1
                ).map((pageNumber) => (
                  <button
                    key={pageNumber}
                    className={`pagination-button btn mx-2 fs-5  ${
                      pageNumber === currentPage ? "active" : ""
                    }`}
                    onClick={() => handlePageChange(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
