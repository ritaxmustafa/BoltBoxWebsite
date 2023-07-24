import { Link } from "react-router-dom";
import style from "./Banner.module.css";

const MainBanner = () => {
  return (
    <div className={style.banner}>
      <div className="container ">
        <div className="grid2">
          <div className={style.bannerText}>
            <h1>Creating art that speaks to the soul of every pet lover</h1>
            <p>
              Bring your vision to life. Select a design and upload your photo
              to create a custom masterpiece.
              Bring your vision to life. Select a design and upload your photo
              to create a custom masterpiece.
            </p>
            <div className={style.bannerButton}>
              <Link to="" className="btn">Paint My Pet</Link>
              <Link to="" className="btnLight">Give a Gift</Link>
            </div>
          </div>
          <div className={style.bannerImage}>
            <img src="../images/general/Banneri.webp" alt="banner"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
