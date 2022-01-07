import React from "react";
import Child from "../Child";

const Parent = (props) => (
  <div>
    parent: a: {props.a}
    <Child />
  </div>
);

export default Parent;
