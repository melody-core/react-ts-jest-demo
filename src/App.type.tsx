/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-02-17 11:09:32
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-02-17 11:34:48
 * @FilePath: /react-study/src/App.type.tsx
 * @Description: update here
 */
import type { NavigatorConfigItem } from './config'


interface UseNavigatorReturn{
    current: number;
    isShow: boolean;
    handleNavigatorRouter: (item: NavigatorConfigItem, index: number) => void;
}  

export interface UseNavigator{
    (): UseNavigatorReturn
}