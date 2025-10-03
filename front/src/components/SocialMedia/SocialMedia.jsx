import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const SocialMedia = () => {
  return (
    <aside className="wrapper__list__article">
      <h4 className="border_section">stay conected</h4>
      <div className="wrap__social__media">
        <a href="#" target="_blank">
          <div className="social__media__widget facebook">
            <span className="social__media__widget-icon">
              <FontAwesomeIcon className="fa" icon={faFacebookF} />
            </span>
            <span className="social__media__widget-counter">19,243 fans</span>
            <span className="social__media__widget-name">like</span>
          </div>
        </a>
        <a href="#" target="_blank">
          <div className="social__media__widget twitter">
            <span className="social__media__widget-icon">
              <FontAwesomeIcon className="fa" icon={faXTwitter} />
            </span>
            <span className="social__media__widget-counter">
              2.076 followers
            </span>
            <span className="social__media__widget-name">follow</span>
          </div>
        </a>
        <a href="#" target="_blank">
          <div className="social__media__widget youtube">
            <span className="social__media__widget-icon">
              <FontAwesomeIcon className="fa" icon={faYoutube} />
            </span>
            <span className="social__media__widget-counter">
              15,200 followers
            </span>
            <span className="social__media__widget-name">subscribe</span>
          </div>
        </a>
      </div>
    </aside>
  );
};

export default SocialMedia;
