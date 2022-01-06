

import React, { Component } from 'react'


import styles from './index.module.css';

export default class AddTask extends Component{

    state= {
        inputValue: "",
    }
    handleInputChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }
    // 回车
    handleEnter = (event) => {
        if (event.keyCode === 13) {
          const { inputValue } = this.state;
          this.props.enter(inputValue);

          this.setState({
            inputValue: ""
          })
        }
      };
    render(){
        const { inputValue } = this.state;
        return (
            <input
                className={styles["input"]}
                placeholder="回车添加任务"
                value={inputValue}
                onChange={this.handleInputChange}
                onKeyDown={this.handleEnter}
          />
        )
    }
}