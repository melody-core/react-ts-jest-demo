import React, { Component } from "react";


import "./index.css";

export default class SearchY extends Component {
  inputValue = '123'
  search = () => {
    console.log(this.inputValue);
  };
  handleChange = event => {
    this.inputValue = event.target.value
  }
  render() {
    console.log('render');
    return (
      <div className="search-x-wrap">
        <div className="search-left">
          <input
            // value = {}
            defaultValue={this.inputValue}
            onChange={this.handleChange}
            placeholder="请输入"
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
