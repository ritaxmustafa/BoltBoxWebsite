import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { Rating } from "react-simple-star-rating";
import { label } from "../../helpers/language";
import { useSelector } from "react-redux";

const Card = ({ data, functionCalled }) => {
  const { order, lng } = useSelector((state) => state.global);

  return (
    <Link to="/order" state = {{step:2}} onClick={()=>functionCalled(data)} className={style.cardWrapper}>

      <div className={style.cardImage}>
        <img src={`/images/theme/${data.icon}`} alt="order creator" />
      </div>
      <div className="flex">
        <p>{label[lng][data.type]}: {data.value}</p>
        <Rating
          size={20}
          initialValue={5}
          readonly={true}
          /* Available Props */
        />
      </div>
      <span>{data.price} &euro;</span>
    </Link>
  );
};

export default Card;
