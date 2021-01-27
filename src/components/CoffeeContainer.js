import React from "react";
import { buyCoffee } from "./redux";
import { connect } from "react-redux";

function CoffeeContainer(props) {
  return (
    <div>
      <h5>Number of coffee /{props.numOfCoffee} </h5>
      <button onClick={props.buyCoffee}>Buy coffee</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCoffee: state.coffee.numOfCoffee,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyCoffee: () => dispatch(buyCoffee()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeContainer);
