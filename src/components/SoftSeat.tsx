import React from 'react'

const SoftSeat: React.FC = () => {
  return (
    <div>
 

      <section className="seat my-5 mt-lg-0 pt-lg-0 ">
        <div className="row container  pt-5  ">
          <div className="col-lg-6 col-sm 12 col-md-12 py-5  ">
            <div className="ms-5 ps-lg-5 seat-left py-4">
              <h1 className=" ">
                Soft Leather Chair <br />
                <span>«Vanilla Seat»</span>
              </h1>

              <p className="py-4 ">
                For each project we establish relationships with partners who we
                know will help us create added value for your project. .
              </p>
              <div className="price mb-4  ">
                <button className=" text-center text-decoration-line-through">
                  $390
                </button>

                <button className="ms-3">
                  <span>$259</span>
                </button>
              </div>
              <div className="shop">
                <button className=" btn-lg mt-3 add  ">
                  SHOP NOW →{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="col-10 col-sm-8 mt-lg-5    col-lg-6  py-5">
            <div className="seat-right  d-flex align-items-center justify-content-center">
              <div className="circle">
                {" "}
                <h2>-50%</h2>
              </div>

              <img
                src="http://ollis.like-themes.com/wp-content/uploads/2020/01/discount-chair-cut.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftSeat;