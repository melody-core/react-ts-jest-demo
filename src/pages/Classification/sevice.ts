/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-02-18 10:17:32
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-02-18 10:26:24
 * @FilePath: /react-study/src/pages/Classification/sevice.ts
 * @Description: update here
 */

import type { TabsDataRes } from "./type";

/**
 * 
 * @returns 获取tabsdata数据源的方法
 */
export const getTabsDataSource: () => Promise<TabsDataRes> = () =>
  fetch(
    "https://api.weipaitang.com/wechat/v1.0/category/get-list?__uuri=&_h=P5o%3DkDMUF1TORVUFlTRNZkUsR1drZkVOh2VSRFbFFmROZ1UJVb&_a="
  ).then((res) => res.json());
