import Link from "next/link";

const CardArticle5 = () => {
  return (
    <div className="card__post card__post-list">
      <div className="image-sm">
        <Link href="/articulos/nombre-articulo">
          <img
            src="/images/placeholder/500x400.jpg"
            className="img-fluid"
            alt=""
          />
        </Link>
      </div>

      <div className="card__post__body ">
        <div className="card__post__content">
          <div className="card__post__author-info mb-2">
            <ul className="list-inline">
              <li className="list-inline-item">
                <span className="text-primary">Por Editorial Cronistas</span>
              </li>
              <li className="list-inline-item">
                <span className="text-dark text-capitalize">Dic 09, 2025</span>
              </li>
            </ul>
          </div>
          <div className="card__post__title">
            <h6>
              <Link href="/articulos/nombre-articulo">
                6 Best Tips for Building a Good Shipping Boat
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardArticle5;
