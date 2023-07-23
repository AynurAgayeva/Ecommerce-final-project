import React from "react";
import { Row } from "react-bootstrap";
// import { connect } from "react-redux";
import SingleCard from "./SingleCard";
import { useSelector } from "react-redux";


import { useState } from "react";
  import i18next from "i18next";
  import { useTranslation } from "react-i18next";




const Blogs: React.FC = () => {
  const currentUser: any = useSelector((state) => state);
    // const currentUserAz: any = useSelector((state) => state);
   const [t, i18n] = useTranslation("global");
    const handleChangeLanguage = (lang: string) => {
       i18next.changeLanguage(lang);
     };
    const [buttonClicked, setButtonClicked] = useState(false);

   

  return (
    <div className="blog">
      <div className="container pt-5 ">
        <p id="online" className="mt-5 text-center">
          {t("bloghead")}
        </p>
        <h1 className="text-center future my-3"> {t("blogHead")}</h1>
        <Row className="py-5 ">
          {currentUser?.map((item: any, i: number) => {
            return (
              <SingleCard
                id={item.id}
                key={i}
                ptitle={item.title}
                pphoto={item.photo}
                pdesc={item.desc}
              />
            );
          })}

          {/* <div>
          
            {buttonClicked
              ? currentUser?.map((item: any, i: number) => (
                  <SingleCard
                    id={item.id}
                    key={i}
                    ptitle={item.title}
                    pphoto={item.photo}
                    pdesc={item.desc}
                  />
                ))
              : currentUserAz?.map((item: any, i: number) => (
                  <SingleCard
                    id={item.id}
                    key={i}
                    ptitle={item.title}
                    pphoto={item.photo}
                    pdesc={item.desc}
                  />
                ))}
          </div> */}
        </Row>
      </div>
    </div>
  );
};

export default Blogs;

