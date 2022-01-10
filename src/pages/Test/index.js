import React, { Component, createRef, forwardRef } from "react";
import PropTypes from 'prop-types';

// import withFooter from '../../components/withFooter';

/**
 * props
 *  name: string  必传 
 *  
 */

 function Child (){
  const  a = 1;
  a = 2;
  return <div>child</div>
}
 class Test extends Component {
  constructor(props) {
    super(props);

  }
  handleClick = () => {
    const a =1;
    a =2;
  }

  render() {
    // console.log(this);
      return (
        <div onClick ={this.handleClick}>
          <Child /> 
        </div>
      );


  }
}



export default Test