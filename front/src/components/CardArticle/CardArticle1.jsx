import React from "react";

const CardArticle1 = () => {
  return (
    <div className="card__post">
      <div className="card__post__body card__post__transition">
        <a href="./card-article-detail-v1.html">
          <img
            src="images/placeholder/600x400.jpg"
            className="img-fluid"
            alt=""
          />
        </a>
        <div className="card__post__content bg__post-cover">
          <div className="card__post__category">politics</div>
          <div className="card__post__title">
            <h5>
              <a href="./card-article-detail-v1.html">
                Barack Obama and Family Visit borobudur temple enjoy holiday
                indonesia.
              </a>
            </h5>
          </div>
          <div className="card__post__author-info">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="./card-article-detail-v1.html">by david hall</a>
              </li>
              <li className="list-inline-item">
                <span>Descember 09, 2016</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardArticle1;
