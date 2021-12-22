import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import onOffReducer from "./onOffSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        onOff: onOffReducer
    },
    devTools: true
});

export default store;