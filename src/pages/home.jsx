import React from 'react';
import './home.css'
import Nav from '../Componets/layout/nav';
import Button from '../Componets/common/button'
import Scroll from '../Componets/common/scroll';

const Home = () => {
    return ( <>
   
        <Nav />
        <div className='backgroundimg'></div>
        <section className='s1'>
            <div className='circle'></div>
            <div className='div1'>
                <h3 className='title'>
                    <span>Your Case. Our Commitment. Total </span>
                    <span className='gold'>Victory.</span>
                </h3>
                <Button />
                <Scroll />
            </div>
        </section>
        <section id="section2" className="s2">
            ...
         </section>
    </> );
}
 
export default Home ;