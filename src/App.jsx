import React, { useState } from "react";

// import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import Router from "./router";
import Navigator from "./components/Navigator";
import store from "./store";

import styles from "./App.module.css";

const MENE_LIST = [
  {
    title: "首页",
    name: "home",
    path: "/",
    icon: "https://img1.baidu.com/it/u=1436093,1652153727&fm=253&fmt=auto&app=138&f=JPEG?w=260&h=260",
    activeIcon:
      "https://img2.baidu.com/it/u=2319168278,2133264484&fm=253&fmt=auto&app=138&f=PNG?w=264&h=96",
  },
  {
    name: "classification",
    path: "/classification",
    icon: "https://img1.baidu.com/it/u=1436093,1652153727&fm=253&fmt=auto&app=138&f=JPEG?w=260&h=260",
    title: "分类",
    activeIcon:
      "https://img2.baidu.com/it/u=2319168278,2133264484&fm=253&fmt=auto&app=138&f=PNG?w=264&h=96",
  },
  {
    name: "community",
    path: "/community",
    icon: "https://img1.baidu.com/it/u=1436093,1652153727&fm=253&fmt=auto&app=138&f=JPEG?w=260&h=260",
    title: "社区",
    activeIcon:
      "https://img2.baidu.com/it/u=2319168278,2133264484&fm=253&fmt=auto&app=138&f=PNG?w=264&h=96",
  },
  {
    name: "mine",
    path: "/mine",
    icon: "https://img1.baidu.com/it/u=1436093,1652153727&fm=253&fmt=auto&app=138&f=JPEG?w=260&h=260",
    title: "我的",
    activeIcon:
      "https://img2.baidu.com/it/u=2319168278,2133264484&fm=253&fmt=auto&app=138&f=PNG?w=264&h=96",
  },
];

const useNavigator = () => {
  const initCurrent = MENE_LIST.findIndex(item => item.path === location.pathname)
  const [current, setCurrent] = useState(initCurrent);
  const isShow = (initCurrent!==-1);
  const handleNavigatorRouter = (item, index) => {
    window.history.pushState(null, null, item.path);
    setCurrent(index);
  };
  return {
    current,
    isShow,
    handleNavigatorRouter,
  };
};

function App() {
  const { current, handleNavigatorRouter, isShow } = useNavigator();

  return (
    <Provider store={store}>
      <Router key={current} />

      <div className={styles["navigator-wrap"]}>
        <Navigator
          dataSource={MENE_LIST}
          onSearch={handleNavigatorRouter}
          current={current}
          isShow={isShow}
        />
      </div>
    </Provider>
  );
}

export default App;
