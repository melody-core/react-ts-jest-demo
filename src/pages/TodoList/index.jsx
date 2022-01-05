import React from "react";

import styles from "./index.module.css";


const BTN_LIST = ["所有任务", "未完成的任务", "完成的任务"];
export default class TodoList extends React.Component {
  state = {
    inputValue: "",
    taskList: [], // 当前展示的任务列表  {value: '学习react', status: false }[]
    currentType: 0,
  };
  // 用来记录所有的任务
  allTaskList = [];

  getCurrentShowList = () => {
    const { currentType } = this.state;
    if (currentType === 0) {
      return [...this.allTaskList]; // []
    }
    if (currentType === 1) {
      return this.allTaskList.filter((item) => item.status === false); //[]
    }
    if (currentType === 2) {
      return this.allTaskList.filter((item) => item.status === true);
    }
    return [];
  };

  // mvvm
  handleInputChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };
  //  回车
  handleEnter = (event) => {
    if (event.keyCode === 13) {
      const { inputValue } = this.state;
      this.allTaskList.push({
        value: inputValue.trim(),
        status: false,
      });
      this.setState({
        taskList: this.getCurrentShowList(),
        inputValue: "",
      });
    }
  };
  // 按钮点击回调
  handleBtnClick = (index) => {
    this.setState(
      {
        currentType: index,
      },
      () => {
        this.setState({
          taskList: this.getCurrentShowList(),
        });
      }
    );
  };
  //   更新任务状态
  changeStatus = (target) => {
    // const { taskList } = this.state;
    target.status = !target.status;
    this.setState({
      taskList: this.getCurrentShowList(),
    });
  };
  // 渲染所有按钮
  renderBtns = () => {
    const { currentType } = this.state;
    return BTN_LIST.map((item, index) => (
      <div
        className={`${styles["btn"]} ${
          index === currentType ? styles["red-border"] : ""
        }`}
        key={item}
        onClick={() => this.handleBtnClick(index)}
      >
        {item}
      </div>
    ));
  };

  // 渲染任务列表
  renderTaskList = () => {
    const { taskList = [] } = this.state;
    return taskList.map((task = {}, index) => {
      const { value, status } = task;
      return (
        <div className={styles["item"]} key={index}>
          <div
            className={styles["item-left"]}
            onClick={() => this.changeStatus(task)}
          >
            {status && "✔️"}
          </div>
          <div className={status ? styles["finish"] : ""}>{value}</div>
        </div>
      );
    });
  };

  render() {
    const { inputValue } = this.state;
    const btns = this.renderBtns();
    const taskArr = this.renderTaskList();
    return (
      <div className={styles["wrap"]}>
        <div className={styles["bar"]} />
        <div className={styles["content-wrap"]}>
          <h3 className={styles["title"]}>任务计划列表</h3>
          <h4 className={styles["add-title"]}>添加任务：</h4>
          <input
            className={styles["input"]}
            placeholder="回车添加任务"
            value={inputValue}
            onChange={this.handleInputChange}
            onKeyDown={this.handleEnter}
          />
          <div className={styles["mid"]}>
            <div className={styles["tip"]}>
              {this.allTaskList.filter((item) => item.status === false).length}
              个任务未完成
            </div>
            <div className={styles["btns"]}>{btns}</div>
          </div>
          <h4 className={styles["add-title"]}>任务列表</h4>
          <div className={styles["list"]}>{taskArr}</div>
        </div>
      </div>
    );
  }
}
