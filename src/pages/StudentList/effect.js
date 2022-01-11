
import { useState, useEffect } from "react";
import { xGetStudent } from "./utils";

// 副作用-筛选功能的业务逻辑
export const useFilter = () => {
  // name-input-ref
  const [nameValue, setName] = useState("");
  //   const nameRef = useRef();
  const [addressValue, setAddress] = useState("");

  // name - onchange
  const handleNameChange = (e) => {
    const { value } = e.target;
    setName(value);
  };
  // address- onchange
  const handleAddressChange = (e) => {
    const { value } = e.target;
    setAddress(value);
  };
  // 搜索的回调
  const handleSearch = (getStudentList) => {
    // const { value: name } = nameRef.current || {};
    // const { value: address} = addressRef.current || {};
    getStudentList({
      name: nameValue,
      address: addressValue,
    });
  };
  return {
    nameValue,
    addressValue,
    handleNameChange,
    handleAddressChange,
    handleSearch
  }
};


// 副作用-控制table的数据源和业务逻辑
export const useTableDataSource = () => {
      // list-state
  const [studentList, setList] = useState([]); //  {id, name, age, address} []

  // 获取学生列表
  const getStudentList = (filter) => {
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
  };
  // didMount的时候初始化一下数据。
  useEffect(() => {
    getStudentList();
  }, []);

  return {
      getStudentList,
      studentList
  }
}