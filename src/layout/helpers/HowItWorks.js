import Heading from "../../components/heading/Heading";
import style from "./Hiw.module.css";

import { useDispatch, useSelector } from "react-redux";

const HowItWorks = () => {
  const { lng } = useSelector((state) => state.global);

  const hiw = [
    {
      icon: "icon1.png",
      titleeng: "Choose your pet photo ",
      titlealb: "Zgjedhni fotografinë ",
      titledeu: "Wählen Sie das Foto Ihres Haustiers",
      alb: "Ngarkoni një foto të kafshës tuaj me porosinë tuaj. Ne pranojmë 98% të të gjitha fotove! Ekipi ynë do të lidhet gjithmonë nëse fotoja juaj nuk është e saktë.",
      eng: "Upload a photo of your pet with your order. We accept 98% of all photos! Our team will always reach out if your photo isn't right.",
      deu: "Laden Sie ein Foto Ihres Haustieres mit Ihrer Bestellung hoch. Wir akzeptieren 98% aller Fotos! Unser Team wird sich immer melden, wenn Ihr Foto nicht passt."
    },
    {
      icon: "icon2.png",
      titleeng: "Customize & make it your own  ",
      titlealb: "Personalizoni dhe bëjeni të tua",
      titledeu: "Individualisieren und gestalten Sie es nach Ihrem Geschmack",
      eng: "Add your pet's name, choose a background color, customize the style, and select a frame & size.",
      alb: "Shtoni emrin e kafshës tuaj, zgjidhni një ngjyrë sfondi, personalizoni stilin dhe zgjidhni një ramë & madhësi",
      deu: "Fügen Sie den Namen Ihres Haustieres hinzu, wählen Sie eine Hintergrundfarbe, passen Sie den Stil an und wählen Sie einen Rahmen und die Größe aus."
    },
    {
      icon: "icon3.png",
      titleeng: "Wait for your order",
      titlealb: "Prisni porosinë tuaj",
      titledeu: "Warten Sie auf Ihre Bestellung",
      eng: "Once you submit your order, our artists get to work on digitally-illustrating your portrait.",
      alb: "Pasi të paraqisni porosinë tuaj, artistët tanë fillojnë punën në ilustrimin digjital të portretit tuaj",
      deu: "Sobald Sie Ihre Bestellung abschicken, beginnen unsere Künstler mit der digitalen Illustration Ihres Porträts."
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
              <h3>{i[`title${lng}`]}</h3>
              <p>{i[lng]} </p>
            </div>
          </div>;
        })}
      </div>
      <div className={style.imageWrapper}>
        <img src="../images/general/first.webp" alt="ger" className="w-100" loading="lazy" />
      </div>
    </div>
  );
};

export default HowItWorks;
