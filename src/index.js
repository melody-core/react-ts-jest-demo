import React, { Component } from "react";
import ReactDOM from "react-dom";
import Test from "./pages/Test";
import "./index.css";
import { Provider } from "react-redux";
import store from './store';


ReactDOM.render(
  <Provider store={store}>
    <Test />
  </Provider>,
  document.getElementById("root")
);

// reportWebVitals();
