// import { useState, useEffect } from "react";
import { useStudentList } from "./effect";
import { connect } from "react-redux";

import styles from "./index.module.css";

const StudentList = (props) => {
  console.log(props);
  const {
    student: { studentList = [], nameValue, addressValue },
    dispatch,
  } = props;

  const { handleSearch, handleInputChange } = useStudentList(dispatch);

  // studentListUI
  const studentListUI = studentList.map((item, index) => {
    const { name, age, address } = item;
    return (
      <div className={styles["table-line"]} key={index}>
        <div>{name}</div>
        <div>{age}</div>
        <div>{address}</div>
        <div>删除 编辑</div>
      </div>
    );
  });

  return (
    <div>
      <div className={styles["filter-wrap"]}>
        <div>
          姓名:{" "}
          <input
            value={nameValue}
            onChange={(e) => handleInputChange(e, "nameValue")}
          />
        </div>
        <div>
          住址:{" "}
          <input
            value={addressValue}
            onChange={(e) => handleInputChange(e, "addressValue")}
          />
        </div>
        <button onClick={() => handleSearch(nameValue, addressValue) }>搜索</button>
      </div>
      <div className={styles["table-wrap"]}>
        <div className={styles["table"]}>
          <div className={styles["table-line"]}>
            <div>姓名</div>
            <div>年龄</div>
            <div>住址</div>
            <div>操作</div>
          </div>
          {studentListUI}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(StudentList);


