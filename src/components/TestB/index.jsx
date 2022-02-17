/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-02-14 15:26:07
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-02-14 15:28:11
 * @FilePath: /node-test-js-demo/Users/wxy/codeWorks/git-demos/git-test/react-study/src/components/TestB/index.jsx
 * @Description: update here
 */

import { Component } from "react";
class TestB extends Component {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div className="count-wrap" onClick={this.handleClick}>
        {count}
      </div>
    );
  }
}

export default TestB;
