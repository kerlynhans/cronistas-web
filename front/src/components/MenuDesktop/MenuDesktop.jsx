import SearchBar from "@/components/SearchBar/SearchBar";
import MainLogo from "@/components/Logo/MainLogo";
import PopularNews from "@/components/PopularNews/PopularNews";

import styles from "./MenuDesktop.module.scss";

const MenuDesktop = ({ menuShow }) => {
  return (
    <div
      className={`${styles.menuDesktop} navigation-wrap navigation-shadow bg-white`}
    >
      <nav className="navbar navbar-hover navbar-expand-lg navbar-soft">
        <div className="container">
          <div className="offcanvas-header">
            <button
              onClick={menuShow}
              className={`btn-md ${styles.toggleMenu}`}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <MainLogo width={300} className="mb-0 mx-auto" hasLink={true} />

          <div
            className="collapse navbar-collapse justify-content-between"
            id="main_nav99"
          >
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                >
                  Secciones
                </a>
                <ul className="dropdown-menu animate fade-up">
                  <li>
                    <a className="dropdown-item" href="/homepage-v1.html">
                      Diálogos sobre discapacidad
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="homepage-v2.html">
                      El zaguán de las presencias
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/homepage-v3.html">
                      El Líbano y su historia
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/homepage-v4.html">
                      Homenaje póstumo
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/homepage-v3.html">
                      Tejiendo sentidos
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                >
                  Categorías
                </a>
                <ul className="dropdown-menu animate fade-up">
                  <li>
                    <a className="dropdown-item icon-arrow" href="#">
                      Política
                    </a>
                    <ul className="submenu dropdown-menu  animate fade-up">
                      <li>
                        <a
                          className="dropdown-item"
                          href="/category-style-v1.html"
                        >
                          Style 1
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/category-style-v2.html"
                        >
                          Style 2
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/category-style-v3.html"
                        >
                          Style 3
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item icon-arrow" href="">
                          Submenu item 3
                        </a>
                        <ul className="submenu dropdown-menu  animate fade-up">
                          <li>
                            <a className="dropdown-item" href="">
                              Multi level 1
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="">
                              Multi level 2
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="dropdown-item" href="">
                          Submenu item 4
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="">
                          Submenu item 5
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="dropdown-item icon-arrow" href="#">
                      Educación
                    </a>
                    <ul className="submenu dropdown-menu  animate fade-up">
                      <li>
                        <a
                          className="dropdown-item"
                          href="/article-detail-v1.html"
                        >
                          Style 1
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/article-detail-v2.html"
                        >
                          Style 2
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/article-detail-v3.html"
                        >
                          Style 3
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="dropdown-item icon-arrow" href="#">
                      Salud
                    </a>
                    <ul className="submenu dropdown-menu  animate fade-up">
                      <li>
                        <a className="dropdown-item" href="/search-result.html">
                          Style 1
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/search-result-v1.html"
                        >
                          Style 2
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/login.html">
                      Deportes
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/register.html">
                      Cultura
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown has-megamenu">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                >
                  Especiales
                </a>
                <div
                  className="dropdown-menu animate fade-down megamenu mx-auto"
                  role="menu"
                >
                  <div className="container wrap__mobile-megamenu">
                    <div className="col-megamenu">
                      <h5 className="title">Recent news</h5>
                      <hr />

                      {/* Popular news carousel */}
                      <PopularNews />
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Temas
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/contact.html">
                  Contacto
                </a>
              </li>
            </ul>

            {/* Search */}
            <SearchBar />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MenuDesktop;
