import CardArticle12 from "@/components/CardArticle/CardArticle12";
import Slider from "react-slick";

const PopularNews = () => {
  const settings = {
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

  return (
    <div className="popular__news-header-carousel">
      <Slider className="top__news__slider" {...settings}>
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
  );
};

export default PopularNews;
