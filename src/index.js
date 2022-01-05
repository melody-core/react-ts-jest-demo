import React, { Component } from "react";
import ReactDOM from "react-dom";

import Swiper from "./components/Swiper";
import Modal from './components/Modal';
import Test from './pages/Test'
import TodoList from "./pages/TodoList";
import "./index.css";

ReactDOM.render(
  // <Swiper
  //   autoPlay
  //   imgList={[
  //     "https://img2.baidu.com/it/u=814966957,1407848517&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
  //     "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fdc05943c7729013fc02787a7aeb6c0dc6f3ce9931040c-ZJIejr_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1643886627&t=9186867aa9ba23300902b185c353e03f",
  //     "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F6de9fda015933d8360bd3204b7a12fcf1f207bc051032-9yAAsK_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1643886627&t=f21ccf4c79dc78f9095c4f60ffd0af87",
  //   ]}
  // />,
  <TodoList />,
  document.getElementById("root")
);

// reportWebVitals();
