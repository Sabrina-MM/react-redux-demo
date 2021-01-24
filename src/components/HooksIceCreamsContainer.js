import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCreams } from "./redux";

function HooksIceCreamContainer() {
  const numberOfIceCreams = useSelector(
    (state) => state.iceCream.numberOfIceCreams
  );
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of iceCream / {numberOfIceCreams}</h2>
      <button onClick={() => dispatch(buyIceCreams())}>
        buy-iceCream-using HOOKS
      </button>
    </div>
  );
}
export default HooksIceCreamContainer;
