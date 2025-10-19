import React from "react";

const CardArticle13a = () => {
  return (
    <article className="article__entry-new">
      <div className="article__category">life</div>
      <div className="article__image articel__image__transition">
        <a href="#">
          <img
            src="/images/placeholder/500x400.jpg"
            alt=""
            className="img-fluid"
          />
        </a>
      </div>
      <div className="articel__content">
        <div className="article__post__title">
          <h5>
            <a href="#">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Deleniti, consequatur!
            </a>
          </h5>
          <ul className="list-inline article__post__author">
            <li className="list-inline-item">
              <span> by david hall</span>
            </li>
            <li className="list-inline-item">
              <span>descember 09, 2016</span>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default CardArticle13a;
