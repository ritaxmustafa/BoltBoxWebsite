import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Checkout.module.css";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { label } from "../../helpers/language";
import { client } from "../../helpers/config/api";
import Loader from "../../components/loader/Loader";
import { useNavigate } from "react-router";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Link } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";
import CountrySelect from "../../components/select/CountrySelect";
import { setCountry } from "../../helpers/redux/slice";
import qs from "qs";

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { order, lng, details, images, country } = useSelector(
    (state) => state.global
  );
  const [value, setValue] = useState();
  const [loading, setLoading] = useState(true);
  const [openMobileMenu, setMobileMenu] = useState(false);
  const [validationError, setValidationError] = useState("");

  useEffect(() => {
    if (Object.keys(order.orderInfo).length == 0) {
      navigate("/");
    } else setLoading(false);
  }, []);

  let checkoutSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, "min3")
      .max(50, "max50")
      .required("required"),
    email: Yup.string().email("mailError").required("required"),
    address: Yup.string().min(3, "min3").max(50, "max50").required("required"),
    city: Yup.string().min(3, "min3").max(50, "max50").required("required"),
    zip: Yup.number("onlyNumber").required("required"),
    termsAndConditions: Yup.bool().oneOf([true], "agreeConditions"),
  });

  const calculateTotal = () => {
    let price = 0;

    price =
      parseFloat(price) +
      (parseFloat(order.price) + parseFloat(country.shippingPrice));
    price = parseFloat(price) - parseFloat(country.discount);

    return parseFloat(price).toFixed(2);
  };

  const total = useMemo(() => calculateTotal(), [country]);

  const changeCountry = (selectedCountry) => {
    dispatch(setCountry(selectedCountry));
  };

  return (
    <div className={style.checkoutWrapper}>
      <div className={`container `}>
        {!loading ? (
          <div className={`grid2 ${style.checkout}`}>
            <Formik
              className={"column"}
              initialValues={{
                firstName: "",
                email: "",
                address: "",
                city: "",
                zip: "",
                termsAndConditions: false,
              }}
              validationSchema={checkoutSchema}
              onSubmit={(values, { resetForm }) => {
                if (Object.keys(order.orderInfo).length == 0) {
                  navigate("/");
                } else {
                  setLoading(false);


                  let orderInfo = values;
                  orderInfo.params = order.orderInfo;
                  orderInfo.country = country;
                  orderInfo.images = order.images;
                  orderInfo.details = order.details;

                  
                  console.log("order", orderInfo);

                  client
                    .post("/checkout", orderInfo)
                    .then((response) => {
                      console.log("RESPONSE", response);
                      if (response.data.hasError) {
                        setValidationError(response.data.msg);
                        setLoading(false);
                      } else {
                        window.open(response.data.url, "_self");
                      }
                    });
                }
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  {validationError.length > 0 && (
                    <p className="errorMsg">{label[lng][validationError]}</p>
                  )}
                  <div className="sectionWrapper">
                    <p>Personal Information</p>
                    <div className="grid2">
                      <div className="inputWrapper">
                        <label>First Name</label>
                        <Field
                          name="firstName"
                          placeholder="Emri dhe Mbiemri"
                          autoComplete="off"
                          className={errors.firstName && style.inputError}
                        />
                        {errors.firstName && touched.firstName && (
                          <p className="errorTxt">
                            {label[lng][errors.firstName]}
                          </p>
                        )}
                      </div>
                      <div className="inputWrapper">
                        <label>Email</label>
                        <Field
                          name="email"
                          placeholder="info@bolt-box.com"
                          autoComplete="off"
                          className={errors.email && style.inputError}
                        />
                        {errors.email && touched.email && (
                          <p className="errorTxt">{label[lng][errors.email]}</p>
                        )}
                      </div>
                    </div>
                    <div className="grid1">
                      <div className="inputWrapper">
                        <label>Phone Number (optional)</label>
                        <PhoneInput
                          placeholder="Enter phone number"
                          value={value}
                          onChange={setValue}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={`${style.lastSection} sectionWrapper`}>
                    <p>Shipping address</p>
                    <div className="grid1">
                      <div className="inputWrapper">
                        <label>Country</label>
                        <CountrySelect selectCountry={changeCountry} />
                      </div>
                    </div>
                    <div className="grid2">
                      <div className="inputWrapper">
                        <label>City</label>
                        <Field
                          name="city"
                          placeholder="Prishtina"
                          autoComplete="off"
                          className={errors.city && style.inputError}
                        />
                        {errors.city && touched.city && (
                          <p className="errorTxt">{label[lng][errors.city]}</p>
                        )}
                      </div>
                      <div className="inputWrapper">
                        <label>Postal Code</label>
                        <Field
                          name="zip"
                          placeholder="10000"
                          autoComplete="off"
                          className={errors.zip && style.inputError}
                        />
                        {errors.zip && touched.zip && (
                          <p className="errorTxt">{label[lng][errors.zip]}</p>
                        )}
                      </div>
                    </div>
                    <div className="grid1">
                      <div className="inputWrapper">
                        <label>Address</label>
                        <Field
                          name="address"
                          placeholder="Bregu i Diellit, H5"
                          autoComplete="off"
                          className={errors.address && style.inputError}
                        />
                        {errors.address && touched.address && (
                          <p className="errorTxt">
                            {label[lng][errors.address]}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="grid1">
                    <label>
                      <Field type="checkbox" name="termsAndConditions" />
                      Une pajtohem me kushtet e privatesise
                    </label>
                    {errors.termsAndConditions && (
                      <p className="errorTxt">
                        {label[lng][errors.termsAndConditions]}
                      </p>
                    )}
                  </div>
                  <div>
                    {country.discount > 0 && (
                      <p className={style.discountText}>
                        You get a {country.discount}&euro; discount if your
                        shipping country is {country.name}. The next country
                        coupon is on the way, so get your Kosovo package before
                        it's too late!
                      </p>
                    )}
                  </div>
                  <button type="submit" className="btn">
                    Blej
                  </button>
                </Form>
              )}
            </Formik>
            <div>
              <div className={style.checkoutSummaryMobile}>
                <p onClick={() => setMobileMenu(!openMobileMenu)}>
                  Shiko detajet e porosisë{" "}
                  {openMobileMenu ? (
                    <MdKeyboardArrowDown />
                  ) : (
                    <MdKeyboardArrowUp />
                  )}
                </p>
              </div>
              <div
                className={`${style.checkoutSummary} ${style.mobileSummary}`}
                style={{ display: openMobileMenu && "block" }}
              >
                <div className={style.checkoutSummerProduct}>
                  <div>
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

                    <div className="flex w100">
                      <div className="flex">
                        {Object.values(order.orderInfo).map((t, k) => {
                          return <p>{t.description}/</p>;
                        })}
                      </div>
                      <span className={style.price}>{order.price} &euro;</span>
                    </div>
                  </div>
                  <Link to="/order">
                    Ndrysho
                    <FiEdit2 />
                  </Link>
                </div>
                <div className={`grid21 ${style.borderBottom}`}>
                  <div className="inputWrapper">
                    <label>Coupon Code</label>
                    <input type="text" placeholder="Coupon" />
                  </div>
                  <button className="btnLight">Apply</button>
                </div>
                <div className="flex">
                  <p>Subtotal</p>
                  <span>{order.price} &euro;</span>
                </div>
                <div className="flex">
                  <p>Shipping</p>
                  <span>
                    {parseFloat(country.shippingPrice).toFixed(2)} &euro;
                  </span>
                </div>
                {country.discount > 0 && (
                  <div className="flex">
                    <p>Discount</p>
                    <span>
                      -{parseFloat(country.discount).toFixed(2)} &euro;
                    </span>
                  </div>
                )}
                <div className={`flex ${style.totalPrice}`}>
                  <p>Total</p>
                  <span>{total} &euro;</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Checkout;
