import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { label } from "../../helpers/language";
import style from "./OrdersComponent.module.css";

function SelectModel(props) {
  const { order, lng } = useSelector((state) => state.global);
  return (
    <div className={style.selectModel}>
      <h1>{label[lng][props.data[0].type]}</h1>
      <p>{label[lng][props.data[0].type+'desc']}</p>
      <div className={style.selectImageWrapper}>
        {props.data.map((i, j) => {
          return (
            <div
              key={j}
              className={` ${ order?.orderInfo?.[i.type]?.id === i.id && "active" }`}
              onClick={() => props.updateOrderData(i)}
            >
              <img src={`/images/theme/${i.icon}`}  alt="order creator" />
            </div>
          );
        })}
      </div> 
    </div>
  );
}

export default SelectModel;
