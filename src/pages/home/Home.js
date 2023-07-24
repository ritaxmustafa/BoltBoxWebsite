import { Link } from "react-router-dom";
import MainBanner from "../../components/banner/MainBanner";
import Products from "../../layout/products/Products";
import style from "./Home.module.css";
import HowItWorks from "../../layout/helpers/HowItWorks";
import FAQ from "../../layout/faq/Faq";
import SocialMedia from "../../layout/socialMedia/SocialMedia";
import CreateOrder from "../order/CreateOrder";
const Home = () => {
  const portrait = [
    {
      image: "../images/general/j9-min.webp",
    },
    {
      image: "../images/general/j8-min.webp",
    },
    {
      image: "../images/general/j7-min.webp",
    },
    {
      image: "../images/general/j6-min.webp",
    },
    {
      image: "../images/general/j5-min.webp",
    },
    {
      image: "../images/general/j4-min.webp",
    },
    {
      image: "../images/general/j3-min.webp",
    },
    {
      image: "../images/general/j2-min.webp",
    },
    {
      image: "../images/general/j1-min.webp",
    },
  ];

  return (
    <>
      <MainBanner />
      <Products />
     <div className="container section">
        <div className="grid12">
          <div
            className={style.homeInfoCard}
            style={{ backgroundImage: "url(./images/general/Background.webp)" }}
          >
            <h1>The portrait your furry friend deserves</h1>
            <p>
              Lights, camera, woof! Give your pup the celebrity treatment they
              deserve with our film-themed portraits. Choose from our range of
              design options to find the paw-fect print for your pup-arazzi.
            </p>
            <Link to="">Paint My Pet</Link>
          </div>
          <div className="grid3">
            {portrait.map((item) => {
              return (
                <Link to="/order" className={style.homeCard}>
                  <img src={item.image} alt="theme" className="w-100" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="container section">
        <HowItWorks />
        <FAQ />
        {/*  <div className="section"> */}
          {/* <SocialMedia /> */}
        {/* </div>*/}
      </div> 
    </>
  );
};

export default Home;
