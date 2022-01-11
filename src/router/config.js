
import App from './../App';
import Test from './../pages/Test'
import TodoListFn from './../pages/TodoListFn';


export default  [{
    path: '/',
    Component: App
}, {
    path: '/test',
    Component: Test
}, {
    path: '/TodoList/:id',
    Component: TodoListFn
}]