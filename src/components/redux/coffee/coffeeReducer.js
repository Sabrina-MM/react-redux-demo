import { BUY_COFFEE } from "./coffeeTypes";

const initialState = {
  numOfCoffee: 15,
};

const coffeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_COFFEE:
      return {
        ...state,
        numOfCoffee: state.numOfCoffee - action.payload,
      };
    default:
      return state;
  }
};
export default coffeeReducer;
