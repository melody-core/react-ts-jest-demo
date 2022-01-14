
// import App from './../App';
import Test from './../pages/Test'
import TodoListFn from './../pages/TodoListFn';
import StudentList from './../pages/StudentList';
import HookComponent from './../pages/Hooks';
import EchartsPage  from './../pages/EchartsPage'


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
}, {
    path: '/hooks',
    Component: HookComponent
}, {
    path: '/echarts',
    Component: EchartsPage
}]