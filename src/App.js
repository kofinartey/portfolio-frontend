import Portfolio from "./Portfolio";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Portfolio />
    </Provider>
  );
}

export default App;
