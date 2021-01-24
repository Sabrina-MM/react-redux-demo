//4 combine reducers

import { combineReducers } from "redux";
//import reducers we are going to combine
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";

const rootReducer = combineReducers({
  // the argument to combine reducer is an object/ specify reducers
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

export default rootReducer;
