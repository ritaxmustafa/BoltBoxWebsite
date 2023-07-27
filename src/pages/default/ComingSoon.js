import React, { useState } from "react";
import failed from "../../helpers/lotties/19230-payment-failed.json";
import success from "../../helpers/lotties/dog.json";
import Lottie from "lottie-react";
import style from "./ComingSoon.module.css";
import { useParams } from "react-router";

const ComingSoon = () => {

  
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData:success,
  };
  return (
    <div className={style.blue}>
      <div className="container">
        <div className={style.paymentMessageBody}>
          <div className={style.paymentMessage}>
            <Lottie options={defaultOptions} />
          </div>
          <h1>Coming Soon</h1>
          <p>Your furry friend is going to be so happy! </p>
          <div className={style.paymentMessageFooter}>
            <p>Wait for us!</p>
            <img src="../images/logo.svg" alt="logo" width={'250px'} loading="lazy" />

          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
