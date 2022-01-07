import { createStore, combineReducers } from "redux";

import countReducer from './reducers/count'
import colorReducer from './reducers/color'


const reducers = combineReducers({
  count: countReducer,
  color: colorReducer
})


const store = createStore(reducers);

export default store;
