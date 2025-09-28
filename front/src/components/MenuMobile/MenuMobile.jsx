import SearchForm from "@/components/SearchForm/SearchForm";
import { Modal, Button } from "react-bootstrap";

const MenuMobile = ({ menuShow, menuHide }) => {
  return (
    <Modal
      show={menuShow}
      onHide={menuHide}
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
            <li className="nav-item dropdown">
              <a
                className="nav-link active dropdown-toggle text-dark"
                href="#"
                data-toggle="dropdown"
              >
                Home
              </a>
              <ul className="dropdown-menu dropdown-menu-left">
                <li>
                  <a
                    className="dropdown-item text-dark"
                    href="/homepage-v1.html"
                  >
                    Home version one
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-dark"
                    href="homepage-v2.html"
                  >
                    Home version two
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-dark"
                    href="/homepage-v3.html"
                  >
                    Home version three
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-dark"
                    href="/homepage-v4.html"
                  >
                    Home version four
                  </a>
                </li>
              </ul>
            </li>
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

            <li className="nav-item dropdown">
              <a
                className="nav-link active dropdown-toggle  text-dark"
                href="#"
                data-toggle="dropdown"
              >
                About
              </a>
              <ul className="dropdown-menu dropdown-menu-left">
                <li>
                  <a className="dropdown-item" href="/about-us.html">
                    Style 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/about-us-v1.html">
                    Style 2
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link  text-dark" href="#">
                Category
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  text-dark" href="/contact.html">
                Contact
              </a>
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
