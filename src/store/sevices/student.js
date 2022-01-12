import { xGet } from './../../utils/xFtech';


// 获取学生列表数据的方法。
export const getStudentList = (params) => {
    return xGet('http://127.0.0.1:7001/student/getList', params);
}
