import React from "react";
import AddTask from "./components/AddTask";
import FilterTable from "./components/FilterTable";

import styles from "./index.module.css";

export default class TodoList extends React.Component {
  state = {
    // inputValue: "",
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


  //  回车
  enter = (inputValue) => {
    this.allTaskList.push({
      value: inputValue.trim(),
      status: false,
    });
    this.setState({
      taskList: this.getCurrentShowList(),
    });
  };

  // 按钮点击回调
  handleBtnChange = (currentType) => {
    this.setState(
      {
        currentType,
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
    target.status = !target.status;
    this.setState({
      taskList: this.getCurrentShowList(),
    });
  };

  render() {
    // const { inputValue } = this.state;

    return (
      <div className={styles["wrap"]}>
        <div className={styles["bar"]} />
        <div className={styles["content-wrap"]}>
          <h3 className={styles["title"]}>任务计划列表</h3>
          <h4 className={styles["add-title"]}>添加任务：</h4>
          <AddTask enter={this.enter} />
          <FilterTable
            allTaskList={this.allTaskList}
            handleBtnChange={this.handleBtnChange}
            taskList={this.state.taskList}
            changeStatus={this.changeStatus}
          />
        </div>
      </div>
    );
  }
}
