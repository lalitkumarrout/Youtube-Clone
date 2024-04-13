import Body from "./Components/Body";
import Head from "./Components/Head";
import { Provider } from "react-redux";
import store from "./Utils/store";


function App() {
  return (
    <Provider store={store}>
    <div>
      <Head />
      <Body />
    </div>
    </Provider>
  );
}

export default App;
