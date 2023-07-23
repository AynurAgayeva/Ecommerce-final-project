import { Col } from "react-bootstrap";
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";


interface propsType {
  id:number,
  ptitle: string;
  pdesc: string;
  pphoto: string;
}
function SingleCard({id, ptitle, pdesc, pphoto }: propsType) {
     const [t, i18n] = useTranslation("global");

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <Col sm={12} md={4}>
      <div
        className="card blog-card mb-4 b-0"
        style={{ border: "none" }}
        data-aos={"flip-left"}
      >
        <Card.Img className="card-photo p-3" src={pphoto} />
        <Card.Body className="card-body b-0">
          <a>December 9, 2023</a>
          <Card.Title className="card-title my-2">{ptitle}</Card.Title>

          <Card.Text className="card-desc">{pdesc.slice(0, 150)}</Card.Text>
          <Link
            to={`/blog/${id}`}
            state={{ ptitle, pdesc, pphoto }}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            Read More
          </Link>
          <div className="icon mt-3 ">
            <i className="fa-regular fa-eye me-5">
              <span>1</span>{" "}
            </i>
            <i className="fa-solid fa-comment-dots">
              <span>1</span>{" "}
            </i>
          </div>
        </Card.Body>
      </div>
    </Col>
  );
}

export default SingleCard;
