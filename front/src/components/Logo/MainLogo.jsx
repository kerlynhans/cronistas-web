import React from "react";

import styles from "./MainLogo.module.scss";
import logo from "@/images/logo-cronistas.svg";

const MainLogo = ({ width, hasLink, className }) => {
  return (
    <figure className={`${styles.mainLogo} ${className}`}>
      {hasLink ? (
        <a href="/homepage-v1.html">
          <img src={logo.src} width={width} alt="" className="img-fluid logo" />
          <span>Su periódico</span>
        </a>
      ) : (
        <img src={logo.src} width={width} alt="" className="img-fluid logo" />
      )}
    </figure>
  );
};

export default MainLogo;
