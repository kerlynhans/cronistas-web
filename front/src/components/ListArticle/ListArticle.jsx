import Link from "next/link";

const ListArticle = ({ num }) => {
  return (
    <article className="card__post__list">
      <div className="list-number">
        <span>{num}</span>
      </div>
      <a href="#" className="category">
        covid-19
      </a>
      <ul className="list-inline">
        <li className="list-inline-item">
          <h5>
            <Link href="/articulos/nombre-de-otro-articulo">
              Gegera Corona, Kekayaan Bos Zoom Nambah Rp 64 T dalam 3 Bulan -
              CNBC Indonesia
            </Link>
          </h5>
        </li>
      </ul>
    </article>
  );
};

export default ListArticle;
