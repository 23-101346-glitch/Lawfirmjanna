import React from 'react';
import './nav.css'

const Nav = () => {
    return ( <>
    <header>
        <h1 className="logo">
            <span className="lex">Lex</span>
            <span className="ora">ora</span>
        </h1>
        <nav>
            <h2>HOME</h2>
             <h2>ABOUT</h2>
              <h2>PRACTICE</h2>
               <h2>TEAM</h2>
                <h2>CONTACT </h2>
                 <h2>WHY US </h2>
            
        </nav>
        <div className='getintouch'>
            <h2> GET IN TOUCH </h2>
            <div className='darkmode'></div>
        </div>
    </header>
    </> );
}
 
export default Nav;