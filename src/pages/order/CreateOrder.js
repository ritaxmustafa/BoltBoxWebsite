import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Order.module.css";
import { client } from "../../helpers/config/api";
import Loader from "../../components/loader/Loader";
import { setOrderInfo } from "../../helpers/redux/slice";
import SelectModel from "../../components/order/SelectModel";
import ProductInfoModel from "../../components/order/ProductInfoModel";
import { Link } from "react-router-dom";
import CheckoutModal from "../../components/checkout/CheckoutModal";

const CreateOrder = () => {
  const dispatch = useDispatch();
  const { order } = useSelector((state) => state.global);
  const [pageProps, setPageProps] = useState({
    stepOptions: false,
    currentStep: 1,
    loading: true,
    showChekout: true,
  });

  const updatePageprops = (data) => {
    //Update state-in pa i fshi vlerat e tjera ekzistuese
    setPageProps((prevState) => ({
      ...prevState,
      ...data,
    }));
  };

  useEffect(() => {
    //Get steps
    client.get("assets").then((response) => {
      updatePageprops({ stepOptions: response.data, loading: false });
    });
  }, []);

  const updateOrderData = (assets) => {
    dispatch(setOrderInfo(assets));

    //Update Page and Next Step
    if (pageProps.currentStep < Object.keys(pageProps.stepOptions).length) {
      updatePageprops({ loading: true });

      setTimeout(function () {
        updateStep(true);
      }, 1000);
    } else {
      updatePageprops({ showChekout: true });
    }
  };

  const updateStep = (isNext) => {
    if (isNext)
      updatePageprops({
        currentStep: pageProps.currentStep + 1,
        loading: false,
      });
    else
      updatePageprops({
        currentStep: pageProps.currentStep - 1,
        loading: false,
      });
  };

  return (
    <div className={`container ${style.orderWrapper}`}>
      {!pageProps.loading ? (
        <>
              {/* Stepi ku pyetet per no. e kafsheve */}
              {pageProps.currentStep === 1 || !order?.orderInfo?.objectNo ? (
                <SelectModel
                  data={pageProps.stepOptions[pageProps.currentStep]}
                  step={pageProps.currentStep}
                  updateOrderData={updateOrderData}
                  updateStep={updateStep}
                ></SelectModel>
              ) : (
                <div>
                  <div className={style.productInfoModel}>
                    <div>
                      {order?.orderInfo?.["objectNo"]?.icon &&
                      order?.orderInfo?.["avatar"]?.icon ? (
                        <img
                          src={`./images/theme/${
                            order?.orderInfo?.["objectNo"]?.id +
                            "" +
                            order?.orderInfo?.["avatar"]?.id
                          }.png`}
                          alt="Portait"
                        />
                      ) : (
                        <img
                          src={`./images/theme/${order?.orderInfo?.["objectNo"]?.icon}`}
                          alt="Portait"
                        />
                      )}
                    </div>
                    <ProductInfoModel
                      data={pageProps.stepOptions}
                      step={pageProps.currentStep}
                      updateOrderData={updateOrderData}
                      updateStep={updateStep}
                    />
                  </div>
                </div>
              )}
             {pageProps.showChekout && <CheckoutModal/> }
          </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default CreateOrder;
