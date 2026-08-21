import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
  faFacebookF,
  faXTwitter,
  faWhatsapp,
  //faTelegram,
  //faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { formatViews } from "@/utils/formatters";

const ArticleDetail = ({
  title,
  lead,
  content,
  featuredImage,
  altImage,
  formattedDate,
  author,
  avatar,
  views,
}) => {
  return (
    <div className="wrap__article-detail">
      <div className="wrap__article-detail-title">
        <h1>{title}</h1>
        <h3>{lead}</h3>
      </div>
      <hr />
      <div className="wrap__article-detail-info">
        <ul className="list-inline">
          {avatar && (
            <li className="list-inline-item">
              <figure className="image-profile">
                <Image
                  src={avatar}
                  alt={author}
                  width={100}
                  height={100}
                  className="img-fluid"
                />
              </figure>
            </li>
          )}
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
            loading="eager"
          />
        </figure>
      </div>
      <div className="wrap__article-detail-content">
        <div className="total-views">
          <data value={views} className="total-views-read">
            {formatViews(views)}
            <span>visitas</span>
          </data>

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
              __html: content,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
