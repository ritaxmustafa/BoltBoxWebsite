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
      question: "Can I have more than one pet in the portrait?",
      answer: "In our portrait offerings, you have the wonderful option of including up to 3 pets. ",
    },
    {
      id: 2,
      question: "Which types of pet can you illustrate?",
      answer:
        "Absolutely! We take pride in crafting portraits for a wide array of unique pets worldwide. Whether you have adorable bunnies or pet birds, we've got you covered. If it's an animal, we'll create a portrait for it! Please be aware that currently, we do not create portraits of humans",
    },
    {
      id: 3,
      question: "What makes a great photo?",
      answer:
        "1.) Get ready for a close-up! Ensure your pet's photo is taken in a well-lit area, preferably without a filter and using natural lighting. Capture the shot from the front, including the ears, head, neck, and chest to get a perfect crop of your pet's face. Avoid overhead, heavily filtered, or blurry pictures. Please refer to our Image Guidelines for more details, as we generally cannot illustrate photos of pets lying down.",
    },
 
  
    {
      id: 4,
      question: "If you find the need to make changes to your order, what should you do?",
      answer:
        "Absolutely, we're here to assist you with any changes to your pet portrait order. To ensure we can make the necessary adjustments, kindly contact info@bolt-box.com within 30 minutes of placing your order. Please be aware that after 30 minutes, some changes, including address updates, may no longer be possible. It's essential to note that in certain instances, making alterations to orders might lead to shipping delays.",
    },
    {
      id: 5,
      question: "Are you able to preview your portrait before it is shipped to you?",
      answer:
        "To expedite the delivery process, we do not provide artwork previews or proofs. However, if the photo you provided isn't suitable for the best portrait, we'll get in touch with you to request a new one. Please remember to review our Image Guidelines to ensure the ideal result.",
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
      <Heading text={"FAQs"} customStyle={"main"} />
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
