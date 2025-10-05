import SearchBar from "@/components/SearchBar/SearchBar";
import MainLogo from "@/components/Logo/MainLogo";
import MenuNews from "@/components/MenuNews/MenuNews";
import Link from "next/link";

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
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  <i className="fa fa-home"></i> Inicio
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                  onClick={(e) => e.preventDefault()}
                >
                  Secciones
                </a>
                <ul className="dropdown-menu animate fade-up">
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/dialogos-sobre-discapacidad"
                    >
                      Diálogos sobre discapacidad
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/el-zaguan-de-las-presencias"
                    >
                      El zaguán de las presencias
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/el-libano-y-su-historia"
                    >
                      El Líbano y su historia
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/homenaje-postumo">
                      Homenaje póstumo
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/tejiendo-sentidos">
                      Tejiendo sentidos
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                  onClick={(e) => e.preventDefault()}
                >
                  Categorías
                </a>
                <ul className="dropdown-menu animate fade-up">
                  {/* Multiple Submenus
                  <li>
                    <a className="dropdown-item icon-arrow" href="#">
                      Política
                    </a>
                    <ul className="submenu dropdown-menu animate fade-up">
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
                  */}

                  <li>
                    <Link className="dropdown-item" href="/categorias/politica">
                      Política
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/categorias/educacion"
                    >
                      Educación
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/categorias/salud">
                      Salud
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/categorias/deportes">
                      Deportes
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/categorias/cultura">
                      Cultura
                    </Link>
                  </li>
                </ul>
              </li>

              {/* 
              // Sección Especiales
              <li className="nav-item dropdown has-megamenu">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                  onClick={(e) => e.preventDefault()}
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

                      {// Menu news carousel }
                      <MenuNews />
                    </div>
                  </div>
                </div>
              </li >
              */}

              {/* 
              // Sección Especiales
              <li className="nav-item">
                <Link className="nav-link" href="/clasificados">
                  Clasificados
                </Link>
              </li>
              */}

              <li className="nav-item">
                <Link className="nav-link" href="/contacto">
                  Contacto
                </Link>
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
