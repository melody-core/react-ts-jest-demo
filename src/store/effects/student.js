
import { put, takeEvery, call } from 'redux-saga/effects';

import { getStudentList } from './../sevices/student';

// saga-effect

function* fetchStudentList(action) {
    const { filter } = action;
    const { results = [] } = yield call(getStudentList, filter);
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
  
  