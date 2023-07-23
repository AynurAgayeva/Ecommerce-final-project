import SingleCard from "../components/SingleCard"
import { useLocation } from "react-router-dom";
import SingleCardBig from "./SingleCardBig";

const BlogDetails = () => {
  const location = useLocation();
  const { ptitle, pdesc, pphoto, pdate, id } = location.state;

  return (
    <>
     

      <div className="blog mt-5 ">
        <div className="row">
          <div className="d-flex flex-column align-items-center">
            <SingleCardBig
              ptitle={ptitle}
              pdesc={pdesc}
              pphoto={pphoto}
           
              id={id}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
