import Link from "next/link";

const CardArticle4b = ({ data }) => {
  if (!data) return null;

  return (
    <article className="card__post card__post-list card__post__transition mt-30">
      <div className="row ">
        <div className="col-md-5">
          <div className="card__post__transition">
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
        </div>
        <div className="col-md-7 my-auto pl-0">
          <div className="card__post__body ">
            <div className="card__post__content  ">
              <div className="card__post__category ">{data.category}</div>
              <div className="card__post__author-info mb-2">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <span className="text-primary">Por {data.author}</span>
                  </li>
                  <li className="list-inline-item">
                    <span className="text-dark text-capitalize">
                      {data.date}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="card__post__title">
                <h5>
                  <Link href={data.url}>{data.title}</Link>
                </h5>
                <p className="d-none d-lg-block d-xl-block mb-0">
                  {data.summary}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CardArticle4b;
