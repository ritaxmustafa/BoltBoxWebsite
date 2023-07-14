import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { label } from "../../helpers/language";
import style from "./OrdersComponent.module.css";
import { BsCardImage } from "react-icons/bs";
import { Link } from "react-router-dom";
import { setDetailsInfo } from "../../helpers/redux/slice";

function ProductInfoModel(props) {
  const { order, lng } = useSelector((state) => state.global);
  const [error, setError] = useState('');
  const [files, setFiles] = useState(null);
  const [formData, setFormData] = useState(null);

  const [details, setDetails] = useState(
    order?.details.length > 0
      ? order.details
      : []
  );

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
        
      }
    } 
  }


  const validateInfo = () =>{

    let isFormValid = true;

    console.log("details",details);
    for (let i = 0; i < order?.orderInfo?.objectNo.value; i++) {
      console.log("details[i]", details[i]);
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
      const formData = new FormData();

    
      console.log("---",typeof files);

      Object.keys(files).forEach(function(key) {
        if(!allowedExtension.indexOf(files[key].type)>-1){
          hasError = true;
          setError(label[lng].allowdImageExtension);
        }else formData.append(`file-${files[key]}`, files[key], files[key].name);
      });
      // });
      if(!hasError) {
        setFiles(e.target.files);
        setFormData(formData);
      }
      // Details of the uploaded file
  }



  return (
    <div className={style.orderBody}>
      <h1>Create your Bolt Box</h1>
      {error.length>0 && <p className="errorMsg">{error}</p>}
      <div className={style.detailsWrapper}>
        <div className="flex">
          <p>Të dhënat e kafshës suaj</p>
          <span>Demo te fotografisë</span>
        </div>
        <div className={`${'grid'+order?.orderInfo?.objectNo.value}`}>
          {
          [...Array(parseInt(order?.orderInfo?.objectNo.value))].map((e, i) =>
          <div className={style.inputFile} key={i}>
            <input type="text" placeholder="Emri" 
            
            onChange={(e) => changeValue(e, i, "name")}
            />
          </div>)}
        </div>
        <div className={style.file}>
          <input type="file" onChange={handleFileChanges} multiple/>
          <BsCardImage />
        </div>
        {
          !files ? <span>*You can add multiple images*</span>  : 
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
          <p>Size: 33x48</p>
          <a href="mailto:info@bolt.box">Required a specific size</a>
        </div>
      <button className="btn" onClick={()=>addCart()}>{label[lng].continue}</button>
    </div>
  );
}

export default ProductInfoModel;
