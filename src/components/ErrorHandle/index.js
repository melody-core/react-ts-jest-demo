
import React from 'react';


export default class ErrorHandle extends React.Component{
    state = {
        hasError: false
    }

    static getDerivedStateFromError(){
        return {
            hasError: true
        }
    }

    // componentDidCatch(error){
    //     console.log('1', error);
    //     this.setState({
    //         hasError: true
    //     })
    //     console.error(error);
    // }

    render(){
        if(this.state.hasError){
            return (
                <div>这是一个兜底处理， 看起来好像是渲染挂掉了。具体的错误请在控制台查看</div>
            )
        }
        // eslint-disable-next-line react/prop-types
        return this.props.children
    }


}