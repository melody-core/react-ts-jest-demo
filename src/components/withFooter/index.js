
import React from 'react';

const withFooter = (WrapedComponent) => {
    return function NewCompoennt(props){
        return (
            <>
            <WrapedComponent {...props}/>
            <div>
                最终解释权归六弦所有
            </div>
        </>
        )
    }
}


export default withFooter