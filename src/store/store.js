import { configureStore } from "@reduxjs/toolkit";
import openReducer from "./reducer/openSlice";

const store = configureStore({
    reducer:{
        open: openReducer,
    }
})

export default store;