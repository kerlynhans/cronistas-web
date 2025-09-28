import React from "react";

import logo from "@/images/logo-cronistas.svg";

const MainLogo = ({ width }) => {
  return (
    <figure className="mb-0 mx-auto">
      <a href="/homepage-v1.html">
        <img src={logo.src} width={width} alt="" className="img-fluid logo" />
      </a>
    </figure>
  );
};

export default MainLogo;
