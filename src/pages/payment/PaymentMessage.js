import React, { useState } from "react";
import failed from "../../helpers/lotties/19230-payment-failed.json";
import success from "../../helpers/lotties/101253-successful.json";
import Lottie from "lottie-react";
import style from "./PaymentMessage.module.css";
import { useParams } from "react-router";

const PaymentMessage = ({ page }) => {
  const { type } = useParams();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: type === "success" ? success : failed,
  };
  return (
    <>
      {" "}
      {type === "success" ? (
        <div className="container">
          <div className={style.paymentMessageBody}>
            <div className={style.paymentMessage}>
              <Lottie options={defaultOptions} />
            </div>
            <h1>Order confirmed!</h1>
            <p>Your furry friend is going to be so happy! </p>
            <div className={style.paymentMessageFooter}>
              <p>Thanks for choosing us</p>
              <h1>BoltBox Team</h1>
              <span>
                If you haven't received your recipe via email, please let us
                know at info@bolx-box.com
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className={style.paymentMessageBodyError}>
            <div className={style.paymentMessageError}>
              <Lottie options={defaultOptions} />
            </div>
            <h1>Payment Declined!</h1>
            <p>Something went wrong! </p>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentMessage;
