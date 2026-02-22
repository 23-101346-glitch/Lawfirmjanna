import React from 'react';
import './numbers.css'

const Number = (props) => {
    return ( <>
    <div className='ndiv'>
        <h3 className='numbertext'>{props.num}</h3>
        <h3 className='numberp'>{props.numbp}</h3>
    </div>
    
    </> );
}
 
export default Number;