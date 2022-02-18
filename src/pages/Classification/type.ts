/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-02-18 10:20:39
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-02-18 10:23:53
 * @FilePath: /react-study/src/pages/Classification/type.ts
 * @Description: update here
 * 
 */


export interface TabsDataResData{
    recommendCategoryList: Record<any, any>[], 
    categoryList:  Record<any, any>[], 
    recommendSpecial: Record<any, any>[],
    html: Record<any, any>
}

export interface TabsDataRes{
    code: number;
    data: TabsDataResData
    msg: string
    nowTime: number
}