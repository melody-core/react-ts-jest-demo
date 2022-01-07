import React from "react";
import { connect } from 'react-redux'
class Child extends React.Component {
  handleClick = () => {
    const {dispatch, count} = this.props;
    dispatch({
      type: 'updateCount',
      payload: {
        count: count +1
      }
    })
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

const mapStateToProps = ( { count }  ) =>{
  return {
    count, 
  }
}

export default connect(mapStateToProps)(Child)