import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';

import countReducer from './reducers/count'
import colorReducer from './reducers/color'
import studentReducer from './reducers/studentList'

import { studentListSaga } from './effects/student';
import setListener  from './effects/count';

// 返回一个中间件实例
const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
  count: countReducer,
  color: colorReducer,
  student: studentReducer
})


const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(studentListSaga);
sagaMiddleware.run(setListener);
export default store;
