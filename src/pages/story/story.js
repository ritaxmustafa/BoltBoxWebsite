import React from "react";


import style from "./story.module.css";

const OurStory = () => {
  const image = [
    {
      image:"../images/general/img1.png"
    },
    {
      image:"../images/general/img2.png"
    },
    {
      image:"../images/general/paint.png"
    },
  ]
    return (
      <>
        <div className={style.ourStory}>
        <img src="../images/general/colorful.png" className="w-100" alt="banner"/> 
            <div className="container pt-50">
             <h1>At BOLT, our mission is to bring as much joy to dogs as they bring to us. We believe that dogs and humans are truly better when we're together." </h1>
          
            <div className={style.storyDisplay}>
              {image.map((item) => {
           
                return (
                  <img src={item.image} alt="error"/>
                )
              })}
              
            </div>
              <div className={style.boltLogo}>
              <img src="../images/logo.svg" alt="bolt" />
              <p className="ptb-20">We strongly believe that life is enhanced by dogs. Through our contributions to communities and by offering resources and education, we strive to empower dogs to flourish in the places they call home. At BOLT, we are passionate about creating engaging and welcoming spaces for dogs, and we are committed to continuously improving our community services to prevent surrender and promote responsible sourcing and rehoming. Our goal is to make the world a better place for dogs and their owners.</p>
              </div>
            </div>
       </div>
 
      </>
    )


}

export default OurStory