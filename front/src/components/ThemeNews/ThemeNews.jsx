"use client";

import CardArticle11 from "@/components/CardArticle/CardArticle11";
import Slider from "react-slick";

const ThemeNews = () => {
  const settings = {
    slidesToShow: 4,
    autoplay: true,
    dots: false,
    lazyLoad: "progressive",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <aside className="wrapper__list__article">
            <h4 className="border_section">technology</h4>
          </aside>
        </div>
        <div className="col-md-12">
          <Slider className="article__entry-carousel" {...settings}>
            <div className="item">
              <CardArticle11 />
            </div>
            <div className="item">
              <CardArticle11 />
            </div>
            <div className="item">
              <CardArticle11 />
            </div>
            <div className="item">
              <CardArticle11 />
            </div>
            <div className="item">
              <CardArticle11 />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ThemeNews;
