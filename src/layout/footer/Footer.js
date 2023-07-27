import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className="container">
        <div className="grid12">
          <div>
            <img src="../images/logo.svg" alt="logo" width={150} />
            <h1>We challenge core assumptions.</h1>
            <p>info@bolx-box.com</p>
          </div>
          <div className="grid4">
            <div className={style.footerSection}>
              <h1>ABOUT BOLT</h1>
              <Link to="/OurStory" onClick={() => animateScroll.scrollToTop()}>Our Story</Link>
              <Link  to="/contact-us"  onClick={() => animateScroll.scrollToTop()}> Contact Us </Link>
              <Link to="/faq" onClick={() => animateScroll.scrollToTop()}>FAQs</Link>
              <Link to="/image-guidelines" onClick={() => animateScroll.scrollToTop()}>  Photo Guide</Link>
            </div>
            <div className={style.footerSection}>
              <h1>OUR PRODUCTS</h1>
              <Link to="/OurStory" onClick={() => animateScroll.scrollToTop()}>Privacy Policy</Link>
              <Link  to="/contact-us"  onClick={() => animateScroll.scrollToTop()}> Contact Us </Link>
              <Link to="/faq" onClick={() => animateScroll.scrollToTop()}>FAQs</Link>
              <Link to="/image-guidelines" onClick={() => animateScroll.scrollToTop()}>  Photo Guide</Link>
            </div>
            <div className={style.footerSection}>
              <h1>OUR PRODUCTS</h1>
              <Link to="/policy" >Privacy Policy</Link>
               <Link to="/terms">Terms of Service</Link>
               <Link to="/refund" >Refund Policy</Link>
            </div>
            <div className={style.footerSection}>
              <h1>OUR PRODUCTS</h1>
              <Link to="/OurStory" onClick={() => animateScroll.scrollToTop()}>Privacy Policy</Link>
              <Link  to="/contact-us"  onClick={() => animateScroll.scrollToTop()}> Contact Us </Link>
              <Link to="/faq" onClick={() => animateScroll.scrollToTop()}>FAQs</Link>
              <Link to="/image-guidelines" onClick={() => animateScroll.scrollToTop()}>  Photo Guide</Link>
            </div>
          </div>
        </div>
        <div>
          <p>Payment</p>
          <img src="../images/paysera.svg" alt="logo" width={150} />

        </div>
      </div>
    </div>
  );
};

export default Footer;
