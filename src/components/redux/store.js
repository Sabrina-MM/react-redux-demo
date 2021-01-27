import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

// 5
import rootReducer from "./rootReducer";
// now go and create a new IceCreamContainer.js
//adding applyMiddleware after all the points as a second parametro
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
