import React from 'react'

const Offer = () => {
  return (
    <div>
      <div className="offer-con py-5 my-5">
        <div className="offer row container">
          <div className="offer-left my-5 col-12 col-lg-6 col-md-12 ">
            <div className="offer-input">
              <form>
                <h1 className="h3 mb-3 fw-normal">Get our design offer</h1>
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Name</label>
                </div>
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Email</label>
                </div>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>

                <button className="w-100 btn btn-lg " type="submit">
                  SEND REQUEST
                </button>
              </form>
            </div>
          </div>
          <div className="offer-right  my-5 col-12 col-lg-6 col-md-12">
            <div className=" me-5">
              <h1 className="pt-lg-5 mt-lg-5 ms-lg-5">
                Exquisite solutions by leading designers of our agency
              </h1>

              <button className=" btn-lg mt-3 ms-lg-5 add  text-center ">
                READ MORE →{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer