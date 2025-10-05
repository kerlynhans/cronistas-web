import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

const ProfileAuthor = () => {
  return (
    <div className="wrap__profile">
      <div className="wrap__profile-author">
        <figure>
          <img
            src="/images/placeholder/80x80.jpg"
            alt=""
            className="img-fluid rounded-circle"
          />
        </figure>
        <div className="wrap__profile-author-detail">
          <div className="wrap__profile-author-detail-name">author</div>
          <h4>jhon doe</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            laboriosam ad beatae itaque ea non placeat officia ipsum laboriosam
            ad beatae itaque ea non placeat officia ipsum praesentium! Ullam?
          </p>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="#" className="btn btn-social btn-social-o facebook ">
                <FontAwesomeIcon className="fa" icon={faFacebookF} />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="btn btn-social btn-social-o twitter ">
                <FontAwesomeIcon className="fa" icon={faXTwitter} />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="btn btn-social btn-social-o instagram ">
                <FontAwesomeIcon className="fa" icon={faInstagram} />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="btn btn-social btn-social-o telegram ">
                <FontAwesomeIcon className="fa" icon={faTelegram} />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="btn btn-social btn-social-o linkedin ">
                <FontAwesomeIcon className="fa" icon={faLinkedin} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileAuthor;
