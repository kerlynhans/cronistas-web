const CardArticle5b = () => {
  return (
    <div className="card__post card__post-list">
      <div className="image-sm">
        <a href="./card-article-detail-v1.html">
          <img
            src="images/placeholder/500x400.jpg"
            className="img-fluid"
            alt=""
          />
        </a>
      </div>

      <div className="card__post__body ">
        <div className="card__post__content">
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
            <h6>
              <a href="./card-article-detail-v1.html">
                6 Best Tips for Building a Good Shipping Boat
              </a>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardArticle5b;
