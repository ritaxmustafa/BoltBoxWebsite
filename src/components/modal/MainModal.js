import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { label } from "../../helpers/language";
import style from "./Modal.module.css";
import { useLottie } from "lottie-react";
import location from "../../helpers/lotties/location.json";
import { setCountry } from "../../helpers/redux/slice";
import CountrySelect from "../select/CountrySelect";
import Language from "../language/language";

function MainModal() {
  const dispatch = useDispatch();
  const { order, lng } = useSelector((state) => state.global);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [error, setError] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: location,
  };

  const selectCountry = (data) => {
    setSelectedCountry(data);
  };

  const buttonClick = () => {
    if (selectedCountry) {
      dispatch(setCountry(selectedCountry));
      //Add country to localstorage
      localStorage.setItem("country", JSON.stringify(selectedCountry));

    } else setError(true);
  };
  const { View } = useLottie(defaultOptions);


  return (
    <div className={style.checkoutModal}>
   
      <div className={style.checkoutBody}>
       
      <Language/>
        <div className={style.modalLottie}>
          {View}
        </div>
        <h1>{label[lng].pickLocation}</h1>
        {error && <span className="errorMsg">{label[lng].pickLocation}</span>}
        <div className={style.modalSelect}>
          <CountrySelect selectCountry={selectCountry} />
          <button onClick={buttonClick}>{label[lng].continue}</button>
        </div>
      </div>
    </div>
  );
}

export default MainModal;
