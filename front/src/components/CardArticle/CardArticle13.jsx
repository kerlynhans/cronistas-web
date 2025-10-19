import React from "react";

const CardArticle13 = () => {
  return (
    <article className="article__entry-new">
      <div className="article__category">life style</div>
      <div className="article__image articel__image__transition">
        <a href="#">
          <img
            src="/images/placeholder/800x500.jpg"
            alt=""
            width="100%"
            className="img-fluid"
          />
        </a>
      </div>
      <div className="articel__content">
        <div className="article__post__title title-lg">
          <h4>
            <a href="#">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Deleniti, consequatur!
            </a>
          </h4>
          <ul className="list-inline article__post__author">
            <li className="list-inline-item">
              <span> by david hall</span>
            </li>
            <li className="list-inline-item">
              <span>descember 09, 2016</span>
            </li>
          </ul>
          <p>
            Maecenas accumsan tortor ut velit pharetra mollis. Proin eu nisl et
            arcu iaculis placerat sollicitudin ut est. In fringilla dui dui.
          </p>
        </div>
      </div>
    </article>
  );
};

export default CardArticle13;
