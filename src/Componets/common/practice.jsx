import React from 'react';
import './practice.css'

const Practice = (props) => {
    return ( <>
    <div className='practicediv'>
        <h3 className='ptitle'>{props.ptitle}</h3>
        <h3 className='pp'>{props.pp}</h3>
    </div>
    </> );
}
 
export default Practice;