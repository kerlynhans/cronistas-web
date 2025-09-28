import React from "react";

import logo from "@/images/logo-cronistas.svg";

const MainLogo = ({ width, hasLink, className }) => {
  return (
    <figure className={className}>
      {hasLink ? (
        <a href="/homepage-v1.html">
          <img src={logo.src} width={width} alt="" className="img-fluid logo" />
        </a>
      ) : (
        <img src={logo.src} width={width} alt="" className="img-fluid logo" />
      )}
    </figure>
  );
};

export default MainLogo;
