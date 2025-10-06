import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import FormContact from "@/components/FormConctact/FormContact";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <main>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Breadcrumb />
            </div>
          </div>
        </div>
      </section>

      <section className="wrap__contact-form">
        <div className="container">
          <div className="row">
            <FormContact />

            <div className="col-md-4">
              <h5>Ubicación</h5>
              <div className="wrap__contact-form-office">
                <ul className="list-unstyled">
                  <li>
                    <span>
                      <i className="fa fa-home"></i>
                    </span>
                    PO Box 16122 Collins Street West Victoria 8007 Australia
                  </li>
                  <li>
                    <span>
                      <i className="fa fa-phone"></i>
                      <a href="tel:">(+12) 34567 890 123</a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fa fa-envelope"></i>
                      <a href="mailto:">mail@example.com</a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fa fa-globe"></i>
                      <a href="#" target="_blank">
                        {" "}
                        www.yourdomain.com
                      </a>
                    </span>
                  </li>
                </ul>

                <div className="social__media">
                  <h5>Encuéntranos</h5>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a
                        href="#"
                        className="btn btn-social rounded text-white facebook"
                      >
                        <FontAwesomeIcon icon={faFacebookF} />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="#"
                        className="btn btn-social rounded text-white twitter"
                      >
                        <FontAwesomeIcon icon={faXTwitter} />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="#"
                        className="btn btn-social rounded text-white whatsapp"
                      >
                        <FontAwesomeIcon icon={faWhatsapp} />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="#"
                        className="btn btn-social rounded text-white instagram"
                      >
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="#"
                        className="btn btn-social rounded text-white youtube"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
