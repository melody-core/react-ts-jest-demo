import React, { Component, Profiler, StrictMode } from "react";
import ReactDOM from "react-dom";
import Test from "./pages/Test";
import List from "./pages/List";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";

// ReactDOM.render(
//   <Provider store={store}>
//     <Test />
//   </Provider>,
//   document.getElementById("root")
// );

ReactDOM.render(
    <List />,
  document.getElementById("root")
);
// reportWebVitals();
