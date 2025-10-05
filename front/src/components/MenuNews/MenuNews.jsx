"use client";

import CardArticle12 from "@/components/CardArticle/CardArticle12";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const PopularNews = () => {
  return (
    <div className="popular__news-header-carousel">
      <div className="top__news__slider">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          spaceBetween={27}
          slidesPerView={4}
          loop={true}
        >
          {[...Array(5)].map((_, index) => (
            <SwiperSlide key={index} className="item">
              <CardArticle12 />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularNews;
