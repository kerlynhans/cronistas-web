import ArticleImage from "@/components/ArticleImage/ArticleImage";
import Link from "next/link";

const CardArticle2 = ({ data }) => {
  if (!data) return null;

  return (
    <article className="card__post">
      <div className="card__post__body">
        <Link href={data.url}>
          <ArticleImage
            src={data.image}
            w="800"
            h="600"
            alt={data.title}
            placeholder="/images/placeholder/800x600.jpg"
          />
        </Link>
        <div className="card__post__content bg__post-cover">
          <div className="card__post__category">{data.category}</div>
          <div className="card__post__title">
            <h2>
              <Link href={data.url}>{data.title}</Link>
            </h2>
          </div>
          <div className="card__post__author-info">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#">por {data.author}</a>
              </li>
              <li className="list-inline-item">
                <span>{data.date}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CardArticle2;
