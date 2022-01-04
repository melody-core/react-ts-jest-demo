
## react
> react  + react-dom 为什么分两个包？

因为react在设计之初就有跨平台的野望，所以react本身只专注vDom，具体到客户端的实现转换，有其他包来处理(react-dom for h5， react-native for native)。

<img src="./readme_static/react核心库.png">

## react-CDN-引入
为什么除了react/react-dom之外还要引入babel？
+ 为了解析jsx(html无法识别这种语法糖)

## 官方脚手架项目初始化

1. 初始化
```shell
npx create-react-app [project-name]
```

2. 配置项抽离
```shell
npm run eject
```

## jsx

1. 在react中，jsx是React.createElement的语法糖。
> createElement(type, props, children);

2. jsx内嵌入js表达式，只需要在js表达式外套一个花括号即可。

3. jsx的插槽可以嵌入数组，这意味着列表渲染直接嵌入数组就可以了。

4. jsx中给元素添加类名，不能用class(因为它与关键字class冲突)，要用className



## 组件的本质即函数（类）

> react中，常规模式下，有两种类型组件。
注意点：
+ 组件必须以大驼峰形式命名，其他规范以小驼峰为准。
+ 严格的**单项数据流**！跟vue不一样，在react组件中，组件自身的props是只读的。
### 函数式组件
形如
```jsx
const Box = (props) => {
    return (
        <div>box</div>
    )
}
```
特点：
1. 就是函数啦，而且被标签化使用的时候,没有this；
2. 每次reRender，其实就是重新执行一遍这个函数。

注意点：
1. 截止到16.8.0版本之前，函数式组件没有自身的状态(state)，也无法维护内部的值(每次reRender，代表这个函数被重新执行),因此我们通常会用它来写一些纯UI组件(只关注视图，数据从props中获取)。

2. 待续

### 类组件
形如
```jsx
class Box extends React.Component{
    render(){
        return (
            <div>box</div>
        )
    }
}
```
注意点：
1. 使用class来声明;
2. 继承自React.Component等react给提供的原型机(组件父类);
3. 必须具备render函数;
4. render函数必须要有返回值;

特点：
1. 就是写一个子类, 注意类组件里有this。
2. 每次reRender其实是执行了this.render这个函数。
3. 自带特殊的实例属性
    + props: 属性。
    + state: 状态，用this.setState去更新state时，组件视图会因此更新。原来是this.setState在更新状态后，会调用this.render。
4. 原型链上自带的特殊属性或方法
    + setState: 两种使用方式如下:
        + this.setState(assignState, callback); assignState是一个合并对象。注意，常规形势下，这是表现是异步的。所以第二个callback可以用来写入state更新后的操作。
        + thi.setState(setFn)


### react中的事件
给vDom添加事件，只需添加onEventName即可。
```jsx
<div onClick={this.handleBoxClick}>+</div>
```
要注意的是，我们其实给vDom添加的是react自己封装的“合成事件”，它在映射到dom时，会被代理到挂载节点上。
(
    拓展: 17.0.1版本之前，是代理到document文档上。 17.s0.1后变动为root节点，即ReactDOM.render(App, rootEl)中的rootEl。
)


### 补充： es6-class
> class是构造函数的语法糖。
```js
class Demo {};
typeof Demo;
// 返回 "function"
```


### react 生命周期钩子
> 不管是什么版本，都分三个阶段

1. 初始化阶段
2. 更新阶段(两种常态下引发更新的方式: this.setState ;   父组件更新;)
3. 卸载阶段


+ 16.0.0版本至今
<img src="./readme_static/react生命周期钩子16.0.0.png">









