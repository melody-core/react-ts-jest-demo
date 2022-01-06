import React from "react";
import eventStore from "../../../utils/eventStore";



class Child extends React.Component{
    state = {
        count: null
    }
    fn1 = (data) => {
       this.setState({
           count: data
       })
    }
    componentDidMount(){
        eventStore.on('sendCount', this.fn1)
    }
    render(){
        const {count} = this.state;
        return (
            <div>我是Child，我要显示来自最外层组件Test的数据count: {count}</div>
        )
    }
}
export default Child;
