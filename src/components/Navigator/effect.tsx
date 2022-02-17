import { useState } from 'react';

import type { UseSearchContrulor } from './type';
import type { NavigatorConfigItem } from 'config';

/**
 * 
 * @param current 
 * @param onSearch 
 * @returns 
 */
export const useSearchContrulor: UseSearchContrulor = (current, onSearch) => {
      // 组件内置的控制当前高亮的状态
  const [ showIndex, setShowState ] = useState(0);
  // 决定视图高亮的index 
  const currentShowIndex  = (!current && current!==0) ? showIndex : current;
  const handleItemSearch = (item: NavigatorConfigItem, index: number) => {
     setShowState(index);
     if(onSearch){
         onSearch(item, index);
     }
   }
   return {
    currentShowIndex,
    handleItemSearch
   }
}