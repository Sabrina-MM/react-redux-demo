import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./components/redux/store";
import "./App.css";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import HooksIceCreamContainer from "./components/HooksIceCreamsContainer";
import CoffeeContainer from "./components/CoffeeContainer";
import NewCoffeeContainer from "./components/NewCoffeeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        <hr />
        <ItemContainer />
        <ItemContainer cake />
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <HooksIceCreamContainer />
        <CoffeeContainer />
        <NewCoffeeContainer />
      </div>
    </Provider>
  );
}
// How the provider component knows about redux-store?
//well we need to specify it as a props on the top : import store from "./redux/store"
// we should pass to Provider component store={store}
//
export default App;
