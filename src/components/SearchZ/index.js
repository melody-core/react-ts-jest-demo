import React, { Component, createRef } from "react";

import B from "./A";

import "./index.css";

export default class SearchZ extends Component {
  inputRef = createRef(); // {current: null}
  search = () => {
    console.log(this.inputRef);
  };
  render() {
    return (
      <div className="search-x-wrap">
        <div className="search-left">
          <B ref={this.inputRef} />
          <input
          // ref={this.inputRef}
          // onBlur={this.showHistoryContrulor(false)}
          // onFocus={this.showHistoryContrulor(true)}
          // value={value}
          // onChange={this.handleValueChange}
          />
          {/* {showList && <div>{list}</div>} */}
        </div>
        <div className="search-right">
          <button onClick={this.search}>搜索</button>
        </div>
      </div>
    );
  }
}
