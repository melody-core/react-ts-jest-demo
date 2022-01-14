import { useState } from 'react';


export const useSearchContrulor = (current, onSearch) => {
      // 组件内置的控制当前高亮的状态
  const [ showIndex, setShowState ] = useState(0);
  // 决定视图高亮的index 
  const currentShowIndex  = (!current && current!==0) ? showIndex : current;
  const handleItemSearch = (item, index) => {
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