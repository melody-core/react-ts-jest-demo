import React,{ Component } from "react";

import "./index.css";

export default class SearchX extends Component {
  state = {
    value: "",
    historyList: [],
    showList: false,
  };
  fdTimer = null;

  // MVVM 视图交互更新状态
  handleValueChange = (event) => {
    const { value } = event.target;
    this.setState({
        value
    })
  };

  search = () => {
    const { historyList, value } = this.state;
    // 如果历史记录已经存在，就给它置顶
    const findIndex = historyList.indexOf(value.trim());
    if (findIndex > -1) {
      historyList.splice(findIndex, 1);
    }
    historyList.unshift(value.trim());

    this.setState({
      historyList,
      value: "",
    });
  };
  showHistoryContrulor = (showList) =>  () => {
    this.setState({
      showList,
    });
  };
  // 渲染历史记录列表的方法
  renderHistoryList = () => {
    return this.state.historyList.map((item) => <div key={item}>{item}</div>);
  };
  // 
  renderMoreVdoms = () => {
    return new Array(50000).fill(<div />);
  }

  render() {
    const list = this.renderHistoryList();
    const { value, showList } = this.state;
    const vDoms = this.renderMoreVdoms();
    return (
      <div className="search-x-wrap">
        <div className="search-left">
          <input
            onBlur={this.showHistoryContrulor(false)}
            onFocus={this.showHistoryContrulor(true)}
            value={value}
            onChange={this.handleValueChange}
          />
          {showList && <div>{list}</div>}
        </div>
        <div className="search-right">
          <button onClick={this.search}>搜索</button>
        </div>
        {vDoms}
      </div>
    );
  }
}
