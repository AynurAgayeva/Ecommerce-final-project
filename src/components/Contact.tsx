import React from 'react';
import { useEffect } from "react";

const Contact:React.FC = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <div className="contact-all">
        <div className="contact-bg my-5 pb-5">
          <div className=" mt-5 contact p-5 container text-center rounded-3 pb-5">
            <h1 className=" mt-5  ">Contact Us</h1>
            <p className="text-center">
              <a href="/">Home</a>
              <i className=" mx-2 fa-solid fa-angle-right"></i>{" "}
              <span> Contact</span>
            </p>
          </div>
        </div>
        <div className="contact-logo">
          <div className="contact-card container mt-5 pt-5  ps-5 pe-5">
            <div className="row g-5 d-flex align-items-center justify-content-evenly">
              <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                <div className="card">
                  <div className="img-card d-flex align-items-center justify-content-center">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="card-body">
                    <h4 className="text-center my-3 card-title">Location</h4>
                    <p
                      style={{
                        fontSize: 16,
                        color: "#595959",
                        lineHeight: "1.6rem",
                      }}
                      className="card-text"
                    >
                      29 Nicolas str, New York, 987597-50
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                <div className="card">
                  <div className="img-card d-flex align-items-center justify-content-center">
                    <i className="fa-solid fa-phone-volume"></i>
                  </div>
                  <div className="card-body">
                    <h4 className="text-center my-3 card-title">Phones</h4>
                    <p
                      style={{
                        fontSize: 16,
                        color: "#595959",
                        lineHeight: "1.6rem",
                      }}
                      className="card-text"
                    >
                      0(800) 890-90-609 <br /> 0(800) 890-90-620
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                <div className="card">
                  <div className="img-card d-flex align-items-center justify-content-center">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="card-body">
                    <h4 className="text-center my-3 card-title">Email</h4>
                    <p
                      style={{
                        fontSize: 16,
                        color: "#595959",
                        lineHeight: "1.6rem",
                      }}
                      className="card-text"
                    >
                      sale@like-themes.com <br></br>
                      sale@like-themes.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                <div className="card">
                  <div className="img-card d-flex align-items-center justify-content-center ">
                    <i className="fa-solid fa-clock"></i>
                  </div>
                  <div className="card-body">
                    <h4 className="text-center my-3 card-title">
                      Working hours
                    </h4>
                    <p
                      style={{
                        fontSize: 16,
                        color: "#595959",
                        lineHeight: "1.6rem",
                      }}
                      className="card-text"
                    >
                      Wednesday - Sunday <br></br> 7:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-menu mt-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.182370726!2d-0.10159865000000001!3d51.52864165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2z0JvQvtC90LTQvtC9LCDQktC10LvQuNC60L7QsdGA0LjRgtCw0L3QuNGP!5e0!3m2!1sru!2s!4v1675020266105!5m2!1sru!2s"
            width={"100%"}
            height={500}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="fmap"
          />
        </div>
        
          <div className="contact-form">
            <div className="form-con d-flex align-items-center justify-content-center py-5 px-5">
           
              <div className="col-12 col-lg-6">
                <h1>Send Message</h1>
                <form>
                  <div className="mb-3 d-flex align-items-center justify-content-around ">
                    <input
                      type="email"
                      className="form-control me-2 "
                      placeholder="Your name"
                      aria-describedby="emailHelp"
                    />
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Your email"
                    />
                  </div>

                  <div className="mb-3">
                    <textarea 
                      // type="password"
                      className="form-control"
                      rows={8}
                      placeholder="Message"
                    />
                  </div>

                  <button
              
                    type="submit"
                    className="btn btn-dark"
                  >
                    SUBMIT
                  </button>
                </form>
              </div>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default Contact