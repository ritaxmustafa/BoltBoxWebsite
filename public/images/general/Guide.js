import React from "react";
import SubTitle from "../Components/Layout/subTitle";

const Guide = () => {
  const guide = [
    {
      images: "/images/kam.jpg",
      title: "GOOD",
      icon: "/images/tick.png",
      bad1: " Pet facing camera at eye level",
      bad2: "Great lighting",
      bad3: "Face & neck are clearly visible",
    },
    {
      images: "/images/kam2.jpg",
      title: "BAD",
      icon: "/images/cancel.png",
      bad1: "Angled face & not at eye level",
      bad2: "Low lighting & heavy shadows",
      bad3: " Slightly blurry",
    },
    {
      images: "/images/kam3.jpg",
      title: "BAD",
      bad1: "Pet laying down",
      icon: "/images/cancel.png",
      bad2: " Head & neck not completely visible",
      bad3: "Head & neck not completely visible",
    },
  ];
  return (
    <div className="container guide">
      <SubTitle text="Pet Portraits Photo Guide" class="pt-20" />
      <p className="pt-20">
        The quality of your artwork greatly relies on the quality of your
        reference photo. Ensure that your pet is directly facing the camera at
        eye level, under favorable lighting conditions, with a clear view of the
        face and neck.
      </p>

      <div className="guide-display pt-50 pb-50">
        {guide.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.images} alt="guide" className="w-100" />
              <img src={item.icon} alt="icon" className="guide-tick" />
              <h3>{item.title}</h3>
              <ul>
                <li>{item.bad1}</li>
                <li>{item.bad2}</li>
                <li>{item.bad3}</li>
              </ul>
            </div>
          );
        })}
      </div>
      <SubTitle text="Still not sure about your photo?" />
      <p className="ptb-20">
        Send it to info@bolt-box.com and I'll take a look.
      </p>
    </div>
  );
};

export default Guide;
