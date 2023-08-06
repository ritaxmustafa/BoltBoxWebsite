import React, { useEffect, useState } from "react";
import loading from "../../helpers/lotties/loading-dog.json";
import style from "./Loader.module.css";
import { useLottie } from "lottie-react";
import { useSelector } from "react-redux";
import { label } from "../../helpers/language";

function Loader() {
  const { lng } = useSelector((state) => state.global);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
  };

  const { View } = useLottie(defaultOptions);

  return (
    <>
      <div className={style.loader}>
        <div>
          {View}
          <p>{label[lng].wait}</p>
        </div>
      </div>
    </>
  );
}

export default Loader;
