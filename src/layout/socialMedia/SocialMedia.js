import React, { useState } from "react";
import { Link } from "react-router-dom";
import Heading from "../../components/heading/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import style from "./SocialMedia.module.css";

const SocialMedia = ({ page }) => {
  const [autoplay, setAutoplay] = useState(true);

  const slider = [
    {
      image: "/images/general/ig1-min.webp",
    },
    {
      image: "/images/general/ig2-min.webp",
    },
    {
      image: "/images/general/ig3-min.webp",
    },
    {
      image: "/images/general/ig4-min.webp",
    },
    {
      image: "/images/general/ig5-min.webp",
    },
    {
      image: "/images/general/ig1-min.webp",
    },
    {
      image: "/images/general/ig2-min.webp",
    },
    {
      image: "/images/general/ig3-min.webp",
    },
    {
      image: "/images/general/ig4-min.webp",
    },
    {
      image: "/images/general/ig5-min.webp",
    },
  ];

  return (
    <>
      <div className="container follow-us pt-50 pb-20">
        <Heading text={"Follow us"} customStyle={"main"} />

        <a
          href="https://www.instagram.com/boltbox_/"
          rel="noreferrer"
          target="_blank"
        >
          @boltbox_
        </a>
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        className="mySwiper slick-img"
        spaceBetween={0}
        watchOverflow="hidden"
        scrollbar={{ draggable: false }}
        clickable={true}
        centeredSlides={true}
        loop={true}
        speed={7000}
        autoplay={{
          delay: 0,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 3,
            spaceBetween: -10,
          },
          800: {
            slidesPerView: 3,
            spaceBetween: -10,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
      >
        <div className={style.swiperWrapper}>
          {slider.map(function (item, i) {
            return (
              <SwiperSlide className={style.swiperLink} key={i}>
                <Link to="/order">
                  <img
                    src={item.image}
                    alt="#"
                    onMouseEnter={() => setAutoplay(false)}
                    onMouseLeave={() => setAutoplay(true)}
                  />
                </Link>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </>
  );
};

export default SocialMedia;
