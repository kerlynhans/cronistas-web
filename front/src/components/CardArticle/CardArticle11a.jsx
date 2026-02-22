import Link from "next/link";

const CardArticle11a = ({ data }) => {
  if (!data) return null;

  return (
    <article className="article__entry">
      <div className="article__image">
        <Link href={data.url}>
          <ArticleImage
            src={data.image}
            w="600"
            h="400"
            alt={data.title}
            placeholder="/images/placeholder/500x400.jpg"
          />
        </Link>
      </div>
      <div className="article__content">
        <div className="article__category">{data.category}</div>
        <ul className="list-inline">
          <li className="list-inline-item">
            <span className="text-primary">Por {data.author}</span>
          </li>
          <li className="list-inline-item">
            <span className="text-dark text-capitalize">{data.date}</span>
          </li>
        </ul>
        <h5>
          <Link href={data.url}>{data.title}</Link>
        </h5>
        <p>{data.summary}</p>
        <Link
          href={data.url}
          className="btn btn-outline-primary mb-4 text-capitalize"
        >
          leer más
        </Link>
      </div>
    </article>
  );
};

export default CardArticle11a;
