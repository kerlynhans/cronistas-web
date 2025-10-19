"use client";

import CardArticle5 from "@/components/CardArticle/CardArticle5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const TrendingNews = ({ articles }) => {
  if (!articles.length) return null;

  return (
    <section className="bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 8000 }}
              slidesPerView={1}
              loop={true}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
            >
              {articles.map((article, index) => (
                <SwiperSlide key={index} className="item">
                  <CardArticle5 data={article} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingNews;
