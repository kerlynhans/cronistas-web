import Link from "next/link";

const CardArticle2 = () => {
  return (
    <div className="card__post">
      <div className="card__post__body">
        <Link href="/articulos/nombre-articulo">
          <img
            src="/images/placeholder/800x600.jpg"
            className="img-fluid"
            alt=""
          />
        </Link>
        <div className="card__post__content bg__post-cover">
          <div className="card__post__category">covid-19</div>
          <div className="card__post__title">
            <h2>
              <Link href="/articulos/nombre-articulo">
                Global solidarity to fight COVID-19, and indonesia stay safe and
                health
              </Link>
            </h2>
          </div>
          <div className="card__post__author-info">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#">by david hall</a>
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

export default CardArticle2;
