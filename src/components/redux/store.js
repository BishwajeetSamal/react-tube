import { createStore } from "redux";
import cakeReducer from "./cake/cakeReducer";

const store = createStore(cakeReducer);
console.log("Store Called");
console.log(store);
export default store;
