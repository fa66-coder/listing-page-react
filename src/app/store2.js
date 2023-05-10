import { configureStore } from "@reduxjs/toolkit";
import { addCounters } from "../features/Counters/countersSlice";

const store =  configureStore({
    reducer:{
        counter:countersSlice
    }
})

store.dispatch(addCounters(19))

console.log("INITIAL STATE VALUE", store.getState())