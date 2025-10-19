import Link from "next/link";

const CardArticle11 = () => {
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
            <span className="text-primary">Por david hall</span>
          </li>
          <li className="list-inline-item">
            <span>Diciembre 09, 2025</span>
          </li>
        </ul>
        <h5>
          <Link href="/articulos/nombre-articulo">
            Maecenas accumsan tortor ut velit pharetra mollis.
          </Link>
        </h5>
      </div>
    </article>
  );
};

export default CardArticle11;
