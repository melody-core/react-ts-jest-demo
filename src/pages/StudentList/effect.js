
import { useState, useEffect } from "react";

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
export const useTableDataSource = (dispatch) => {
  // 获取学生列表
  const getStudentList = (filter) => {
    dispatch({
      type: 'getStudentList',
      filter
    })
  };
  // didMount的时候初始化一下数据。
  useEffect(() => {
    getStudentList();
  }, []);
  return {
      getStudentList,
  }
}


// 处理studentList页面的业务逻辑钩子
export const useStudentList = (dispatch) => {
  const handleInputChange = (e, key) => {
    const { value } = e.target;
    //  setName(value);
    dispatch({
      type: "update",
      payload: {
        [key]: value,
      },
    });
  };
  // 搜索的回调
  const handleSearch = (nameValue, addressValue) => {
    dispatch({
      type: "getStudentList",
      filter: {
        name: nameValue,
        address: addressValue,
      },
    });
  };
  // didMount的时候初始化一下数据。
  useEffect(() => {
    dispatch({
      type: "getStudentList",
    });
  }, []);
  return  {
    handleSearch,
    handleInputChange

  }
}