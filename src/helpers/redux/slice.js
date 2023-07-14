import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  lng: "alb",
  order: {
    details: [],
    client:{},
    orderInfo: {},
    price: 0
  }
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.lng = action.payload
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
      let price = state.order.price;
      let newData =  action.payload;
      
      //Kategorine e njejte e mbishkruan. Psh: Kornize e bardh pastaj e klikon kornizen e zeze
      if(oldDataUpdated[newData.type]){
        price -=  (parseFloat(oldDataUpdated[newData.type].price))
      }

      oldDataUpdated[newData.type] = newData;
      price +=  (parseFloat(newData.price))


      state.order.orderInfo = oldDataUpdated;
      state.order.price = price;
    },
    setPrice: (state, action) => {
      state.order.price = action.payload
    },
    resetGlobal: () => initialState
  }
});

export const { 
  setLanguage,
  setDetailsInfo,
  setOrderInfo,
  setClientInfo,
  resetGlobal,
  setPrice
} = globalSlice.actions;
export default globalSlice.reducer;