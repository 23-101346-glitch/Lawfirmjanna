import React from 'react';
import './home.css'
import Nav from '../Componets/layout/nav';

const Home = () => {
    return ( <>
    <body>
        <Nav />
        <section className='s1'>
            <div className='circle'></div>
            <div className='div1'>
                <h3 className='title'>
                    <span>Your Case. Our Commitment. Total </span>
                    <span className='gold'>Victory.</span>
                </h3>
            </div>
        </section>
    </body>
    
    </> );
}
 
export default Home ;