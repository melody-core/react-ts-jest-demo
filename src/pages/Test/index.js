// import { useEffect } from 'react';

import { useCountContrulor, useDidMount } from './effect';



const Test = () => {
  const {
    count,
    handleCountAdd
  } = useCountContrulor();

  useDidMount(()=>{
    console.log('didMount')
  })

  return (
    <div onClick={handleCountAdd}>{count}</div>
  )
}



export default Test