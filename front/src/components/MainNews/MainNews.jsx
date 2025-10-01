"use client";

import CardArticle12 from "@/components/CardArticle/CardArticle12";
import CardArticle2 from "@/components/CardArticle/CardArticle2";
import CardArticle1 from "@/components/CardArticle/CardArticle1";
import Slider from "react-slick";

const MainNews = () => {
  const settings2 = {
    slidesToShow: 4,
    slidesToScroll: 4,
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

  const settings1 = {
    slidesToShow: 1,
    autoplay: true,
    dots: false,
    lazyLoad: "progressive",
    arrows: false,
  };

  return (
    <section>
      {/* Popular news  header */}
      <div className="popular__news-header">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-8 ">
              <div className="card__post-carousel">
                <CardArticle2 />
              </div>
            </div>
            <div className="col-md-4">
              <div className="popular__news-right">
                <CardArticle1 />
                <CardArticle1 />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular news carousel */}
      <div className="popular__news-header-carousel">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Slider className="top__news__slider" {...settings2}>
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
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainNews;
