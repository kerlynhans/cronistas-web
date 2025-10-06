import React from "react";

const CardArticle9 = () => {
  return (
    <div className="card__post__transition mt-4">
      <div className="card__post__body card__post-height ">
        <a href="#">
          <img
            src="/images/placeholder/600x600.jpg"
            className="img-fluid w-100"
            alt=""
          />
        </a>
        <div className="card__post__content bg__post-cover bg__post-cover-height ">
          <div className="card__post__category text-capitalize">travel</div>
          <div className="card__post__title">
            <h5>
              <a href="#" className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </a>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardArticle9;
