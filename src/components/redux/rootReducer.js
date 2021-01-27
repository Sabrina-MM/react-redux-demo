//4 combine reducers

import { combineReducers } from "redux";
//import reducers we are going to combine
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import coffeeReducer from "./coffee/coffeeReducer";
import userReducer from "./users/userReducer";

const rootReducer = combineReducers({
  // the argument to combine reducer is an object/ specify reducers
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  coffee: coffeeReducer,
  user: userReducer,
});

export default rootReducer;
