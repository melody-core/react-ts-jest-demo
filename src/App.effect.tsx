/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-02-17 11:06:32
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-02-17 11:35:51
 * @FilePath: /react-study/src/App.effect.tsx
 * @Description: update here
 */

import { MENE_LIST } from "config";
import { useState } from "react";
import type  { NavigatorConfigItem } from './config';
import type { UseNavigator } from './App.type';


/**
 * @desc: 这是处理导航栏业务逻辑的钩子
 * 
 */
export const useNavigator: UseNavigator = () => {
  const initCurrent = MENE_LIST.findIndex(item => item.path === location.pathname)
  const [current, setCurrent] = useState(initCurrent);
  const isShow = (initCurrent!==-1);
  const handleNavigatorRouter = (item: NavigatorConfigItem, index: number) => {
    window.history.pushState(null, '', item.path);
    setCurrent(index);
  };
  return {
    current,
    isShow,
    handleNavigatorRouter,
  };
};