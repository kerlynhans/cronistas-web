import React from "react";

const CardArticle11a = () => {
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
        <div className="article__category">travel</div>
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
        <h5>
          <a href="#">
            Proin eu nisl et arcu iaculis placerat sollicitudin ut est
          </a>
        </h5>
        <p>
          Maecenas accumsan tortor ut velit pharetra mollis. Proin eu nisl et
          arcu iaculis placerat sollicitudin ut est. In fringilla dui dui.
        </p>
        <a href="#" className="btn btn-outline-primary mb-4 text-capitalize">
          read more
        </a>
      </div>
    </div>
  );
};

export default CardArticle11a;
