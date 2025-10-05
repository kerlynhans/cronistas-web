import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";

import SearchForm from "@/components/SearchForm/SearchForm";

const MenuMobile = ({ menuShow, menuHide }) => {
  const [current, setCurrent] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    menuHide();
  }, [pathname]);

  const handleMenuHide = () => {
    setCurrent("");
    menuHide();
  };

  const handleSubMenu = (e, id) => {
    e.preventDefault();
    setCurrent(id === current ? "" : id);
  };

  return (
    <Modal
      show={menuShow}
      onHide={handleMenuHide}
      id="modal_aside_right"
      dialogClassName="modal-dialog-aside"
      className="fixed-left"
    >
      <Modal.Header>
        <SearchForm className="widget__form-search-bar" />

        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={menuHide}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </Modal.Header>

      <Modal.Body>
        <nav className="list-group list-group-flush">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link
                className="nav-link text-dark"
                href="/"
                onClick={handleMenuHide}
              >
                <i className="fa fa-home"></i> Inicio
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link active dropdown-toggle text-dark"
                href="#"
                data-toggle="dropdown"
                onClick={(e) => handleSubMenu(e, "sections")}
              >
                Secciones
              </a>
              <ul
                className={`dropdown-menu dropdown-menu-left  ${
                  current === "sections" && "d-block"
                }`}
              >
                <li>
                  <Link
                    className="dropdown-item text-dark"
                    href="/dialogos-sobre-discapacidad"
                  >
                    Diálogos sobre discapacidad
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-dark"
                    href="/el-zaguan-de-las-presencias"
                  >
                    El zaguán de las presencias
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-dark"
                    href="/el-libano-y-su-historia"
                  >
                    El Líbano y su historia
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-dark"
                    href="/homenaje-postumo"
                  >
                    Homenaje póstumo
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-dark"
                    href="/tejiendo-sentidos"
                  >
                    Tejiendo sentidos
                  </Link>
                </li>
              </ul>
            </li>

            {/* TODO: Multiple Submenus
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle  text-dark"
                href="#"
                data-toggle="dropdown"
              >
                Pages
              </a>
              <ul className="dropdown-menu animate fade-up">
                <li>
                  <a className="dropdown-item icon-arrow  text-dark" href="#">
                    Blog
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
                      <a
                        className="dropdown-item icon-arrow  text-dark"
                        href=""
                      >
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
                      <a className="dropdown-item  text-dark" href="">
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
                  <a className="dropdown-item icon-arrow  text-dark" href="#">
                    Blog single detail
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
                  <a className="dropdown-item icon-arrow  text-dark" href="#">
                    Search Result
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
                  <a className="dropdown-item  text-dark" href="/login.html">
                    Login
                  </a>
                </li>
                <li>
                  <a className="dropdown-item  text-dark" href="/register.html">
                    Register
                  </a>
                </li>
                <li>
                  <a className="dropdown-item  text-dark" href="/contact.html">
                    Contact
                  </a>
                </li>
                <li>
                  <a className="dropdown-item  text-dark" href="/404.html">
                    404 Error
                  </a>
                </li>
              </ul>
            </li>
            */}

            <li className="nav-item dropdown">
              <a
                className="nav-link active dropdown-toggle  text-dark"
                href="#"
                data-toggle="dropdown"
                onClick={(e) => handleSubMenu(e, "categories")}
              >
                Categorías
              </a>
              <ul
                className={`dropdown-menu dropdown-menu-left  ${
                  current === "categories" && "d-block"
                }`}
              >
                <li>
                  <Link className="dropdown-item" href="/categorias/politica">
                    Política
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/categorias/educacion">
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
            <li className="nav-item">
              <a className="nav-link  text-dark" href="/clasificados">
                Clasificados
              </a>
            </li>
              */}
            <li className="nav-item">
              <Link className="nav-link  text-dark" href="/contacto">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </Modal.Body>

      <Modal.Footer>
        <p>
          © 2025{" "}
          <a href="/" title="Página de inicio">
            Cronistas
          </a>{" "}
          - su periódico. El informativo de interés regional.
        </p>
      </Modal.Footer>
    </Modal>
  );
};

export default MenuMobile;
