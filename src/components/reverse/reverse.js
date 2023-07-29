import React from "react";
import style from "./reverse.module.css";
import { Link } from "react-router-dom";
import { label } from "../../helpers/language";
import { useSelector } from "react-redux";
const Reverse = () => {
  const { lng } = useSelector((state) => state.global);
  const images = [
    {
      image: "/images/general/pet.jpg",
      title: "Modern Designs Featuring Your Pet",
      content:
        "BoltBox  pet portraits are the perfect minimalist decor to start your gallery wall, design a statement shelf, or as a gift for your pet loving friends and family.",
    },
    {
      image: "/images/general/pc.webp",
      title: "Artwork by Real Artists",
      content:
        "BoltBox Pet Portraits are hand-illustrated by our talented digital artists. Each portrait is created using a manual & highly technical design process. We do not use filters or apps.",
      class: style.cardsReverse,
    },
  ];
  return (
    <div>
      {images.map((item, index) => {
        return (
          <div className={` ${style.cardsDisplay} ${item.class}`} key={index}>
            <div className="w49">
              <h1>{item.title}</h1>
              <p>{item.content}</p>
              <Link to="/order">{label[lng].paintPet}</Link>
            </div>
            <div className="w49">
              <img src={item.image} className="w-100" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Reverse;
