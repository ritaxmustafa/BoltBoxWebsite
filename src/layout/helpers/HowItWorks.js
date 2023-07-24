import Heading from "../../components/heading/Heading";
import style from "./Hiw.module.css";

const HowItWorks = () => {
  const hiw = [
    {
      icon: "icon1.png",
      title: "Choose your pet photo ",
      desc: "Upload a photo of your pet with your order. We accept 98% of all photos! Our team will always reach out if your photo isn't right.",
    },
    {
      icon: "icon2.png",
      title: "Customize & make it your own  ",
      desc: "Add your pet's name, choose a background color, customize the style, and select a frame & size.",
    },
    {
      icon: "icon3.png",
      title: "Customize & make it your own  ",
      desc: "Once you submit your order, our artists get to work on digitally-illustrating your portrait.",
    },
  ];

  return (
    <div className="grid2">
      <div className={style.contentWrapper}>
        <Heading text={"How BoltBox Works"} customStyle={"main"} />
        {hiw.map((i, j) => {
          return <div className={`flex ${style.hiwContainer}`}>
            <div className={style.iconWrapper}>
              <img src={`./images/general/${i.icon}`} alt="icon" width="80"/>
            </div>
            <div className={style.hiwInfo}>
              <h3>{i.title}</h3>
              <p>{i.desc} </p>
            </div>
          </div>;
        })}
      </div>
      <div className={style.imageWrapper}>
        <img src="../images/general/first.webp" alt="ger" className="w-100" />
      </div>
    </div>
  );
};

export default HowItWorks;
