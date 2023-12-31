import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Order.module.css";
import { client } from "../../helpers/config/api";
import Loader from "../../components/loader/Loader";
import { setOrderInfo } from "../../helpers/redux/slice";
import SelectModel from "../../components/order/SelectModel";
import ProductInfoModel from "../../components/order/ProductInfoModel";
import { useLocation } from "react-router-dom";
import CheckoutModal from "../../components/checkout/CheckoutModal";
import HeadCrumbs from "../../components/crumbs/HeadCrumbs";
import HowItWorks from "../../layout/helpers/HowItWorks";
import Reverse from "../../components/reverse/reverse";
import { label } from "../../helpers/language";
import Slider from "../../components/slider/slider";
import { Circles } from "react-loader-spinner";

const CreateOrder = () => {
  const location = useLocation();
  const propsData = location.state;

  const dispatch = useDispatch();
  const { order, country, lng } = useSelector((state) => state.global);
  const [pageProps, setPageProps] = useState({
    stepOptions: [],
    currentStep: propsData?.step ? propsData.step : 1,
    loading: true,
    showChekout: false,
    loadImage: true,
  });

  const updatePageprops = (data) => {
    //Update state-in pa i fshi vlerat e tjera ekzistuese
    setPageProps((prevState) => ({
      ...prevState,
      ...data,
    }));
  };

  useEffect(() => {

    client.get("assets").then((response) => {
      updatePageprops({ stepOptions: response.data, loading: false });
    });
  }, []);

  const updateOrderData = (assets) => {
    dispatch(setOrderInfo(assets));

    //Update Page and Next Step
    if (pageProps.currentStep < 2) {
      updatePageprops({ loading: true });

      setTimeout(function () {
        updateStep(true);
      }, 1000);
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

  useEffect(() => {
    //Get steps
    updatePageprops({ loadImage: true });

    setTimeout(function () {
      updatePageprops({ loadImage: false });
    }, 1000);
  }, [order.orderInfo]);

  return (
    <>
      <div className={`container ${style.orderWrapper}`}>
        <HeadCrumbs title="Order" link="/order" />
        {!pageProps.loading ? (
          <>
            {/* Stepi ku pyetet per no. e kafsheve */}
            {pageProps.currentStep === 1 || !order?.orderInfo?.objectNo ? (
              <SelectModel
                data={pageProps.stepOptions[1]}
                step={pageProps.currentStep}
                updateOrderData={updateOrderData}
                updateStep={updateStep}
              ></SelectModel>
            ) : (
              <div>
                <div className={style.productInfoModel}>
                  <div>
                    <div className={style.imageWall}>
                      {!pageProps.loadImage ? (
                        <div
                          className={`${style.frame} ${
                            style?.["frame" + order?.orderInfo?.frame?.value]
                          }`}
                        >
                          <div
                            className={`${style.frameWall}  ${
                              order?.orderInfo?.["objectNo"].id == 1 &&
                              style.vertical
                            }`}
                          >
                            {order?.orderInfo?.["objectNo"]?.icon &&
                            order?.orderInfo?.["avatar"]?.icon ? (
                              <img
                                src={`./images/theme/${
                                  order?.orderInfo?.["objectNo"]?.id +
                                  "" +
                                  order?.orderInfo?.["avatar"]?.id
                                }.jpg`}
                                alt="Portait"
                              />
                            ) : (
                              <img
                                src={`./images/theme/${order?.orderInfo?.["objectNo"]?.icon}`}
                                alt="Portait"
                              />
                            )}
                          </div>{" "}
                        </div>
                      ) : (
                        <div>
                          <Circles
                            height="80"
                            width="80"
                            color="#00abd6"
                            ariaLabel="circles-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                          />
                        </div>
                      )}
                    </div>
                    {country?.discount > 0 ? (
                      <h1 className={style.priceTotal}>
                        {label[lng].price}:<span>{order.price} &euro;</span>{" "}
                        {(order.price - 20).toFixed(2)} &euro;
                      </h1>
                    ) : (
                      <h1 className={style.priceTotal}>
                        {label[lng].price}:{order.price} &euro;
                      </h1>
                    )}
                    <div>
                      {country?.discount > 0 && (
                        <p className={style.discountText}>
                          {label[lng].discountTextOrder
                            .replace("{{country?.discount}}", country?.discount)
                            .replace("{country.name}", country.name)}
                        </p>
                      )}
                    </div>
                  </div>
                  <ProductInfoModel
                    data={pageProps.stepOptions}
                    step={pageProps.currentStep}
                    updateOrderData={updateOrderData}
                    updateStep={updateStep}
                    updatePageprops={updatePageprops}
                  />
                </div>
              </div>
            )}
            {pageProps.showChekout && (
              <CheckoutModal
                onClose={() => updatePageprops({ showChekout: false })}
              />
            )}
          </>
        ) : (
          <Loader />
        )}
        <Reverse />
        <HowItWorks />
      </div>
      <Slider />
    </>
  );
};

export default CreateOrder;
