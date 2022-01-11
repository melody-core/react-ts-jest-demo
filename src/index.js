// import React, { Component, Profiler, StrictMode } from "react";
import React from 'react';

import ReactDOM from "react-dom";
import App from './App';
import Test from './pages/Test';
import TodoListFn from './pages/TodoListFn';
import StudentList from './pages/StudentList';
import Router from './router';



ReactDOM.render(
  <Router />,
  document.getElementById("root")
);
// reportWebVitals();
