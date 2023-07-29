import { useLocation } from "react-router";
import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import RouteConfig from "./router";
import MainModal from "./components/modal/MainModal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setCountry } from "./helpers/redux/slice";
import Loader from "./components/loader/Loader";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { country } = useSelector((state) => state.global);



  const showComponent = () => {
    if (location.pathname === "/payment/failed") return false;
    if (location.pathname === "/payment/success") return false;
    if (country.length === 0) return true;
    else return false;
  };

  useEffect(() => {
    let isCountrySelected = localStorage.getItem("country");
    if (isCountrySelected) {
      console.log("isCountrySelected", isCountrySelected);
      dispatch(setCountry(isCountrySelected));
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);


  
  useEffect(() => {
    if(location.pathname !== "/order")  setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [location]);

  return (
    <>
      {!loading ? (
        <>
          <Header />
          <RouteConfig />
          <Footer />
          {showComponent() && <MainModal />}
          
        </>
      ) : (
        <Loader />

      )}
    </>
  );
}

export default App;
