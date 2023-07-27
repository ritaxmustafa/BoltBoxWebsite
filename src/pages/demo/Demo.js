import Heading from "../../components/heading/Heading";
import style from "./Demo.module.css";
import {AiOutlineCheck, AiOutlineClose} from "react-icons/ai";
const Demo = () => {
  const guide = [
    {
      images: "/images/general/kam.jpg",
      title: "good",
      icon: "/images/tick.png",
      bad1: " Pet facing camera at eye level",
      bad2: "Great lighting",
      bad3: "Face & neck are clearly visible",
    },
    {
      images: "/images/general/kam2.jpg",
      title: "bad",
      icon: "/images/cancel.png",
      bad1: "Angled face & not at eye level",
      bad2: "Low lighting & heavy shadows",
      bad3: " Slightly blurry",
    },
    {
      images: "/images/general/kam3.jpg",
      title: "bad",
      bad1: "Pet laying down",
      icon: "/images/cancel.png",
      bad2: " Head & neck not completely visible",
      bad3: "Head & neck not completely visible",
    },
  ];

  return (
    <div className={`container ${style.guide}`}>
      <Heading text={"Pet Portraits Photo Guide"} customStyle={"main"} />
      <p className="pt-20">
        The quality of your artwork greatly relies on the quality of your
        reference photo. Ensure that your pet is directly facing the camera at
        eye level, under favorable lighting conditions, with a clear view of the
        face and neck.
      </p>
      <div className={`grid3 ${style.guideWrapper}`}>
        {guide.map((item,index) => {
          return (
            <div className={style.guideCard} key={index}>
              <div>
                <img src={item.images} alt="guide" className="w-100" />
                <span className={style[item.title]}>{item.title === 'good' ? <AiOutlineCheck/> : <AiOutlineClose/>}</span>
              </div>
              <ul>
                <li>{item.bad1}</li>
                <li>{item.bad2}</li>
                <li>{item.bad3}</li>
              </ul>
            </div>
          );
        })}
      </div>
      <Heading text={"Still not sure about your photo?"} customStyle={"main"} />
      <p className="ptb-20">
        Send it to info@bolt-box.com and I'll take a look.
      </p>
    </div>
  );
};

export default Demo;
