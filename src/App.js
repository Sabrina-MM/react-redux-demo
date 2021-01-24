import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./components/redux/store";
import "./App.css";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import HooksIceCreamContainer from "./components/HooksIceCreamsContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <HooksIceCreamContainer />
      </div>
    </Provider>
  );
}
// How the provider component knows about redux-store?
//well we need to specify it as a props on the top : import store from "./redux/store"
// we should pass to Provider component store={store}
//
export default App;
