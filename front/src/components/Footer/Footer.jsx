import React from "react";
import FormNewsletter from "@/components/FormNewsletter/FormNewsletter";
import MainLogo from "@/components/Logo/MainLogo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import SoyKoddy from "../SoyKoddy/SoyKoddy";

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
                <h4 className="footer-title">Síguenos</h4>

                <p>
                  <button className="btn btn-social btn-social-o facebook me-1">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </button>
                  <button className="btn btn-social btn-social-o twitter me-1">
                    <FontAwesomeIcon icon={faXTwitter} />
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
                      <a href="#">apps</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">business</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">entertainment</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">fashion</a>
                    </li>

                    <li className="list-inline-item">
                      <a href="#">Food</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Gadget</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Gaming</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Health</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Lifestyle</a>
                    </li>

                    <li className="list-inline-item">
                      <a href="#">Science</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Travel</a>
                    </li>

                    <li className="list-inline-item">
                      <a href="#">Startup</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Sports</a>
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
                <a href="/" title="Página de inicio">
                  Cronistas
                </a>{" "}
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
