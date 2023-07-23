import React from 'react'

const Newsletter: React.FC = () => {
  return (
    <div>
      <div className="news-bg d-flex align-items-center justify-content-center ">
        <div className="newsletter   mt-5 ">
          <div className="news-text  pt-3">
            <h2 className="mb-4 text-center">
              <span>Subscribe for Members</span> <br />
              to Receive Latest News and Special Offers
            </h2>
            <div className="news-text-bottom d-flex align-items-center justify-content-center  me-3">
              <form className="d-flex align-items-center justify-content-center pb-5">
                <input
                  className=" mb-lg-0   "
                  type="email"
                  placeholder="Your email..."
                />

                <button className=" ms-1 btn-lg">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter