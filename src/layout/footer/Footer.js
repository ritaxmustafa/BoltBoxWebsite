import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className="container">
        <div className="grid12">
          <div>
            <img src={"/images/boltfooter.svg"} alt="logo" width={150} loading="lazy" />
            <h1 className={style.footerHeader}>We challenge core assumptions.</h1>
            <p>info@bolt-box.com</p>
          </div>
          <div className="grid4">
            <div className={style.footerSection}>
              <h1>ABOUT BOLT</h1>
              <Link to="/OurStory" onClick={() => animateScroll.scrollToTop()}>Our Story</Link>
              <Link  to="/contact-us"  onClick={() => animateScroll.scrollToTop()}> Contact Us </Link>
              <Link to="/faq" onClick={() => animateScroll.scrollToTop()}>FAQs</Link>
              <Link to="/demo" onClick={() => animateScroll.scrollToTop()}>  Photo Guide</Link>
            </div>
           
            <div className={style.footerSection}>
              <h1>Info</h1>
              <Link to="/policy" >Privacy Policy</Link>
               <Link to="/terms">Terms of Service</Link>
               <Link to="/refund" >Refund Policy</Link>
            </div>

            <div className={style.footerSection}>
              <h1>OUR PRODUCTS</h1>
              <Link to="/order" onClick={() => animateScroll.scrollToTop()}>Custom Pet Portraits</Link>
              <Link  to="/theme"  onClick={() => animateScroll.scrollToTop()}>Monthly Theme</Link>
       
            </div>
            <div className={style.footerSection}>
              <h1>Follow Us</h1>
              <a href="/https://www.instagram.com/boltbox_/" onClick={() => animateScroll.scrollToTop()} target="_blank">boltbox_</a>
      
              {/* <Link to="/image-guidelines" onClick={() => animateScroll.scrollToTop()}>  Photo Guide</Link> */}
            </div>
          </div>
        </div>
        <div>
          <p>Payment</p>
          <div className={`  ${style.paymentDisplay}`}>
          <img src={"/images/paysera.svg"} alt="logo" width={120} loading="lazy" />
          <img src={"/images/mastercard.svg"} alt="logo" width={70} loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
