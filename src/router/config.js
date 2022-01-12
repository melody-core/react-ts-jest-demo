
// import App from './../App';
import Test from './../pages/Test'
import TodoListFn from './../pages/TodoListFn';
import StudentList from './../pages/StudentList';


export default  [{
    path: '/',
    Component: Test
}, {
    path: '/test',
    Component: Test
}, {
    path: '/TodoList/:id',
    Component: TodoListFn
}, {
    path: '/studentList',
    Component: StudentList
}]