import Link from "next/link";
import FormNewsletter from "@/components/FormNewsletter/FormNewsletter";
import MainLogo from "@/components/Logo/MainLogo";
import SoyKoddy from "@/components/SoyKoddy/SoyKoddy";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper__footer bg__footer ">
        <div className=" container">
          <div className="row">
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
                  <button className="btn btn-social btn-social-o facebook me-1">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </button>
                  <button className="btn btn-social btn-social-o twitter me-1">
                    <FontAwesomeIcon icon={faXTwitter} />
                  </button>
                  <button className="btn btn-social btn-social-o whatsapp me-1">
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </button>
                  <button className="btn btn-social btn-social-o instagram me-1">
                    <FontAwesomeIcon icon={faInstagram} />
                  </button>
                  <button className="btn btn-social btn-social-o youtube me-1">
                    <FontAwesomeIcon icon={faYoutube} />
                  </button>
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="widget__footer">
                <h4 className="footer-title">Temas</h4>
                <div className="link__category">
                  <ul className="list-unstyled ">
                    <li className="list-inline-item">
                      <Link href="/temas?=theme">apps</Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="/temas?=theme">business</Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="/temas?=theme">entertainment</Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="/temas?=theme">fashion</Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="/temas?=theme">Food</Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="/temas?=theme">Gadget</Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="/temas?=theme">Gaming</Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="/temas?=theme">Health</Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="/temas?=theme">Lifestyle</Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="/temas?=theme">Science</Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="/temas?=theme">Travel</Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="/temas?=theme">Startup</Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="/temas?=theme">Sports</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="widget__footer">
                <h4 className="footer-title">Boletín</h4>
                <FormNewsletter />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg__footer-bottom ">
        <div className="container">
          <div className="row flex-column-reverse flex-md-row">
            <div className="col-md-6">
              <span>
                © 2025{" "}
                <Link href="/" title="Página de inicio">
                  Cronistas
                </Link>{" "}
                - su periódico. El informativo de interés regional.
              </span>
            </div>
            <div className="col-md-6">
              <SoyKoddy />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
