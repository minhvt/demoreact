import { combineReducers } from "redux";
import reducerCounter from "./ReducerCounter";

// Khai báo đối tượng đóng gói các Reducer map với các tên binding
const allReducer = combineReducers({
    counter: reducerCounter
});

export default allReducer;