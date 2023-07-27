import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { label } from "../../helpers/language";
import style from "./CheckoutModal.module.css";
import { useLottie } from "lottie-react";
import dog from "../../helpers/lotties/dog.json";
import { Link, useNavigate } from "react-router-dom";
import {MdClose} from "react-icons/md";

function CheckoutModal(props) {
  const navigate = useNavigate();
  const { order, lng } = useSelector((state) => state.global);
  const [seconds, setSeconds] = useState(3);


  useEffect(() => {
    //Get steps
    // document.body.style.overflow = 'hidden';

    const close = (e) => {
      //With keyboard esc close modal
      if(e.keyCode === 27){
        document.body.style.overflow = 'visible';
        props.onClose();
      }
    }
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);

  }, []);



  useEffect(() => {
    setTimeout(() => {
      if(seconds == 1) {
        navigate("/checkout");
    }else  setSeconds(seconds-1);
    }, 1000);
  });


  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: dog,
  };

  const { View } = useLottie(defaultOptions);


  return (
    <div className={style.checkoutModal} onClick={()=>props.onClose()}>
      <div className={style.checkoutBody} onClick={(e)=>e.stopPropagation()}>
        <span className={style.close} onClick={()=>{document.body.style.overflow = 'visible';props.onClose()}}><MdClose/></span>
        <div>
          {View}
        </div>
        <h1>{label[lng].checkoutModalTitle}</h1>
        <p>{label[lng].checkoutModalDesc.replace("{{time}}", seconds)}</p>
        {/* <Link to="/checkout" className="btn" onClick={()=>document.body.style.overflow = 'visible'}>Checkout</Link> */}
      </div>
    </div>
  );
}

export default CheckoutModal;
