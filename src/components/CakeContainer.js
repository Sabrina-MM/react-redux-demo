import React from "react";
import { connect } from "react-redux";
import { buyCake } from "./redux";

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of cakes / {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}
//after Reducer, store, and actions we create this function.
//This function get the redux state as a parameter
//step N-1
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes, // return and object
  };
};

//step N-2
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()), // dispatch and action creator from redux
  };
};

//step N-3 we connect those two functions:connect(mapStateToProps, mapDispatchToProps) FROM react-store

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);

// we can use selectors(look up them on the website), but this example is pretty simple, that is why we do not need them here
