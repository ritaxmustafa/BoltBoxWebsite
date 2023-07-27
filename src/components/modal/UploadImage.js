import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { label } from "../../helpers/language";
import style from "./Modal.module.css";
import { useLottie } from "lottie-react";
import upload from "../../helpers/lotties/uploadImage.json";
import { BsCardImage } from "react-icons/bs";
import { setImages } from "../../helpers/redux/slice";

function UploadImage(props) {
  const dispatch = useDispatch();
  const { order, lng } = useSelector((state) => state.global);
  const [error, setError] = useState(true);
  const [files, setFiles] = useState(null);
  const [formData, setFormData] = useState(null);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: upload,
  };

  const { View } = useLottie(defaultOptions);

  const handleFileChanges = (e) => {
    let allowedExtension = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/gif",
      "image/bmp",
    ];
    let hasError = false;

    // Create an object of formData
    const files = e.target.files;

    Object.keys(files).forEach(function (key) {
      if (allowedExtension.indexOf(files[key].type) <= -1) {
        hasError = true;
        setError(label[lng].allowdImageExtension);
      }
    });
    if (!hasError) {
      setFiles(e.target.files);
      setFormData(formData);
    }
  };

  const buttonClick = () => {
    if (validateFile()) {
      // Convert each selected image to a base64 encoded string
      const imageDataPromises = Array.from(files).map((file) => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            resolve(reader.result);
          };
          reader.readAsDataURL(file);
        });
      });

      // After all images are converted, update the imageDataList state
      Promise.all(imageDataPromises).then((imageDataArray) => {
        dispatch(setImages(imageDataArray));
      });

      //Close POP-UP
      props.closeModal();
    }
  };

  const validateFile = () => {
    if (files) return true;
    else {
      setError(label[lng].uploadFile);
      return false;
    }
  };

  return (
    <div className={style.checkoutModal}>
      <div className={style.checkoutBody}>
        <div className={style.modalLottie}>{View}</div>
        <h1>{label[lng].invalidImages}</h1>
        {error && (
          <span className="errorMsg">{label[lng].allowdImageExtension}</span>
        )}
        <div className={style.file}>
          <input type="file" onChange={handleFileChanges} multiple />
          <BsCardImage />
        </div>
        {!files ? (
          <span>*{label[lng].multipleImage}*</span>
        ) : (
          <div className={`${"grid3"}`}>
            {Object.keys(files).map((file, i) => {
              return <span key={i}>{files[i].name}</span>;
            })}
          </div>
        )}
        <span className={style.message}>{label[lng].invalidImageContact}</span>
        <div className={style.modalUpload}>
          <button onClick={() => buttonClick()}>Vazhdo</button>
        </div>
      </div>
    </div>
  );
}

export default UploadImage;
