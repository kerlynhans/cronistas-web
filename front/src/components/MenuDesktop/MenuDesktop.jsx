import React from "react";

import CardArticle12 from "@/components/CardArticle/CardArticle12";
import SearchBar from "@/components/SearchBar/SearchBar";
import MainLogo from "@/components/Logo/MainLogo";

import styles from "./MenuDesktop.module.scss";

const MenuDesktop = ({ menuShow }) => {
  return (
    <div className="navigation-wrap navigation-shadow bg-white">
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

          <MainLogo width={200} />

          <div
            className="collapse navbar-collapse justify-content-between"
            id="main_nav99"
          >
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item dropdown">
                <a
                  className="nav-link active dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                >
                  Home
                </a>
                <ul className="dropdown-menu dropdown-menu-left">
                  <li>
                    <a className="dropdown-item" href="/homepage-v1.html">
                      Home version one
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="homepage-v2.html">
                      Home version two
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/homepage-v3.html">
                      Home version three
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/homepage-v4.html">
                      Home version four
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
                  Pages
                </a>
                <ul className="dropdown-menu animate fade-up">
                  <li>
                    <a className="dropdown-item icon-arrow" href="#">
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
                    <a className="dropdown-item icon-arrow" href="#">
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
                    <a className="dropdown-item" href="/login.html">
                      Login
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/register.html">
                      Register
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/contact.html">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/404.html">
                      404 Error
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link active dropdown-toggle"
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

              <li className="nav-item dropdown has-megamenu">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                >
                  News
                </a>
                <div
                  className="dropdown-menu animate fade-down megamenu mx-auto"
                  role="menu"
                >
                  <div className="container wrap__mobile-megamenu">
                    <div className="col-megamenu">
                      <h5 className="title">Recent news</h5>
                      <hr />
                      {/* <!-- Popular news carousel --> */}
                      <div className="popular__news-header-carousel">
                        <div className="top__news__slider">
                          <div className="item">
                            <CardArticle12 />
                          </div>
                          <div className="item">
                            <CardArticle12 />
                          </div>
                          <div className="item">
                            <CardArticle12 />
                          </div>
                          <div className="item">
                            <CardArticle12 />
                          </div>
                          <div className="item">
                            <CardArticle12 />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- col-megamenu.// --> */}
                  </div>
                </div>
                {/* <!-- dropdown-mega-menu.// --> */}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Category
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact.html">
                  contact
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
