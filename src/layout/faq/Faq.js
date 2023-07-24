import React, { useState, useRef, useEffect } from "react";
import Heading from "../../components/heading/Heading";
import style from "./Faq.module.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const answerRefs = useRef([]);

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
      question: "What makes a good photo?",
      answer:
        "1.) Close up time! Be sure your pets photo is taken in a well lit area. Ideally without a filter and in natural lighting. 2.) Close up and head on, showing as much of the ears, head, neck, and chest as possible. This will allow us to get a good crop of your pets face. 3.) Avoid overhead, overly filtered or blurry photos. We are typically unable to illustrate photos of your pet lying down. Review our Image Guidelines for more information.",
    },
    {
      id: 2,
      question: "Can I have more than one pet in my portrait?",
      answer: "You can install React by using npm or yarn package managers.",
    },
    {
      id: 3,
      question: "What animals do you illustrate?",
      answer:
        "Our portraits, greeting cards, and mugs can have up to 3 pets. All other products are currently limited to one pet.",
    },
    {
      id: 4,
      question: "How do I install React?",
      answer:
        "Yes! We create portraits for unique pets around the world. From cute bunnies to pet birds. Odds are, if its an animal, we will create a portrait for you. Please note: at this time we do not create portraits of humans (no matter how cute you are!).",
    },
    {
      id: 5,
      question: "What if I need to make a change to my order?",
      answer:
        "Yes! We are happy to help with changes to your pet portrait order as long as you reach out to support@westandwillow.com within 30 minutes of your order being placed. After 30 minutes most changes, including address updates, can no longer be made. Please note, in some cases, changes to orders may     result in shipping delays.",
    },
    {
      id: 6,
      question: "Can I preview my portrait before it ships?",
      answer:
        "In an effort to get your order to you as efficiently as possible, we do not offer artwork previews or proofs. But dont worry! If your provided photo won t make the best portrait, we’ll reach out to you for a new one. Be sure to review Image Guidelines here .",
    },
    // Add more questions and answers as needed
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
      <Heading text={"Frequently Asked Questions"} customStyle={"main"} />
      {questions.map((q, index) => (
        <div
          key={q.id}
          className={`${style.faqItem} ${  index === activeIndex ? style.active : ""  }`}
        >
          <div
            className={style.question}
            onClick={() => handleQuestionClick(index)}
          >
            <div className={style.questionText}>{q.question}</div>
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
            <div className={style.answerText}>{q.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
