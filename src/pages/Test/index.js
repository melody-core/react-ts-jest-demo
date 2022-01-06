import React, { Component, createContext } from "react";
import PropTypes from 'prop-types';
// import Modal from "../../components/Modal";

// import SearchX from "../../components/SearchX";

// import SearchZ from './../../components/SearchZ';

// import SearchY from './../../components/SearchY';
import Parent from "./Parent";

import textContext from './../../utils/context';

console.log('textContext', textContext);
const { Provider } = textContext;



const store = {
  state: {
    count: 0,
    a: 1
  },
  setStore : (assignState, callback) => {
    Object.assign(store.state, assignState);
    callback(store.state);
  }
}

export default class Test extends Component {

  
  componentDidMount(){
    console.log(this)
  }
  render() {
    return (
      <div>
        <Provider value={store}>
          {/* <SearchX /> */}
          <div>test</div>
          <Parent />
          {/* <SearchY /> */}
        </Provider>
      </div>
    );
  }
}
