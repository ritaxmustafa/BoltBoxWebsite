import Hamburger from "hamburger-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";
import style from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RiArrowDropDownFill } from "react-icons/ri";
import { setLanguage } from "../../helpers/redux/slice";
import { label } from "../../helpers/language";
const Header = () => {
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
    <div className={style.header}>
      <div className={`container flex ${style.desktopHeader}`}>
        <Link to="/" className={style.logo}>
          <img src="../images/logo.svg" alt="logo" loading="lazy" />
        </Link>
        <ul>
          <li>
            <Link to="/theme" onClick={() => animateScroll.scrollToTop()}>
              {label[lng].monthlyTheme}{" "}
            </Link>
          </li>
          <li>
            <Link
              to="/order"
              onClick={() => animateScroll.scrollToTop()}
              className="btn"
            >
              {label[lng].orderNow}{" "}
            </Link>
          </li>
          <li className={style.language}>
            <div className={style.languageActive}>
              <img
                src={`../images/icons/${language[lng].img}`}
                alt="language"
              />
              {language[lng].name}
              <RiArrowDropDownFill />
            </div>
            <ul className={style.languageList}>
              {Object.values(language).map((i, index) => {
                return (
                  <li onClick={() => changeLanguage(i.label)}>
                    <img src={`../images/icons/${i.img}`} alt="language" />
                    {i.name}
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </div>
      <div className={`${style.mobileNav} container`}>
        <div className={style.mobileDisplay}>
          <Link to="/" className={style.logo}>
            <img src="../images/logo.svg" alt="logo" loading="lazy" />
          </Link>
          <div className={style.mobileList}>
            <li className={style.language}>
              <div className={style.languageActive}>
                <img
                  src={`../images/icons/${language[lng].img}`}
                  alt="language"
                />
                <RiArrowDropDownFill />
              </div>
              <ul className={style.languageListMob}>
                {Object.values(language).map((i, index) => {
                  return (
                    <li onClick={() => changeLanguage(i.label)}>
                      <img src={`../images/icons/${i.img}`} alt="language" />
                      {i.name}
                    </li>
                  );
                })}
              </ul>
            </li>
            <div className={style.mobileHeaderData}>
              <div className={style.hamburgerMenu}>
                <Hamburger toggled={isOpen} toggle={setOpen} size={23} />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${style.mobileMenuContainer} ${isOpen && style.opened}`}
        >
          <ul className="w-100 ">
            <li>
              <Link
                to="/theme"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Monthly Themes
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
