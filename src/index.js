import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// 类组件

// react组件 - 原型机 - Comopnent
class Child extends Component {
  constructor(props){
    super(props);
    console.log('constructor');
    this.state = {
      count: 0,
      a: 1
    }
  }
  componentWillMount(){
    console.log('componentWillMount')
  }

  componentDidMount(){
    console.log('componentDidMount')
  }

  componentWillReceiveProps(){
    console.log('componentWillReceiveProps')
  }

  shouldComponentUpdate(){
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate(){
    console.log('componentWillUpdate')
  }

  componentDidUpdate(){
    console.log('componentDidUpdate')
  }

  componentWillUnmount(){
    console.log('componentWillUnmount')
  }



  handleBoxClick = () => {
    this.setState({
      count: this.state.count + 1
    },()=>{
      console.log(this.state.count)
    })

  }
  // 渲染
  render(){
    console.log('render', this.state.count)
    return (
      <div>
        {this.state.count}
        <div onClick={this.handleBoxClick}> + </div>
      </div>
    )
  }
}


class Parent extends Component{

  state= {
    update: true
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        update: false
      })
    }, 3000)
  }

  render(){
    console.log('parent-render')
    if(this.state.update){
      return (
        <Child />
      )
    }
    return <div>123</div>

  }
}


ReactDOM.render(
  <Parent id='demo'/>,
  document.getElementById('root')
);

// reportWebVitals();
