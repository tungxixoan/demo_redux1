import App from "./App";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import store from "./store";
import { fetchUsers } from "./thunks/userThunk";

store.dispatch(fetchUsers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
