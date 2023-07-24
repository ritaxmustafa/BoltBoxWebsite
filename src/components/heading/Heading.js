
import style from "./Heading.module.css";

const Heading = (props) => {
  return (
    <p className={style[props.customStyle]}>{props.text}</p>
  );
};

export default Heading;
