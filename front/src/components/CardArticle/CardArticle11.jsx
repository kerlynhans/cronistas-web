import React from "react";

const CardArticle11 = () => {
  return (
    <div className="article__entry">
      <div className="article__image">
        <a href="#">
          <img
            src="images/placeholder/500x400.jpg"
            alt=""
            className="img-fluid"
          />
        </a>
      </div>
      <div className="article__content">
        <ul className="list-inline">
          <li className="list-inline-item">
            <span className="text-primary">by david hall</span>
          </li>
          <li className="list-inline-item">
            <span>descember 09, 2016</span>
          </li>
        </ul>
        <h5>
          <a href="#">Maecenas accumsan tortor ut velit pharetra mollis.</a>
        </h5>
      </div>
    </div>
  );
};

export default CardArticle11;
