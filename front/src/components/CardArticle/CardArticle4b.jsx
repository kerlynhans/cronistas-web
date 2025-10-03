import React from "react";

const CardArticle4b = () => {
  return (
    <div className="card__post card__post-list card__post__transition mt-30">
      <div className="row ">
        <div className="col-md-5">
          <div className="card__post__transition">
            <a href="#">
              <img
                src="images/placeholder/500x400.jpg"
                className="img-fluid w-100"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="col-md-7 my-auto pl-0">
          <div className="card__post__body ">
            <div className="card__post__content  ">
              <div className="card__post__category ">travel</div>
              <div className="card__post__author-info mb-2">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <span className="text-primary">by david hall</span>
                  </li>
                  <li className="list-inline-item">
                    <span className="text-dark text-capitalize">
                      descember 09, 2016
                    </span>
                  </li>
                </ul>
              </div>
              <div className="card__post__title">
                <h5>
                  <a href="#">Exercitation Ullamco Laboris Nisi Ut Aliquip</a>
                </h5>
                <p className="d-none d-lg-block d-xl-block mb-0">
                  Maecenas accumsan tortor ut velit pharetra mollis. Proin eu
                  nisl et arcu iaculis placerat sollicitudin ut est. In
                  fringilla dui dui.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardArticle4b;
