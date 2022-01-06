import React, { Component } from "react";
// import Modal from "../../components/Modal";

import SearchX from "../../components/SearchX";

import SearchZ from './../../components/SearchZ';

import SearchY from './../../components/SearchY';
import Parent from "./Parent";

import eventStore from "../../utils/eventStore";

export default class Test extends Component {

  data = {
    count: 5
  }
  componentDidMount(){
    console.log(this)
    eventStore.emit('sendCount', this.data.count)
  }
  render() {
    return (
      <div>
        {/* <SearchX /> */}
        <div>test</div>
        <Parent />
        {/* <SearchY /> */}
      </div>
    );
  }
}
