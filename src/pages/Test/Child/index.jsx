import React from "react";
import connect from './../../../utils/connect';

// @connect(state=>state)
class Child extends React.Component {
  componentDidMount() {}
  handleClick = () => {
    const { count, dispatch } = this.props;
    dispatch({
      type: "updateCount",
      payload: {
        count: count+1
      }
    });
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
