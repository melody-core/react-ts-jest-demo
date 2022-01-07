
import { Component } from 'react';
import Counter from './components/Counter';
// hooks

class List extends Component{
    COUNT = 0;
    componentDidMount(){
        setInterval(() => {
            this.forceUpdate()
        }, 3000);
    }
    render(){
        this.COUNT += 1;
        console.log(this.COUNT)
        return (
            <div><Counter /></div>
        )
    }
}

export default List