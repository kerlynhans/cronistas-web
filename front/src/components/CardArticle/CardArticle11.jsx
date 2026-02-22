import ArticleImage from "@/components/ArticleImage/ArticleImage";
import Link from "next/link";

const CardArticle11 = ({ data }) => {
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
        <ul className="list-inline">
          <li className="list-inline-item">
            <span className="text-primary">Por {data.author}</span>
          </li>
          <li className="list-inline-item">
            <span>{data.date}</span>
          </li>
        </ul>
        <h5>
          <Link href={data.url}>{data.title}</Link>
        </h5>
      </div>
    </article>
  );
};

export default CardArticle11;
