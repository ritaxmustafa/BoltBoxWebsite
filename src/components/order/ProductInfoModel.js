import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { label } from "../../helpers/language";
import style from "./OrdersComponent.module.css";
import { BsCardImage } from "react-icons/bs";
import { Link } from "react-router-dom";
import { setDetailsInfo, setImages } from "../../helpers/redux/slice";

function ProductInfoModel(props) {
  const dispatch = useDispatch();
  const { order, lng } = useSelector((state) => state.global);
  const [error, setError] = useState('');
  const [files, setFiles] = useState(null);
  const [formData, setFormData] = useState(null);

  const [details, setDetails] = useState([]);

  const generateGrid = (data) => {
    return "grid" + data.length;
  };

  const changeValue = (event, playerIndex, field) => {
    const newNames = [...details];

    if (!newNames[playerIndex]) {
      newNames[playerIndex] = {};
    }
     newNames[playerIndex] = event.target.value;
    setDetails(newNames);
  };

  useEffect(() => {
    //Get steps
    if(error.length>0){
      //Scroll to top of page to show error message

      window.scrollTo(0, 0);
      document.getElementById("error").scrollIntoView();

      setTimeout(() => {
        setError("");
      }, 3000);
    }
  }, [error]);

  const addCart = () =>{
    //Get Animals info(name, images)
    if(validateInfo()){
      //Validate File Upload
      if(validateFile()){

        // const imageURLs = Array.from(files).map((file) => URL.createObjectURL(file));


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

        dispatch(setDetailsInfo(details));
        props.updatePageprops({ showChekout: true })
      }
    } 
  }


  const validateInfo = () =>{

    let isFormValid = true;

    for (let i = 0; i < order?.orderInfo?.objectNo.value; i++) {
      if (!details[i]) {
        isFormValid = false;
        break;
      }
      isFormValid = true;
    }

    if (isFormValid) return true;
    else {
      setError(label[lng].fillDetails);
      return false;
    }
  }

  const validateFile = () => {
    if(files) return true;
    else {
      setError(label[lng].uploadFile);
      return false;
    }
  }

  const handleFileChanges = (e) => {
    
      let allowedExtension = ['image/jpeg', 'image/jpg', 'image/png','image/gif','image/bmp'];
      let hasError = false;

      // Create an object of formData
      const files = e.target.files;

    
      Object.keys(files).forEach(function(key) {
        if(allowedExtension.indexOf(files[key].type) <= -1){
          hasError = true;
          setError(label[lng].allowdImageExtension);
        }
      });
      if(!hasError) {
        setFiles(e.target.files);
        setFormData(formData);
      }
  }



  return (
    <div className={style.orderBody}>
      <h1 id="error">{label[lng].createBolt}</h1>
      {error.length>0 && <p  className="errorMsg">{error}</p>}
      <div className={style.detailsWrapper}>
        <div className="flex">
          <p>{label[lng].animalDetails}</p>
          <Link to="/demo" target="_blank"><span>{label[lng].demo}</span></Link>
        </div>
        <div className={`${'grid'+order?.orderInfo?.objectNo.value}`}>
          {
          [...Array(parseInt(order?.orderInfo?.objectNo.value))].map((e, i) =>
          <div className={style.inputFile} key={i}>
            <input type="text" placeholder={label[lng].name} 
            
            onChange={(e) => changeValue(e, i, "name")}
            />
          </div>)}
        </div>
        <div className={style.file}>
          <input type="file" onChange={handleFileChanges} multiple/>
          <BsCardImage />
        </div>
        {
          !files ? <span>*{label[lng].multipleImage}*</span>  : 
          <div className={`${'grid3'}`}>
            {Object.keys(files).map((file, i) => {
              return (<span key={i}>
                {files[i].name} 
              </span>)
              })}
          </div>
        }
      </div>
      {Object.values(props.data).map((t, k) => {
        return (
          <div className="borderTop">
            <p>{label[lng][t[0].type]}</p>
            <div className={generateGrid(t)}>
              {t.map((info, j) => {
                return (
                  <div className={`${style.assetSingle} ${order?.orderInfo?.[info.type]?.id === info?.id && style.active}`} key={j}>
                    {
                      info.icon ? <img  src={`../images/assets/${info.icon}`} alt={info.icon} onClick={() => props.updateOrderData(info)} /> :
                      <div onClick={() => props.updateOrderData(info)} className={style.assetOption}>{label[lng][info.value]}</div>
                    }
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
      <div className="flex">
        <p>33x48</p>
        <a href="mailto:info@bolt.box">{label[lng].otherSize}</a>
      </div>
      <button className="btn" onClick={()=>addCart()}>{label[lng].continue}</button>
    </div>
  );
}

export default ProductInfoModel;
