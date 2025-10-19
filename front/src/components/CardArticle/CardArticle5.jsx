import Link from "next/link";
import ArticleImage from "../ArticleImage/ArticleImage";

const CardArticle5 = ({ data }) => {
  return (
    <article className="card__post card__post-list">
      <div className="image-sm">
        <Link href={data.url}>
          <ArticleImage
            src={data.thumbnail}
            w="304"
            h="171"
            alt={data.title}
            placeholder="/images/placeholder/500x400.jpg"
          />
        </Link>
      </div>

      <div className="card__post__body ">
        <div className="card__post__content">
          <div className="card__post__author-info mb-2">
            <ul className="list-inline">
              <li className="list-inline-item">
                <span className="text-primary">Por {data.author}</span>
              </li>
              <li className="list-inline-item">
                <span className="text-dark text-capitalize">{data.date}</span>
              </li>
            </ul>
          </div>
          <div className="card__post__title">
            <h6>
              <Link href={data.url}>{data.title}</Link>
            </h6>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CardArticle5;
