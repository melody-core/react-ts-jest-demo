import React from "react";
import connect from './../../../utils/connect';


class Child extends React.Component {
  componentDidMount() {}
  handleClick = () => {
    const { count, updateStore } = this.props;
    updateStore({
      count: count + 1,
    });
    console.log(this.props);
  };
  render() {
    console.log("child", this);
    return (
      <div onClick={this.handleClick}>
        我是Child，我要显示来自最外层组件Test的数据count:{" "}
        {this.props.count}
      </div>
    );
  }
}
export default connect((state)=>({
  count: state.count
}))(Child);
