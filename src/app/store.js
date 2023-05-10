import {configureStore} from '@reduxjs/toolkit';
import imagesReducer from '../features/Images/imagesSlice'
import countersSlice from '../features/Counters/countersSlice';
// import { addCounters } from "../features/Counters/countersSlice";

const store =  configureStore({
    reducer:{
        images:imagesReducer,
        counters:countersSlice
    }
})

export default store
// store.dispatch(addCounters(19))

// console.log("INITIAL STATE VALUE", store.getState())