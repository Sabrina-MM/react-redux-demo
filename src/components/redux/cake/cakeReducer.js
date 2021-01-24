import { BUY_CAKE } from "./cakeTypes";

// initial state,

const initialState = {
  numOfCakes: 10, //object
};

//reducer function

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state, //whatever it is the current state
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

export default cakeReducer;
