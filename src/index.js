import React, { Component, Profiler, StrictMode } from "react";
import ReactDOM from "react-dom";
import Test from "./pages/Test";
// import List from "./pages/List";
import StudentList from './pages/StudentList';
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";
import ErrorHandle from './components/ErrorHandle'

// ReactDOM.render(
//   <Provider store={store}>
//     <Test />
//   </Provider>,
//   document.getElementById("root")
// );



ReactDOM.render(
  <ErrorHandle > 
    <StudentList  />
  </ErrorHandle>
   ,
  document.getElementById("root")
);
// reportWebVitals();
