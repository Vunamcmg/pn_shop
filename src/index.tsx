import * as React from "react";
import { render } from "react-dom";
import { configureStore } from "./store";
import { Provider } from "react-redux";
import App from "./containers/app";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const appStore = configureStore();

render(
  <Provider store={appStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
