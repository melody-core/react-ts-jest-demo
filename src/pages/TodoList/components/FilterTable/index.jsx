import React from "react";

import styles from "./index.module.css";

const BTN_LIST = ["所有任务", "未完成的任务", "完成的任务"];

export default class FilterTable extends React.Component {

  // 渲染所有按钮
  renderBtns = () => {
    console.log("render");
    const { currentType } = this.props;

    return BTN_LIST.map((item, index) => (
      <div
        className={`${styles["btn"]} ${
          index === currentType ? styles["red-border"] : ""
        }`}
        key={item}
        onClick={() => this.props.handleBtnChange(index)}
      >
        {item}
      </div>
    ));
  };

    
  // 渲染任务列表
  renderTaskList = () => {
    const { taskList = [] } = this.props;
    return taskList.map((task = {}, index) => {
      const { value, status } = task;
      return (
        <div className={styles["item"]} key={index}>
          <div
            className={styles["item-left"]}
            onClick={() => this.props.changeStatus(task)}
          >
            {status && "✔️"}
          </div>
          <div className={status ? styles["finish"] : ""}>{value}</div>
        </div>
      );
    });
  };
  render() {
    const btns = this.renderBtns();
    const taskArr = this.renderTaskList();
    return (
      <>
        <div className={styles["mid"]}>
          <div className={styles["tip"]}>
            {
              this.props.allTaskList.filter((item) => item.status === false)
                .length
            }
            个任务未完成
          </div>
          <div className={styles["btns"]}>{btns}</div>
        </div>
        <h4 className={styles["add-title"]}>任务列表</h4>
        <div className={styles["list"]}>{taskArr}</div>
      </>
    );
  }
}
