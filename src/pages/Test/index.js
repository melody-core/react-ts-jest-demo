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



// dispatch 一个action({type:'fn-name'}), 触发对应的reducer函数，来更新store里面的状态。
const store = {
  state: {
    count: 0,
  },
  reducers: {
    updateCount: ({ count }) => {
      store.state.count = count
    },
  },
  // action : {type: 'updateCount', payload: {count: 1},callback}
  dispatch: (action) => {
    const { type,  payload, callback } = action || {};
    store.reducers[type](payload);
    callback && callback();
  },
  // setStore : (assignState, callback) => {
  //   Object.assign(store.state, assignState);
  //   callback && callback(store.state);
  // },
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
