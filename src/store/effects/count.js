
import { put, takeEvery, call } from 'redux-saga/effects';

const mockFetch = ()=> Promise.resolve(10086);



function *log1(){
    console.log('log1');
    const res = yield call(mockFetch);
    yield put({
        type: 'GET_COUNT_MOCK', 
        newCount: res 
    })
}





function *setListener(){
    yield takeEvery('GET_COUNT', log1);
}


export default setListener;