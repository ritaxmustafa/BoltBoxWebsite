import React, { useEffect, useState } from "react";
import loading from "../../helpers/lotties/loading-dog.json";
import style from "./Loader.module.css";
import Lottie from "lottie-react";

function Loader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
  };

  return (
    <>
      <div className={style.loader}>
        <div>
          <Lottie options={defaultOptions} />
        </div>
      </div>
    </>
  );
}

export default Loader;
