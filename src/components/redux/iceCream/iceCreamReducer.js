//3

import { BUY_ICECREAM } from "./iceCreamTypes";

const initialState = {
  numberOfIceCreams: 20,
};

const iceCreamReducer = (state = initialState, action) => {
  // state is going to have a default value: initialState
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        // return new state
        ...state, //copy of the state
        numberOfIceCreams: state.numberOfIceCreams - 1,
      };
    default:
      return state; //return current state
  }
};

export default iceCreamReducer;
