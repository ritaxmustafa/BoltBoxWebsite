import React, { useEffect, useState } from "react";
import loading from "../../helpers/lotties/loading-dog.json";
import style from "./Loader.module.css";
import { useLottie } from "lottie-react";

function Loader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
  };

  const { View } = useLottie(defaultOptions);

  return (
    <>
      <div className={style.loader}>
        <div>{View}  </div>
      </div>
    </>
  );
}

export default Loader;
