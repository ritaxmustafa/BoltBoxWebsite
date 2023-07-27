import { Link } from "react-router-dom";
import Heading from "../../components/heading/Heading";
import style from "./Products.module.css";
import Card from "../../components/card/Card";
import { client } from "../../helpers/config/api";
import { useEffect, useState } from "react";
import { setOrderInfo } from "../../helpers/redux/slice";
import { useDispatch } from "react-redux";

const Products = () => {
  const [productOptions, setProductOptions] = useState([]);
  const dispatch = useDispatch();


  useEffect(() => {
    //Get steps
    client.get("assets").then((response) => {
      setProductOptions( response.data[1]);
      console.log("response",response.data[2])
    });
  }, []);

  const changeStep = (t) => {
    dispatch(setOrderInfo(t));

  };

  return (
    <div className="container section">
      <Heading text={"BOLT BOX Pet Portraits"} customStyle={"main"} />
      <div className="grid3Custom">
        {productOptions.map((item, j) => {
          return <Card data={item} functionCalled={changeStep} key={j}/>;
        })}
      </div>
    </div>
  );
};

export default Products;
