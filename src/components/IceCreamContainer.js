//6
import React from "react";
import { buyIceCreams } from "./redux";
import { connect } from "react-redux";

function IceCreamContainer(props) {
  return (
    <div>
      <h2>Number of iceCreams / {props.numberOfIceCreams}</h2>
      <button onClick={props.buyIceCreams}>Buy iceCream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfIceCreams: state.iceCream.numberOfIceCreams, // return and object// to see the numbers of iceCream we need to specify state.icecream.numOfIceCreams from rrotReducer.js
  };
};

//step N-2
const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCreams: () => dispatch(buyIceCreams()), // dispatch and action creator from redux
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
