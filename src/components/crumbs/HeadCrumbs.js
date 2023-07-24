
import { Link } from "react-router-dom";
import style from "./HeadCrumbs.module.css";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const HeadCrumbs = (props) => {
  return (
    <div className={style.crumbs}>
      <Link to="/">Home</Link>
      <MdOutlineKeyboardDoubleArrowRight/>
      <Link to={props.link}>{props.title}</Link>
    </div>
  );
};

export default HeadCrumbs;
