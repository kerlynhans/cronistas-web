"use client";

import TopBanner from "@/components/AdBanner/TopBanner";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import styles from "./MainBanners.module.scss";

const MainBanners = ({ banners }) => {
  if (!banners) return null;

  return (
    <section className={styles.mainBanners}>
      {/* Banners carousel */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="top__news__slider">
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 10000 }}
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
                {banners.map((banner, index) => (
                  <SwiperSlide key={index} className="item">
                    <TopBanner data={banner} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBanners;
