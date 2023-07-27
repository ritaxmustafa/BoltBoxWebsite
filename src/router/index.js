import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import CreateOrder from "../pages/order/CreateOrder";
import Checkout from "../pages/checkout/Checkout";
import Home from "../pages/home/Home";
import Demo from "../pages/demo/Demo";
import PaymentMessage from "../pages/payment/PaymentMessage";
import ComingSoon from "../pages/default/ComingSoon";
import Privacy from "../pages/privacy/Privacy";
import Terms from "../pages/privacy/Terms";
import Refund from "../pages/privacy/Refund";
import Collection from "../pages/peekInside/peekInside";
import OurStory from "../pages/story/story";
import Contact from "../pages/contact/contact";

function RouteConfig() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      {/* <Route path="/" element={<ComingSoon />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/order" element={<CreateOrder />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/payment/:type" element={<PaymentMessage />} />
      <Route path="/demo" element={<Demo />} />
      <Route path="/policy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/refund" element={<Refund />} />
      <Route path="/*" element={<Home />} />
      <Route path="/theme" element={<Collection />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/OurStory" element={<OurStory/>} />
    </Routes>
  );
}

export default RouteConfig;
