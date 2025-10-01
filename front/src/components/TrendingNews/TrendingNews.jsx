"use client";

import CardArticle5 from "@/components/CardArticle/CardArticle5";
import Slider from "react-slick";

const TrendingNews = () => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    loop: true,
    dots: false,
    lazyLoad: "progressive",
    arrows: false,
    // mobileFirst: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Slider
              className="wrapp__list__article-responsive wrapp__list__article-responsive-carousel"
              {...settings}
            >
              <div className="item">
                <CardArticle5 />
              </div>
              <div className="item">
                <CardArticle5 />
              </div>
              <div className="item">
                <CardArticle5 />
              </div>
              <div className="item">
                <CardArticle5 />
              </div>
              <div className="item">
                <CardArticle5 />
              </div>
              <div className="item">
                <CardArticle5 />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingNews;
