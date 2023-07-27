import React from "react";
import style from "./contact.module.css";
import { Link } from "react-router-dom";

const Contact = () => {
    return (
         <>
         <div className={style.contact}>
            <img src="../images/general/paintphone.png" className="w-100" alt="contact" loading="lazy" />
            <div className="container">
                <h1>Do you have a question?</h1> 
                <p>Our joyful team is here for you and your furry companion!</p>
                <div className={style.contactForm}>
            <form className="w49">
                <label htmlFor="email">Your email address</label>
                <input type="email" name="email" id="email" />

                <label htmlFor="Subject">Subject</label>
                <input type="text" name="Subject" id="Subject" />
                <label htmlFor="description">description</label>
                <textarea id="description" style={{maxWidth:"100%",resize:"none",minHeight:"200px"}}></textarea>
            </form>
            <div className="w49">
                 <div className={style.contactFaq}>
                    <label htmlFor="question">Look at our Questions</label>
                 <Link to="/faq" id="question">Find an answer</Link>
                 </div>
            </div>
         </div>
            </div>
        </div>

         </>
    )
}

export default Contact;