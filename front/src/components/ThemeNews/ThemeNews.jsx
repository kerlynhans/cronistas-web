"use client";

import CardArticle11 from "@/components/CardArticle/CardArticle11";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const ThemeNews = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <aside className="wrapper__list__article">
            <h4 className="border_section">Nuestras crónicas</h4>
          </aside>
        </div>
        <div className="col-md-12">
          <div className="article__entry-carousel">
            <Swiper
              modules={[Autoplay, Navigation]}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              onInit={(swiper) => {
                // Ensure Swiper links to external buttons
                swiper.params.navigation.prevEl = ".swiper-button-prev";
                swiper.params.navigation.nextEl = ".swiper-button-next";
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              autoplay={{ delay: 3000 }}
              spaceBetween={10}
              slidesPerView={2}
              loop={true}
              breakpoints={{
                400: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 27,
                },
              }}
            >
              {[...Array(5)].map((_, index) => (
                <SwiperSlide key={index} className="item">
                  <CardArticle11 />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-button-prev">
              <FontAwesomeIcon icon={faAngleLeft} />
            </div>
            <div className="swiper-button-next">
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeNews;
