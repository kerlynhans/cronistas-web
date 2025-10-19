import Link from "next/link";

const CardArticle12 = () => {
  return (
    <article className="article__entry">
      <div className="article__image">
        <Link href="/articulos/nombre-articulo">
          <img
            src="/images/placeholder/500x400.jpg"
            alt=""
            className="img-fluid"
          />
        </Link>
      </div>
      <div className="article__content">
        <ul className="list-inline">
          <li className="list-inline-item">
            <span className="text-primary">Por Julián Castellanos</span>,
          </li>

          <li className="list-inline-item">
            <span>Abril 09, 2023</span>
          </li>
        </ul>
        <h5>
          <Link href="/articulos/nombre-articulo">
            Proin eu nisl et arcu iaculis placerat sollicitudin ut est.
          </Link>
        </h5>
      </div>
    </article>
  );
};

export default CardArticle12;
