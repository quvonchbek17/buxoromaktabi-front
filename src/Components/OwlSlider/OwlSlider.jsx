import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Scrollbar, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./OwlSlider.scss";

const bp = {
  0: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1080: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  1320: {
    slidesPerView: 5,
    spaceBetween: 20,
  },
};

function OwlSlider({
  autoplay = false,
  delay = 2500,
  breakpoints = bp,
  children,
}) {
  return (
    <div className="owl-slider-box">
      <Swiper
        slidesPerView={1}
        spaceBetween={3}
        autoplay={
          autoplay
            ? {
                delay: delay,
                disableOnInteraction: false,
              }
            : autoplay
        }
        scrollbar={true}
        navigation={true}
        breakpoints={breakpoints}
        modules={[Autoplay, Pagination, Navigation, Scrollbar]}
        className="mySwiper"
      >
        {children.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default OwlSlider;
