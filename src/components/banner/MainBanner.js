import { Link } from "react-router-dom";
import style from "./Banner.module.css";
import { label } from "../../helpers/language";
import { useDispatch, useSelector } from "react-redux";

const MainBanner = () => {
  const dispatch = useDispatch();
  const { lng } = useSelector((state) => state.global);


  return (
    <div className={style.banner}>
      <div className="container ">
        <div className="grid2">
          <div className={style.bannerText}>
            <h1>{label[lng].bannerTitle}  </h1>
            <p>{label[lng].bannerDesc} </p>
            <div className={style.bannerButton}>
              <Link to="/order" className="btn">{label[lng].paintPet}</Link>
              {/* <Link to="" className="btnLight">{label[lng].gift}</Link> */}
            </div>
          </div>
          <div className={style.bannerImage}>
            <img src={"/images/general/Banneri.webp"} alt="banner" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
