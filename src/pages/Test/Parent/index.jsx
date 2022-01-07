import React from "react";
import Child from "../Child";
import connect from "../../../utils/connect";

const Parent = (props) => (
  <div>
    parent: a: {props.a}
    <Child />
  </div>
);

export default connect((state)=>({a: state.a}))(Parent);
