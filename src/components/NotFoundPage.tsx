import React, { useEffect } from "react";

const NotFoundPage: React.FC = () => {
  // useEffect(() => {
  //   (document.querySelector(".seat") as HTMLElement).style.display = "none";
  //   (document.querySelector(".logo") as HTMLElement).style.display = "none";
  //   (document.querySelector(".blogpost") as HTMLElement).style.display = "none";
  //   (document.querySelector(".footer") as HTMLElement).style.display = "none";
  // }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="notfoundpage pt-5">
      <div className="page p-5 text-center  pb-5">
        <h1 className=" mt-5 ">404 Not Found</h1>
        <p className="text-center pb-5">
          <a href="/">Home</a>
          <i className=" mx-2 fa-solid fa-angle-right"></i> <span> 404</span>
        </p>
      </div>
      <div className="notfound text-center my-5">
        <h1 className="">Oops! Page Not Found</h1>
        <p className=" mt-2 mb-5">
          The page you are looking for was moved, removed,
          <br /> renamed or might never existed.
        </p>
        <a href="/" className="pagenot">
          HOME PAGE <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
