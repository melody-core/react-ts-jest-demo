// import React, { Component, Profiler, StrictMode } from "react";
import React from 'react';

import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import App from './App';
import Test from './pages/Test';
import TodoListFn from './pages/TodoListFn';
import StudentList from './pages/StudentList';
import Router from './router';
import store from './store';
import './utils/EchartsCore';




ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);
// reportWebVitals();
