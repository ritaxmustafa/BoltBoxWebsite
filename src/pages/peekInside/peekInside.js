
import style from "./peekInside.module.css";
import React from "react";


// import SubTitle from "../Components/Layout/subTitle";
import { Link } from "react-router-dom";

const portrait = [
    {
      image: "../images/general/j9-min.webp",
    },
    {
      image: "../images/general/j8-min.webp",
    },
    {
      image: "../images/general/j7-min.webp",
    },
    {
      image: "../images/general/j6-min.webp",
    },
    {
      image: "../images/general/j5-min.webp",
    },
    {
      image: "../images/general/j4-min.webp",
    },
    {
      image: "../images/general/j3-min.webp",
    },
    {
      image: "../images/general/j2-min.webp",
    },
    {
      image: "../images/general/j1-min.webp",
    },
    {
        image: "../images/general/j9-min.webp",
      },
      {
        image: "../images/general/j8-min.webp",
      },
      {
        image: "../images/general/j7-min.webp",
      },
      {
        image: "../images/general/j6-min.webp",
      },
      {
        image: "../images/general/j5-min.webp",
      },
      {
        image: "../images/general/j4-min.webp",
      },
      {
        image: "../images/general/j3-min.webp",
      },
      {
        image: "../images/general/j2-min.webp",
      },
      {
        image: "../images/general/j1-min.webp",
      },
      {
        image: "../images/general/j4-min.webp",
      },
      {
        image: "../images/general/j3-min.webp",
      },
  ];

const Collection = () => {
    return (
        <div className={style.collectionBck}>
            <div>
                <img src="../images/general/img3.png" alt="color" className={style.collectionBanner} loading="lazy" />
            </div>
         
            <div className="container ">
            <h1>Pet Portraits</h1>
            <div className="grid4">
            {portrait.map((item) => {
              return (
                <Link to="/order" className={style.homeCard}>
                  <img src={item.image} alt="theme" className={style.w100} />
                </Link>
              );
            })}
          </div>
        </div>
        </div>
    )
}

export default Collection;