import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import LeftArrow from "../Arrows/Left"; // Import your custom SVG component
import RightArrow from "../Arrows/Right"; // Import your custom SVG component
import styles from "./Carousel.module.css";

const Carousel = ({ slides }) => {
  const slideItems = Array.isArray(slides) ? slides : [];

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={5}
      navigation={{
        prevEl: `.${styles.swiperButtonPrev}`,
        nextEl: `.${styles.swiperButtonNext}`,
      }}
      lazy={true}
      breakpoints={{
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          
        },
        // when window width is >= 640px

        640: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        },
        1280: {
          slidesPerView: 7,
        },
      }}
      modules={[Navigation]}
      className={styles.mySwiper}
    >
      {slideItems.map((slide, index) => (
        <SwiperSlide key={index} className={styles.slide}>
          {slide}
        </SwiperSlide>
      ))}
      <div className={styles.swiperButtonPrev}>
        <LeftArrow />
      </div>
      <div className={styles.swiperButtonNext}>
        <RightArrow />
      </div>
    </Swiper>
  );
};

// Add PropTypes validation
Carousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Carousel;
