import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import styles from "./NavbarTop.module.scss";
import Link from "next/link";

const NavbarTop = () => {
  return (
    <div className={`${styles.navbarTop} topbar d-none d-sm-block`}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-5">
            <div className="topbar-left">
              <div className={`topbar-text ${styles.text}`}>
                Lunes, Marzo 22, 2020
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-7">
            <div className="list-unstyled topbar-right">
              <ul className={`topbar-link ${styles.text}`}>
                <li>
                  <Link href="/contacto" title="Contáctanos">
                    Contáctanos
                  </Link>
                </li>

                {/* <li>
                  <a href="#" title="Login o registro">
                    Login / Registro
                  </a>
                </li> */}
              </ul>
              <ul className="topbar-sosmed">
                <li>
                  <a href="#" title="Síguenos en Facebook">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li>
                  <a href="#" title="Síguenos en X">
                    <FontAwesomeIcon icon={faXTwitter} />
                  </a>
                </li>
                <li>
                  <a href="#" title="Síguenos en Instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
