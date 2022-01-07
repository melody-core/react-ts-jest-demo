import {Component } from 'react'

import PropTypes from "prop-types";
// import eventStore from "../../../utils/eventStore";
import testContext from "./context";

const { Consumer } = testContext;

console.log("PropTypes.number", PropTypes.number);

// 高阶组件
const connect = (filterfn) => (Target) => {
  return class NewComponent extends Component {
    render() {
      return (
        <Consumer>
          {(store) => {
            console.log("value", store);
            const { state, setStore  } = store;
            // Set_Store
            const updateStore = (assignState) => {
              setStore(assignState, ()=>this.forceUpdate());
            }

            const filterStore = filterfn(state);
            return <Target {...filterStore} updateStore={updateStore} />;
          }}
        </Consumer>
      );
    }
  };
};


export default connect