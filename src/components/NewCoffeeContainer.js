import React, { useState } from "react";
import { buyCoffee } from "./redux";
import { connect } from "react-redux";

function NewCoffeeContainer(props) {
  const [numberOfCoffee, setNumberOfCoffee] = useState(1);
  return (
    <div>
      <h5>Number of coffee /{props.numOfCoffee} </h5>
      <input
        type="text"
        value={numberOfCoffee}
        onChange={(e) => setNumberOfCoffee(e.target.value)}
      />
      <button onClick={() => props.buyCoffee(numberOfCoffee)}>
        Buy {numberOfCoffee} coffee
      </button>
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
    buyCoffee: (numberOfCoffee) => dispatch(buyCoffee(numberOfCoffee)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCoffeeContainer);
