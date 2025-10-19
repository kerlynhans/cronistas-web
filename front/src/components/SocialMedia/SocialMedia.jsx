import data from "@/data/cronistas.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const SocialMedia = () => {
  const { channels } = data;

  return (
    <aside className="wrapper__list__article">
      <h4 className="border_section">Redes sociales</h4>
      <div className="wrap__social__media">
        {channels.facebook && (
          <a href={channels.facebook.url} target="_blank">
            <div className="social__media__widget facebook">
              <span className="social__media__widget-icon">
                <FontAwesomeIcon className="fa" icon={faFacebookF} />
              </span>
              <span className="social__media__widget-counter">
                {channels.facebook.followers} fans
              </span>
              <span className="social__media__widget-name">Me gusta</span>
            </div>
          </a>
        )}

        {channels.twitter && (
          <a href={channels.twitter.url} target="_blank">
            <div className="social__media__widget twitter">
              <span className="social__media__widget-icon">
                <FontAwesomeIcon className="fa" icon={faXTwitter} />
              </span>
              <span className="social__media__widget-counter">
                {channels.twitter.followers} seguidores
              </span>
              <span className="social__media__widget-name">Seguir</span>
            </div>
          </a>
        )}

        {channels.youtube && (
          <a href={channels.youtube.url} target="_blank">
            <div className="social__media__widget youtube">
              <span className="social__media__widget-icon">
                <FontAwesomeIcon className="fa" icon={faYoutube} />
              </span>
              <span className="social__media__widget-counter">
                {channels.youtube.followers} suscriptores
              </span>
              <span className="social__media__widget-name">Suscribirme</span>
            </div>
          </a>
        )}
      </div>
    </aside>
  );
};

export default SocialMedia;
