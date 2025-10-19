import Link from "next/link";
import FormNewsletter from "@/components/FormNewsletter/FormNewsletter";
import MainLogo from "@/components/Logo/MainLogo";
import data from "@/data/cronistas.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const FooterMenu = () => {
  const { channels, themes } = data;

  return (
    <div className="wrapper__footer bg__footer ">
      <div className=" container">
        <div className="row">
          {/** First column desktop */}
          <div className="col-md-4">
            <div className="widget__footer">
              <MainLogo width={250} hasLink={false} />
              <p>
                Aquí encontrarás noticias, opinión, artículos, crónicas,
                reportajes, sociales, deportivas, culturales y demás de el
                Líbano y la región, con una mirada cercana y comprometida.
              </p>
            </div>
            <div className="border-line"></div>

            <div className="widget__footer">
              <h4 className="footer-title">Encuéntranos</h4>
              <p>
                {channels.facebook && (
                  <Link
                    href={channels.facebook.url}
                    target="_blank"
                    className="btn btn-social btn-social-o facebook me-1"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Link>
                )}

                {channels.twitter && (
                  <Link
                    href={channels.twitter.url}
                    target="_blank"
                    className="btn btn-social btn-social-o twitter me-1"
                  >
                    <FontAwesomeIcon icon={faXTwitter} />
                  </Link>
                )}

                {channels.whatsapp && (
                  <Link
                    href={channels.whatsapp.url}
                    target="_blank"
                    className="btn btn-social btn-social-o whatsapp me-1"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </Link>
                )}

                {channels.instagram && (
                  <Link
                    href={channels.instagram.url}
                    target="_blank"
                    className="btn btn-social btn-social-o instagram me-1"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                )}

                {channels.youtube && (
                  <Link
                    href={channels.youtube.url}
                    target="_blank"
                    className="btn btn-social btn-social-o youtube me-1"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </Link>
                )}
              </p>
            </div>
          </div>

          {/** Second column desktop */}
          <div className="col-md-4">
            <div className="widget__footer">
              <h4 className="footer-title">Temas</h4>
              <div className="link__category">
                <ul className="list-unstyled ">
                  {themes.map((theme) => (
                    <li className="list-inline-item" key={theme.lnk}>
                      <Link href={`/temas?q=${theme.lnk}`}>{theme.lbl}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/** Third column desktop */}
          <div className="col-md-4">
            <div className="widget__footer">
              <h4 className="footer-title">Boletín</h4>
              <FormNewsletter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMenu;
