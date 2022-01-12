const INIT_STATE = {
  addressValue: "",
  nameValue: "",
  studentList: [],
};

export const studentReducer = (state = INIT_STATE, action = {}) => {
  const { type, payload = {} } = action;
  const { dataSource = [] } = payload;
  switch (type) {
    case "studentList":
      return {
        ...state,
        studentList: dataSource,
      };
    case "update":
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default studentReducer;
