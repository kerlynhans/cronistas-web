import React from "react";

const AdBanner = () => {
  return (
    <aside className="wrapper__list__article">
      <h4 className="border_section">Publicidad</h4>
      <a href="#">
        <figure>
          <img
            src="/images/placeholder/600x400.jpg"
            alt=""
            className="img-fluid"
          />
        </figure>
      </a>
    </aside>
  );
};

export default AdBanner;
