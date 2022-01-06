import React from "react";
import PropTypes from "prop-types";
// import eventStore from "../../../utils/eventStore";
import testContext from "./../../../utils/context";

const { Consumer } = testContext;

console.log("PropTypes.number", PropTypes.number);


const connect = (Target) => {
    return function NewComponent(){
        return (
            <Consumer>
            {(value) => {
              console.log("value", value);
              return (
                <Target {...value}/>
              );
            }}
          </Consumer>
        )
    }
}

class Child extends React.Component {
  state = {
    count: null,
  };
  componentDidMount() {}
  render() {
    console.log('child', this);
    return (
        <div>
              {/* 我是Child，我要显示来自最外层组件Test的数据count: {this.props} */}
        </div>
    );
  }
}
export default connect(Child);
