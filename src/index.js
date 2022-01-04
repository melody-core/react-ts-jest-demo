import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// let timer = new Date().toString();
// setTimeout(()=>{
//   timer = new Date().toString();
// }, 1000)
// const Tick = () => {
//   return (
//     <div>{timer}</div>
//   )
// }

class Tick extends Component {
  constructor(props){
    super(props);
    this.state= {
      timer: new Date().toString(),
      count: 0
    }
    // this.timer = null; // 这个用来记录定时器
  }

  handleClick = () => {
    this.setState({
      timer: new Date().toString(),
      count: this.state.count+1
    }, ()=>{
      console.log(this.state)
    })
    console.log(this.state.timer)
  }

  render(){
    console.log('render')
    const { timer } = this.state;
    return  <div onClick={this.handleClick}>{timer}</div>
  }
}


ReactDOM.render(
  <Tick  />,
  document.getElementById("root")
);

// reportWebVitals();
