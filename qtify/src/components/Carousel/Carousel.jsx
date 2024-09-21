import React, { useEffect, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import LeftArrow from "../Arrows/Left"; // Import your custom SVG component
import RightArrow from "../Arrows/Right"; // Import your custom SVG component
import styles from "./Carousel.module.css";
import Card from "../Card/Card";

const Carousel = ({ albums ,type}) => {
  // const slideItems = Array.isArray(slides) ? slides : [];
  useEffect(() => {
    console.log(albums);
  }, []);

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={5}
      navigation={{
        prevEl: `.${styles.swiperButtonPrev}`,
        nextEl: `.${styles.swiperButtonNext}`,
      }}
      lazy="true"
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
      {albums && albums.length > 0 ? (
        albums.map((album) => (
          <SwiperSlide key={album.id}>
            <Card
              title={album.title}
              follows={album.follows}
              likes={album.likes}
              image={album.image}
              key={album.id}
              type={type}
            />
          </SwiperSlide>
        ))
      ) : (
        <p>No {type} available 😢</p>
      )}
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
// Carousel.propTypes = {
//   albums: PropTypes.arrayOf(PropTypes.node).isRequired,
// };

export default Carousel;
