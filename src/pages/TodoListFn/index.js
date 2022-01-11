// import { useState, useRef } from "react";

import AddTask from "./components/AddTask";
import  { useParams, useSearchParams } from 'react-router-dom'
import FilterTable from "./components/FilterTable";

import { useTableDataSource } from "./effect";

import styles from "./index.module.css";

const TodoListFn = () => {
  // const params = useParams();
  // const res = useLocation();
  const res = useSearchParams();
  const search = {};
  res[0].forEach( (value, key) => {
    search[key] = value;
  })
  console.log('res',search);
  const {
    enter,
    currentType,
    allTaskList,
    taskList,
    handleBtnChange,
    changeStatus,
  } = useTableDataSource();


  return (
    <div className={styles["wrap"]}>
      <div className={styles["bar"]} />
      <div className={styles["content-wrap"]}>
        <h3 className={styles["title"]}>任务计划列表</h3>
        <h4 className={styles["add-title"]}>添加任务：</h4>
        <AddTask enter={enter} />
        <FilterTable
          currentType={currentType}
          allTaskList={allTaskList}
          handleBtnChange={handleBtnChange}
          taskList={taskList}
          changeStatus={changeStatus}
        />
      </div>
    </div>
  );
};

export default TodoListFn;
