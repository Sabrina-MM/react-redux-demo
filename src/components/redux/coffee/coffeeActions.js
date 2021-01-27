import { BUY_COFFEE } from "./coffeeTypes";

export const buyCoffee = (numberOfCoffee = 1) => {
  return {
    type: BUY_COFFEE,
    payload: numberOfCoffee,
  };
};

//payload is the property of actions
