import { createStore } from "redux";

// 5
import rootReducer from "./rootReducer";
// now go and create a new IceCreamContainer.js
const store = createStore(rootReducer);

export default store;
