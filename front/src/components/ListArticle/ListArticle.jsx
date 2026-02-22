import Link from "next/link";

const ListArticle = ({ num, data }) => {
  if (!data) return null;

  return (
    <article className="card__post__list">
      <div className="list-number">
        <span>{num}</span>
      </div>
      <a href="#" className="category">
        {data.category}
      </a>
      <ul className="list-inline">
        <li className="list-inline-item">
          <h5>
            <Link href={data.url}>{data.title}</Link>
          </h5>
        </li>
      </ul>
    </article>
  );
};

export default ListArticle;
