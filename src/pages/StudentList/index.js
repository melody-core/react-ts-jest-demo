import React, { useState, useEffect, useRef } from "react";
import { xGetStudent } from "./utils";
import styles from "./index.module.css";

const StudentList = () => {
  // list-state
  const [studentList, setList] = useState([]); //  {id, name, age, address} []
  // name-input-ref
  const nameRef = useRef();
  // address-input-ref
  const addressRef = useRef();

  // 获取学生列表
  const getStudentList = (filter)=>{
    xGetStudent(filter).then((results) => {
        console.log("result", results);
        const dataSource = results.map((item) => {
          const {
            dob: { age },
            id: { value },
            name: { first, last },
            location: { country, city },
          } = item;
          return {
            age,
            name: first + " " + last,
            id: value,
            address: country + " " + city,
          };
        });
        setList(dataSource);
      });
  }
  useEffect(() => {
     getStudentList();
  }, []);

  // 搜索的回调
  const handleSearch = () => {
    const { value: name } = nameRef.current || {};
    const { value: address} = addressRef.current || {};
    getStudentList({
        name,
        address
    })
    
  }
  return (
    <div>
      <div className={styles["filter-wrap"]}>
        <div>
          姓名: <input ref={nameRef}/>
        </div>
        <div>
          住址: <input ref={addressRef}/>
        </div>
        <button onClick={handleSearch}>搜索</button>
      </div>
      <div className={styles["table-wrap"]}>
        <div className={styles["table"]}>
          <div className={styles["table-line"]}>
            <div>姓名</div>
            <div>年龄</div>
            <div>住址</div>
            <div>操作</div>
          </div>
          {studentList.map((item, index) => {
            const { name, age, address, id } = item;
            return (
              <div className={styles["table-line"]} key={index}>
                <div>{name}</div>
                <div>{age}</div>
                <div>{address}</div>
                <div>删除 编辑</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StudentList;
