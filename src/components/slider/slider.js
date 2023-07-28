import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { Link } from "react-router-dom";
import style from "./slider.module.css";
import "swiper/swiper-bundle.min.css"; // Import Swiper core styles

SwiperCore.use([Autoplay]); // Enable autoplay module

const Slider = () => {
  return (
    <Swiper
      watchSlidesProgress={true}
      autoplay={{
        delay: 0, // Set the autoplay delay to 5000ms (5 seconds)
      }}
      scrollbar={{ draggable: false }}
      clickable={true}
      centeredSlides={true}
      loop={true}
      speed={5000}
      breakpoints={{
        320: {
          slidesPerView: 1.2,
        },
        600: {
          slidesPerView: 1.2,
        },
        700: {
          slidesPerView: 2,
        },
        800: {
          slidesPerView: 2,
        },
        900: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 4.5,
        },
      }}
      className="cursor-custom pt-100"
    >
      <div className={style.swiperWrapper}>
      <SwiperSlide className={style.sliderPosition}> 
            <Link to="/formify">
                <img src="../images/general/ig1-min.webp" className="w-100"  width="100%"  />
             
            </Link>
        </SwiperSlide>
        
        <SwiperSlide className={style.sliderPosition}>    <Link to="/buster-box" >
                <img src="../images/general/ig2-min.webp"  className="w-100" width="100%"  />
               
            </Link></SwiperSlide>
            <SwiperSlide className={style.sliderPosition}>    <Link to="/finser">
                <img src="../images/general/ig3-min.webp"  className="w-100" width="100%"  />
 
            </Link> </SwiperSlide>
    
            <SwiperSlide className={style.sliderPosition}>    <Link to="/instinct">
                <img src="../images/general/ig4-min.webp"  className="w-100"  width="100%"  />
        
            </Link></SwiperSlide>
        <SwiperSlide className={style.sliderPosition}>    <Link to="/buster-box">
                <img src="../images/general/ig5-min.webp"  className="w-100"  width="100%"  />
            
            </Link></SwiperSlide>
        
        
        <SwiperSlide className={style.sliderPosition}>    <Link to="/intersport">
                <img src="../images/general/ig4-min.webp"  className="w-100" width="100%" />
 
            </Link>
          </SwiperSlide>


          <SwiperSlide className={style.sliderPosition}> 
            <Link to="/formify">
                <img src="../images/general/ig1-min.webp" className="w-100"  width="100%"  />
             
            </Link>
        </SwiperSlide>
        
        <SwiperSlide className={style.sliderPosition}>    <Link to="/buster-box" >
                <img src="../images/general/ig2-min.webp"  className="w-100" width="100%"  />
               
            </Link></SwiperSlide>
            <SwiperSlide className={style.sliderPosition}>    <Link to="/finser">
                <img src="../images/general/ig3-min.webp"  className="w-100" width="100%"  />
 
            </Link> </SwiperSlide>
    
            <SwiperSlide className={style.sliderPosition}>    <Link to="/instinct">
                <img src="../images/general/ig4-min.webp"  className="w-100"  width="100%"  />
        
            </Link></SwiperSlide>
        <SwiperSlide className={style.sliderPosition}>    <Link to="/buster-box">
                <img src="../images/general/ig5-min.webp"  className="w-100"  width="100%"  />
            
            </Link></SwiperSlide>
        
        
        <SwiperSlide className={style.sliderPosition}>    <Link to="/intersport">
                <img src="../images/general/ig4-min.webp"  className="w-100" width="100%"   />
 
            </Link>
          </SwiperSlide>
      </div>
    </Swiper>
  );
};

export default Slider;
