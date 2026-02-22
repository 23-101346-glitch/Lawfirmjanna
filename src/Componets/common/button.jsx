import React from 'react';
import './buttons.css'

const Button = (props) => {
    return ( <>
    <button className='button1'>
        <h3 className='buttontext'>{props.text}</h3>
    </button>
    </> );
}
 
export default Button;