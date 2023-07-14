import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { label } from "../../helpers/language";
import style from "./CheckoutModal.module.css";
import Lottie from "react-lottie";
import dog from "../../helpers/lotties/dog.json";
import { Link } from "react-router-dom";
import {MdClose} from "react-icons/md";

function CheckoutModal(props) {
  const { order, lng } = useSelector((state) => state.global);

  useEffect(() => {
    //Get steps
    document.body.style.overflow = 'hidden';
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: dog,
  };

  return (
    <div className={style.checkoutModal}>
      <div className={style.checkoutBody}>
        <span className={style.close}><MdClose/></span>
        <div>
          <Lottie options={defaultOptions} />
        </div>
        <h1>{label[lng].checkoutModalTitle}</h1>
        <p>{label[lng].checkoutModalDesc}</p>
        <Link to="" className="btn">Checkout</Link>
      </div>
    </div>
  );
}

export default CheckoutModal;
