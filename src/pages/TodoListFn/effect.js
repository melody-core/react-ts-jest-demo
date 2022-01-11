import { useRef, useState } from "react";


// 控制table展示数据的自定义hook
export const useTableDataSource = () => {
  // 用来记录所有任务列表的Ref
  const allTaskListRef = useRef([]); // { current: []}
  // 当前视图展示的任务列表
  const [taskList, setTaskList] = useState([]);
  // 当前展示的任务类型 - 0是所有 1是未完成 2是已完成
  const [currentType, setCurrentType] = useState(0);

  //所有任务列表
  const allTaskList = allTaskListRef.current;
  // 根据任务类型决定当前展示的任务列表
  const getCurrentShowList = (nextCurrentType = currentType) => {
    if (nextCurrentType === 0) {
      return [...allTaskList]; // []
    }
    if (nextCurrentType === 1) {
      return allTaskList.filter((item) => item.status === false); //[]
    }
    if (nextCurrentType === 2) {
      return allTaskList.filter((item) => item.status === true);
    }
    return [];
  };
  // 点击类型按钮的回调-改变展示类型
  const handleBtnChange = (currentType) => {
    console.log("current", currentType);
    setCurrentType(currentType);
    setTaskList(getCurrentShowList(currentType));
  };

  // 回车回调-添加任务
  const enter = (value) => {
    allTaskList.push({
      value,
      status: false,
    });
    setTaskList(getCurrentShowList());
  };

  // 改变某一项任务的状态；
  const changeStatus = (target) => {
    target.status = !target.status;
    setTaskList(getCurrentShowList());
  };

  return {
    enter,
    currentType,
    allTaskList,
    taskList,
    handleBtnChange,
    changeStatus

  }
};
