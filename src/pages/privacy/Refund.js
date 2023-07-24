import React from "react";
import Heading from "../../components/heading/Heading";

const Refund = () => {
  return (
    <div className="container">
      <Heading text={"Refund Policy"} customStyle={"main"} />
      <div className="privacy pb-50">
        <p className="pb-20">
          <b>
            <p>
              <b>Custom Pet Portraits, Mugs, & Phone Cases</b>
            </p>{" "}
          </b>
        </p>
        <p>
          Due to the customized nature of these products that we produce at
          BoltBox, we cannot offer returns. Your custom artwork is designed with
          care and is entirely personal to you and your pet.
        </p>
        <p className="pt-20">
          If you are unhappy with your final product then please get in touch
          with us. Customer satisfaction is one of our passions and we always
          strive to make sure you're happy with the final masterpiece.
        </p>
        <p className="pt-20">
          If you received the wrong product, and incorrect size or print, or
          your product was damaged in transit, we will of course replace it
          without question. Please let us know within 48 hours of receiving your
          order in this case.
        </p>
        <p className="pt-20">
          If you have placed an order recently and have changed your mind, you
          can cancel or change your order within 30 minutes. If 30 minutes have
          passed, the cancellation & change request will be granted at our
          discretion. The reason for this is that our artists often begin work
          as soon as you have placed your order.
        </p>
        <p className="pt-20">
          {" "}
          Please be aware that when we create your artwork, we use the photo you
          uploaded with your order. If you do not follow our photography tips,
          we cannot offer any solution. It's your responsibility to submit a
          high quality photo that adheres to our submission guidelines. Low
          quality photos will result in low quality artwork. We do allow for
          notes to be added to orders in case you have anything to let us know
          about. However, we can't guarantee that special requests will be
          adhered to - for example we cannot edit a photo to close or open a
          mouth, add a smile etc. We can however, remove red eye, edit eye color
          and other requests.
        </p>
        <p className="pt-20">
          Please note that all examples on site were made from high quality,
          high resolution photos. Blurry, low quality photos will not allow our
          design team to produce the high quality finish you see on site.
        </p>
      </div>
    </div>
  );
};

export default Refund;
