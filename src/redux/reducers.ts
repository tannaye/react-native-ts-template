import {combineReducers} from "@reduxjs/toolkit";
import home from "./home/reducers";

const rootReducer = combineReducers({
  home,
});

export default rootReducer;
