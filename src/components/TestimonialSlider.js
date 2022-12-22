import React from "react";

// import testimonials data
import { testimonials } from "../data";

// import swiper react components
import { swiper, SwiperSlide, swiperSlide } from "swiper/react";
// import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../swiper.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

const TestimonialSlider = () => {
  return (
    <>
      <swiper
        Pagination={{
          clickable: true,
        }}
        Autoplay={{
          delay: 2500,
          disableOnInterAction: false,
        }}
        modules={{ Autoplay, Pagination }}
        className="mySwiper"
      >
        {testimonials.map((item, index) => {
          const { authorImg, authorText, authorName } = item;
          return <SwiperSlide key={index}>Slide</SwiperSlide>;
        })}
      </swiper>
    </>
  );
};

export default TestimonialSlider;
