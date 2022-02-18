import React, { useRef, useState, useEffect } from "react";

const Mine = () => {
  const [state, setState] = useState({
    count: 0,
    b: 0,
  });

  useEffect(() => {
    console.log("副作用");
    return () => {
      console.log("清理");
    };
  }, [state.count]);

  const countRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div
        onClick={() =>
          setState({
            ...state,
            count: state.count + 1,
          })
        }
        ref={countRef}
      >
        {state.count}
      </div>
      <div
        onClick={() =>
          setState({
            ...state,
            b: state.b + 1,
          })
        }
      >
        {state.b}
      </div>
    </>
  );
};

export default Mine;
