
import { useState, useEffect } from 'react'
// effect-副作用-业务逻辑

// 用来控制count相关的业务逻辑
export const useCountContrulor = () => {
    const [count, setCount] = useState(0);
    const handleCountAdd = () => {
      setCount(count+1);
    }
    return {
      count,
      handleCountAdd
    }
  }



// 提供了didMount的功能的自定义钩子
export const useDidMount = (fn) => {
    useEffect(fn, [])
  }