import React from "react";
import style from "./language.module.css";
import { setLanguage } from "../../helpers/redux/slice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { RiArrowDropDownFill } from "react-icons/ri";
// import { setLanguage } from "../../helpers/redux/slice";
// import { label } from "../../helpers/language";
const Language = () => {
  const dispatch = useDispatch();
  const [isOpen, setOpen] = useState(false);
  const { lng } = useSelector((state) => state.global);

  const language = {
    eng: { name: "English", img: "eng.png", label: "eng" },
    alb: { name: "Shqip", img: "alb.png", label: "alb" },
    deu: { name: "Deutsch", img: "ger.png", label: "deu" },
  };

  const changeLanguage = (selectedLanguage) => {
    dispatch(setLanguage(selectedLanguage));
  };

  return (
    <>
      <div className={style.language}>
        <div className={style.languageActive}>
          <img src={`/images/icons/${language[lng].img}`} alt="language" />
          {language[lng].name}
          <RiArrowDropDownFill />
        </div>
        <ul className={style.languageList}>
          {Object.values(language).map((i, index) => {
            return (
              <li onClick={() => changeLanguage(i.label)} key={index}>
                <img src={`/images/icons/${i.img}`} alt="language" />
                {i.name}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Language;
