import { Component } from 'react';

import { connect } from 'react-redux';

// import { useCountContrulor, useDidMount } from './effect';


class Test extends Component{

  handleClick = () =>{
    const { dispatch } = this.props;
    dispatch({type: 'ADD_COUNT'})
  }
  handleGetCount = () => {
    const { dispatch } = this.props;
    dispatch({type: 'GET_COUNT'})
  }

  render(){
    console.log('render', this.props)
    const { count } = this.props;
    console.log('count', count)

    return (
      <>
        <div>{count}</div>
        <div onClick={this.handleClick}>+</div>
        <button onClick={this.handleGetCount}>点击我从远端获取最新的count</button>
      </>
      
    )
  }
}


export default connect(state=>{
  return {
    count: state.count
  }
})(Test)