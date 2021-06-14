import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import Routes from "./routes/router";
import store from "./redux/store"
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes></Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
