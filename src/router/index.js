import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import CreateOrder from "../pages/order/CreateOrder";


function RouteConfig() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<CreateOrder />} />
      <Route path="/order" element={<CreateOrder />} />
    </Routes>
  );
}

export default RouteConfig;
