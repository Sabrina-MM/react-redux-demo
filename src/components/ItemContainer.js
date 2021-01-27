import React from "react";
import { connect } from "react-redux";
import { buyIceCreams, buyCake } from "./redux";

// what we want to achieve with this component is
//to display either the n of cakes or n of icecreams based on a prop that is passed from the parent container
function ItemContainer(props) {
  return (
    <div>
      <h2>Item - {props.item} </h2>
      <button onClick={props.buyItem}>Buy Items</button>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numberOfIceCreams;
  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispath, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispath(buyCake())
    : () => dispath(buyIceCreams());
  return {
    buyItem: dispatchFunction,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
// if we only dispatch one parameter, we should add "null" to the other one.
