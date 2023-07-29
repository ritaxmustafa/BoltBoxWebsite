import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  lng: "eng",
  country: "",
  order: {
    details: [],
    client:{},
    orderInfo: {},
    images:[],
    price: 0
  }
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setCountry:  (state, action) => {
      state.country = action.payload;

    },
    setLanguage: (state, action) => {
      state.lng = action.payload
    },
    setImages:(state, action) =>{
      state.order.images = action.payload
    },
    setDetailsInfo: (state, action) => {
      state.order.details = action.payload
    },
    setClientInfo: (state, action) => {
      state.order.client = action.payload
    },
    setOrderInfo: (state, action) => {

     let oldDataUpdated = {...state.order.orderInfo}


      // //Update specific key
      let price = parseFloat(state.order.price);
      let newData =  action.payload;

      
      //Kategorine e njejte e mbishkruan. Psh: Kornize e bardh pastaj e klikon kornizen e zeze
      if(oldDataUpdated[newData.type]){
        price = price -  (parseFloat(oldDataUpdated[newData.type].price))
      }

      oldDataUpdated[newData.type] = newData;
      price =  price + (parseFloat(newData.price))

      state.order.orderInfo = oldDataUpdated;
      state.order.price = parseFloat(price).toFixed(2);
    },
    setPrice: (state, action) => {
      state.order.price = parseFloat(action.payload).toFixed(2)
    },
    resetGlobal: () => initialState
  }
});

export const { 
  setLanguage,
  setDetailsInfo,
  setOrderInfo,
  setCountry,
  setClientInfo,
  setImages,
  resetGlobal,
  setPrice
} = globalSlice.actions;
export default globalSlice.reducer;