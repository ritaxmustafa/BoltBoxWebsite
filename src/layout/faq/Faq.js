import React, { useState, useRef, useEffect } from "react";
import Heading from "../../components/heading/Heading";
import style from "./Faq.module.css";
import { useSelector } from "react-redux";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const answerRefs = useRef([]);
  const { lng } = useSelector((state) => state.global);

  const handleQuestionClick = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null); // Close the currently open question
    } else {
      setActiveIndex(index); // Open the clicked question
    }
  };

  const questions = [
    {
      id: 1,
      questioneng: "Can I have more than one pet in the portrait?",
      questionalb: "A mund të kem më shumë se një kafshë në portret?",
      questiondeu: "Kann ich mehr als ein Haustier im Porträt haben?",

      answereng:
        "In our portrait offerings, you have the wonderful option of including up to 3 pets.",
      answeralb:
        "Në ofertat tona të portretit, keni mundësinë e shkëlqyer të përfshini deri në 3 kafshë.",
      answerdeu:
        "In unseren Porträt-Angeboten haben Sie die wunderbare Möglichkeit, bis zu 3 Haustiere einzuschließen.",
    },
    {
      id: 2,
      questioneng: "Which types of pet can you illustrate?",
      questionalb: "Cilat lloje kafshësh mund të ilustroheni?",
      questiondeu: "Welche Arten von Haustieren können Sie illustrieren?",

      answereng:
        "Absolutely! We take pride in crafting portraits for a wide array of unique pets worldwide. Whether you have adorable bunnies or pet birds, we've got you covered. If it's an animal, we'll create a portrait for it! Please be aware that currently, we do not create portraits of humans.",
      answeralb:
        "Absolutisht! Ne krenohemi që krijojmë portrete për një gamë të gjerë të kafshëve unikë në të gjithë botën. Përkatësisht, qoftë që keni qëpuca të adorueshme ose zogj shtëpie, ne ju kemi mbuluar. Nëse është një kafshë, ne do të krijojmë një portret për të! Ju lutemi, mbani parasysh që aktualisht, ne nuk krijojmë portrete të njerëzve.",
      answerdeu:
        "Absolut! Wir sind stolz darauf, Porträts für eine Vielzahl von einzigartigen Haustieren weltweit zu gestalten. Ob niedliche Kaninchen oder Haustiervögel - wir haben Sie abgedeckt. Wenn es sich um ein Tier handelt, werden wir ein Porträt dafür erstellen! Bitte beachten Sie, dass wir derzeit keine Porträts von Menschen erstellen.",
    },
    {
      id: 3,
      questioneng: "What makes a great photo?",
      questionalb: "Çfarë e bën një foto të shkëlqyer?",
      questiondeu: "Was macht ein großartiges Foto aus?",
      answereng:
        "1.) Get ready for a close-up! Ensure your pet's photo is taken in a well-lit area, preferably without a filter and using natural lighting. Capture the shot from the front, including the ears, head, neck, and chest to get a perfect crop of your pet's face. Avoid overhead, heavily filtered, or blurry pictures. Please refer to our Image Guidelines for more details, as we generally cannot illustrate photos of pets lying down.",
      answeralb:
        "1.) Përgatituni për një plan të qartë! Sigurohuni që fotoja e kafshës tuaj të merret në një zonë me ndriçim të mirë, idealisht pa përdorur filtrat dhe duke përdorur ndriçim natyral. Kapeni foto nga pamja e përpara, duke përfshirë veshkat, kokën, qafën dhe gjoksin për të marrë një përpunim të përsosur të fytyrës së kafshës tuaj. Shmangni fotografitë nga lart, me filtrat e shumtuar, ose të zbrazura. Ju lutemi, referohuni te Udhëzimet tona për Fotografi për më shumë detaje, pasi përgjithësisht nuk mund të ilustrojmë foto të kafshëve në pozicione të ulura.",
      answerdeu:
        "1.) Machen Sie sich bereit für eine Nahaufnahme! Stellen Sie sicher, dass das Foto Ihres Haustieres in einem gut beleuchteten Bereich aufgenommen wird, vorzugsweise ohne Filter und mit natürlichem Licht. Erfassen Sie das Bild von vorne, einschließlich der Ohren, des Kopfes, des Halses und der Brust, um einen perfekten Schnitt des Gesichts Ihres Haustieres zu erhalten. Vermeiden Sie Überkopffotos, stark gefilterte oder verschwommene Bilder. Bitte beachten Sie unsere Bildrichtlinien für weitere Details, da wir in der Regel keine Fotos von Haustieren zeigen können, die liegen.",
    },
    {
      id: 4,
      questioneng:
        "If you find the need to make changes to your order, what should you do?",
      questionalb:
        "Nëse keni nevojë të bëni ndryshime në porosinë tuaj, çfarë duhet të bëni?",
      questiondeu:
        "Wenn Sie Änderungen an Ihrer Bestellung vornehmen müssen, was sollten Sie tun?",

      answereng:
        "Absolutely, we're here to assist you with any changes to your pet portrait order. To ensure we can make the necessary adjustments, kindly contact info@bolt-box.com within 30 minutes of placing your order. Please be aware that after 30 minutes, some changes, including address updates, may no longer be possible. It's essential to note that in certain instances, making alterations to orders might lead to shipping delays.",
      answeralb:
        "Absolutisht, jemi këtu për t'ju ndihmuar me çdo ndryshim në porosinë tuaj të portretit të kafshës. Për të siguruar që mund të bëjmë ndryshimet e nevojshme, ju lutemi të kontaktoni info@bolt-box.com brenda 30 minutave pas vendosjes së porosisë tuaj. Ju lutemi, kini parasysh se pas 30 minutash, disa ndryshime, përfshirë azhurnime të adresës, mund të mos jenë më të mundshme. Është e rëndësishme të theksohet se në disa raste, bërja e ndryshimeve në porosi mund të shkaktojë vonime të transportit.",
      answerdeu:
        "Selbstverständlich stehen wir Ihnen für Änderungen an Ihrer Haustier-Porträt-Bestellung zur Verfügung. Um sicherzustellen, dass wir die notwendigen Anpassungen vornehmen können, wenden Sie sich bitte innerhalb von 30 Minuten nach Ihrer Bestellung an info@bolt-box.com. Bitte beachten Sie, dass nach 30 Minuten einige Änderungen, einschließlich Adressaktualisierungen, möglicherweise nicht mehr möglich sind. Es ist wichtig zu beachten, dass in bestimmten Fällen Änderungen an Bestellungen zu Versandverzögerungen führen können.",
    },
    {
      id: 5,
      questioneng:
        "Are you able to preview your portrait before it is shipped to you?",
      questionalb:
        "A jeni në gjendje të shikoni paraprakisht portretin tuaj para se të dërgohet te ju?",
      questiondeu: "Können Sie Ihr Porträt vor dem Versand anzeigen?",

      answereng:
        "To expedite the delivery process, we do not provide artwork previews or proofs.However, if the photo you provided isn't suitable for the best portrait, we'll get in touch with you to request a new one. Please remember to review our Image Guidelines to ensure the ideal result.",
      answeralb:
        "Megjithatë, nëse fotoja që keni dhënë nuk është e përshtatshme për portretin më të mirë, do të lidhemi me ju për të kërkuar një foto të re. Ju lutemi, kujtoni të shqyrtoni Udhëzimet tona për Fotografi për të siguruar rezultatin ideal",
      answerdeu:
        "Um den Lieferprozess zu beschleunigen, bieten wir keine Voransichten oder Probedrucke von Kunstwerken an. Wenn jedoch das von Ihnen zur Verfügung gestellte Foto nicht für das beste Porträt geeignet ist, werden wir uns mit Ihnen in Verbindung setzen, um ein neues Foto anzufordern. Bitte denken Sie daran, unsere Bildrichtlinien zu überprüfen, um das optimale Ergebnis zu gewährleisten.",
    },
  ];
  useEffect(() => {
    if (activeIndex !== null) {
      // Calculate the height of the answer section when it's opened
      const answerHeight = answerRefs.current[activeIndex]?.scrollHeight;
      answerRefs.current[activeIndex].style.maxHeight = `${answerHeight}px`;
    }
  }, [activeIndex]);

  return (
    <div className={style.faqBck}>
      <Heading text={"FAQs"} customStyle={"main"} />
      {questions.map((q, index) => (
        <div
          key={q.id}
          className={`${style.faqItem} ${
            index === activeIndex ? style.active : ""
          }`}
        >
          <div
            className={style.question}
            onClick={() => handleQuestionClick(index)}
          >
            <div className={style.questionText}>{q[`question${lng}`]}</div>
            <span
              className={`${style.arrow} ${
                index === activeIndex ? style.arrowUp : ""
              }`}
            >
              {index === activeIndex ? "▼" : "▲"}
            </span>
          </div>
          <div
            className={`${style.answer} ${index === activeIndex ? "open" : ""}`}
            ref={(element) => (answerRefs.current[index] = element)}
            style={{
              maxHeight:
                index === activeIndex
                  ? `${answerRefs.current[index]?.scrollHeight}px`
                  : "0",
            }}
          >
            <div className={style.answerText}>{q[`answer${lng}`]}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
