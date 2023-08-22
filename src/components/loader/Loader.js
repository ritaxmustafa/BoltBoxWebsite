import React, { useEffect, useState } from "react";
import loading from "../../helpers/lotties/loadingWebsite.json";
import style from "./Loader.module.css";
import { useLottie } from "lottie-react";
import { useSelector } from "react-redux";
import { label } from "../../helpers/language";

function Loader({isCheckout = false}) {
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
        <div>{View}</div>
        {isCheckout ? <h1>{label[lng].waitCheckout}  </h1>
        : <h1>{label[lng].wait}  </h1>}
      </div>
    </>
  );
}

export default Loader;
