"use client";

import CardArticle12 from "@/components/CardArticle/CardArticle12";
import CardArticle2 from "@/components/CardArticle/CardArticle2";
import CardArticle1 from "@/components/CardArticle/CardArticle1";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const MainNews = () => {
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
              <div className="top__news__slider">
                <Swiper
                  modules={[Autoplay]}
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
                      <CardArticle12 />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainNews;
