import React, { FC } from "react";

// import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import Router from "./router";
import Navigator from "./components/Navigator";
import store from "./store";

import { useNavigator } from './App.effect';

import { MENE_LIST } from './config';


import styles from "./App.module.css";


const App: FC = () => {
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
