import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/store";
import "./App.css";
import Phonebook from "./components/Phonebook";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Phonebook />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
