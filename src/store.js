import { combineReducers, createStore } from "redux";
import counterReducer from "./reducers/counterReducer";
import onOffSwitchReducer from "./reducers/onOffSwitchReducer";

const combinedReducer = combineReducers({
    counter: counterReducer,
    onOffSwitch: onOffSwitchReducer
});

const store = createStore(combinedReducer);
export default store;