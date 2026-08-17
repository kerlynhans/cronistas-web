import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Image from "next/image";

import {
  faFacebookF,
  faXTwitter,
  faWhatsapp,
  //faTelegram,
  //faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const ArticleDetail = ({
  title,
  body,
  featuredImage,
  altImage,
  formattedDate,
  author,
}) => {
  return (
    <div className="wrap__article-detail">
      <div className="wrap__article-detail-title">
        <h1>{title}</h1>
        <h3>
          El Líbano en la Feria Internacional del Libro de Bogotá. Musgonia
          presente en la FILBO 2023. Único municipio de Colombia que cuenta con
          Stan en la Feria Internacional del Libro de Bogotá
        </h3>
      </div>
      <hr />
      <div className="wrap__article-detail-info">
        <ul className="list-inline">
          <li className="list-inline-item">
            <figure className="image-profile">
              <img
                src="/images/placeholder/80x80.jpg"
                alt=""
                className="img-fluid"
              />
            </figure>
          </li>
          <li className="list-inline-item">
            <span>Por </span>
            <a href="#">{author},</a>{" "}
          </li>
          <li className="list-inline-item mx-1">
            <span className="text-dark text-capitalize ml-1">
              {formattedDate}
            </span>
          </li>
        </ul>
      </div>

      <div className="wrap__article-detail-image mt-4">
        <figure>
          <Image
            src={featuredImage}
            alt={altImage}
            width={1008}
            height={567}
            style={{ width: "100%", height: "auto" }}
            className="img-fluid"
          />
        </figure>
      </div>
      <div className="wrap__article-detail-content">
        <div className="total-views">
          <div className="total-views-read">
            15.k
            <span>visitas</span>
          </div>

          <ul className="list-inline">
            <span className="share">Compartir: </span>
            <li className="list-inline-item">
              <a className="btn btn-social-o facebook" href="#">
                <FontAwesomeIcon icon={faFacebookF} />
                <span>facebook</span>
              </a>
            </li>{" "}
            <li className="list-inline-item">
              <a className="btn btn-social-o twitter" href="#">
                <FontAwesomeIcon icon={faXTwitter} />
                <span>twitter</span>
              </a>
            </li>{" "}
            <li className="list-inline-item">
              <a className="btn btn-social-o whatsapp" href="#">
                <FontAwesomeIcon icon={faWhatsapp} />
                <span>whatsapp</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-3">
          <div
            dangerouslySetInnerHTML={{
              __html: body,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
