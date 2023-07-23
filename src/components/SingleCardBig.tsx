
import { Col } from "react-bootstrap";
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface propType {
  id: number;
  ptitle: string;
  pdesc: string;
  pphoto: string;
}

const SingleCardBig: React.FC<propType> = ({
  id,
  ptitle,
  pdesc,
  pphoto,

}) => {
  return (
    <div className="blogdetails ">
      <div className="contact-bg my-5 w-100 pb-5">
        <div className=" mt-5 contact p-5  text-center rounded-3 pb-5">
          <h1 className=" mt-5  ">{ptitle}</h1>
          <p className="text-center">
            <a href="/">Home</a>
            <i className=" mx-2 fa-solid fa-angle-right"></i>{" "}
            <span> {ptitle}</span>
          </p>
        </div>
      </div>
      <div className=" card border-0 ">
        <div className="card-all container p-0 ">
          <div className="flex p-0">
            <div className="d-flex  align-items-center justify-content-center position-relative">
              <img className="card-img " src={pphoto} />
            </div>
          </div>
          <div className="card-body d-flex justify-content-center "></div>
        </div>
      </div>
      <div className="blogs-article container d-flex align-items-center justify-content-center">
        <div className="row g-5 container pt-5">
          <div className="col-md-8">
            <h3 className="pb-4 mb-4 fst-italic border-bottom">
              From the Firehose
            </h3>
            <article
              className="blog-post"
              style={{
                lineHeight: "1.7rem",
                fontSize: "18px",
                color: "#181818",
                fontWeight: "400",
              }}
            >
              <div
                className="card-text "
                style={{
                  lineHeight: "1.7rem",
                  fontSize: "18px",
                  color: "#181818",
                  fontWeight: "400",
                }}
              >
                {pdesc}
              </div>
              <hr />
              <p>
                This is some additional paragraph placeholder content. It has
                been written to fill the available space and show how a longer
                snippet of text affects the surrounding content. We'll repeat it
                often to keep the demonstration flowing, so be on the lookout
                for this exact same string of text.
              </p>
              <h2>Blockquotes</h2>
              <p>This is an example blockquote in action:</p>
              <blockquote className="blockquote">
                <p>Quoted text goes here.</p>
              </blockquote>
             
            
              
   
            </article>
          </div>
          <div
            className="col-md-4 "
            style={{
              lineHeight: "1.7rem",
              fontSize: "18px",
              color: "#181818",
              fontWeight: "400",
            }}
          >
            <div className="position-sticky" style={{ top: "2rem" }}>
             
              <div>
                <h4 className="fst-italic">Recent posts</h4>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                      href="#"
                    >
                      <img
                        src={"https://jeanneoliver.com/wp-content/uploads/2014/03/myhomeapril82014-9_zps9cfb9293.jpg"}
                        alt=""
                        width={"100%"}
                        height={"auto"}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                      href="#"
                    >
                      <img
                        src={"https://images.squarespace-cdn.com/content/v1/570ee4b52eeb8126f678c9ae/1590364213040-0VBOZ70JCO4YVWKYW5R7/blog_K+Spencer+47+HR.jpg"}
                        alt=""
                        width={"100%"}
                        height={"auto"}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                      href="#"
                    >
                      <img
                        src={"https://images.squarespace-cdn.com/content/v1/570ee4b52eeb8126f678c9ae/d1368369-1a70-4410-be52-b52b3ac0cc68/Web+and+Insta+Res-9.jpg"}
                        alt=""
                        width={"100%"}
                        height={"auto"}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleCardBig;