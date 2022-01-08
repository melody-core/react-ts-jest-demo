
import { Component } from 'react';
import Counter from './components/Counter';
// hooks

class List extends Component{
    state= {
        a: 1
    }
    componentDidMount(){
        // setTimeout(() => {
        //     this.setState({
        //         a: 10
        //     })
        // }, 3000);
    }
    render(){
        console.log('this.state.a:', this.state.a)
        return (
            <div><Counter imgList={[
                "https://img0.baidu.com/it/u=3223778803,4285263053&fm=26&fmt=auto",
                "https://img0.baidu.com/it/u=1105049749,521431784&fm=26&fmt=auto",
                "https://img0.baidu.com/it/u=3977893647,556760560&fm=26&fmt=auto"
            ]} /></div>
        )
    }
}

export default List