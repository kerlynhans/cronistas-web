import Link from "next/link";

const CardArticle11a = () => {
  return (
    <div className="article__entry">
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
        <div className="article__category">Deportes</div>
        <ul className="list-inline">
          <li className="list-inline-item">
            <span className="text-primary">Por david hall</span>
          </li>
          <li className="list-inline-item">
            <span className="text-dark text-capitalize">Octubre 31, 2025</span>
          </li>
        </ul>
        <h5>
          <Link href="/articulos/nombre-articulo">
            Proin eu nisl et arcu iaculis placerat sollicitudin ut est
          </Link>
        </h5>
        <p>
          Maecenas accumsan tortor ut velit pharetra mollis. Proin eu nisl et
          arcu iaculis placerat sollicitudin ut est. In fringilla dui dui.
        </p>
        <Link
          href="/articulos/nombre-articulo"
          className="btn btn-outline-primary mb-4 text-capitalize"
        >
          leer más
        </Link>
      </div>
    </div>
  );
};

export default CardArticle11a;
