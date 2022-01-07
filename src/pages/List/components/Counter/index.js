
import { useRef, useState, useEffect } from 'react'


// const useRef = (function(){
//     let obj = {
//         current: undefined
//     };
//     return (init)=> {
//         if(obj.current!==undefined){
//             return obj
//         }
//         // 这下面只会执行一次
//         obj.current = init;
//         return obj;
//     }
// })()

// //  (init)=> {
// //     if(obj.current!==undefined){
// //         return obj
// //     }
// //     // 这下面只会执行一次
// //     obj.current = init;
// //     return obj;
// // }

const Counter = () => {
    let countRef = useRef(0); // {current: 0}   {current: 1}
    const boxRef = useRef();
    setTimeout(() => {
        console.log('boxRef', boxRef);
    }, 1000);
    countRef.current = countRef.current +1; // {current: 1}   {current: 2}
    return (
        <div ref={boxRef}>{countRef.current}</div>
    )
}
// useRef: 1. 保存函数式组件中的值， 不会因为render而重置；
// 2. ref的能力。 标记dom获取dom实例，标记组件获取组件实例。 
export default Counter;