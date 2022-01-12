import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { xGetStudent } from "./../../pages/StudentList/utils";

const INIT_STATE = {
  studentList: [],
};

export const studentReducer = (state = INIT_STATE, action = {}) => {
  const { type, payload = {} } = action;
  switch (type) {
    case "studentList":
      const { dataSource = [] } = payload;
      return {
        studentList: dataSource
      };

    default:
      return state;
  }
};



// saga-effect

function* fetchStudentList() {
    console.log('执行啦~~~~');
  const results = yield call(xGetStudent);
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
  yield put({type:'studentList', payload: {
    dataSource
  }})
  
}


export function* studentListSaga() {
    yield takeEvery("getStudentList", fetchStudentList);
}


export default studentReducer;
