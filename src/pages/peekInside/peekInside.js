
import style from "./peekInside.module.css";
import React from "react";


// import SubTitle from "../Components/Layout/subTitle";
import { Link } from "react-router-dom";
import Reverse from "../../components/reverse/reverse";
import Slider from "../../components/slider/slider";

const portrait = [
  {
    image: "/images/general/1.webp",
  },
  {
    image: "/images/general/2.webp",
  },
  {
    image: "/images/general/3.webp",
  },
  {
    image: "/images/general/4.webp",
  },
  {
    image: "/images/general/5.webp",
  },
  {
    image: "/images/general/6.webp",
  },
  {
    image: "/images/general/7.webp",
  },
  {
    image: "/images/general/8.webp",
  },
  {
    image: "/images/general/9.webp",
  },
  {
    image: "/images/general/10.webp",
  },
  {
    image: "/images/general/11.webp",
  },
    {
      image: "/images/general/j9-min.webp",
    },
    {
      image: "/images/general/j8-min.webp",
    },
    {
      image: "/images/general/j7-min.webp",
    },
    {
      image: "/images/general/j6-min.webp",
    },
    {
      image: "/images/general/j5-min.webp",
    },
    {
      image: "/images/general/j4-min.webp",
    },
    {
      image: "/images/general/j3-min.webp",
    },
    {
      image: "/images/general/j2-min.webp",
    },
    {
      image: "/images/general/j1-min.webp",
    },
  
  ];

const Collection = () => {
    return (
        <>
            <div className={style.collectionBck}>
            <div>
                <img src={"/images/general/img3.png"} alt="color" className={style.collectionBanner} loading="lazy" />
            </div>
         
            <div className="container ">
            <h1 className={style.mainHeader}>Pet Portraits</h1>
            <div className="grid4">
            {portrait.map((item, index) => {
              return (
                <Link to="/order" className={style.homeCard} key={index}>
                  <img src={item.image} alt="theme" className={style.w100} />
                </Link>
              );
            })}
          </div>

          <Reverse/>
       
        </div>
      
        </div>
          <Slider/></>
    )
}

export default Collection;