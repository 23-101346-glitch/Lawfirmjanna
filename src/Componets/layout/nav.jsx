import React, { useState, useEffect } from 'react';
import './nav.css';

const Nav = () => {
  const [isLight, setIsLight] = useState(false); // false = dark mode

  useEffect(() => {
    // Apply the theme on <html>
    const html = document.documentElement;
    if (isLight) {
      html.dataset.theme = 'light';
    } else {
      html.dataset.theme = ''; // default dark
    }
  }, [isLight]);

  const toggleTheme = () => {
    setIsLight(!isLight); // toggle the state
  };

  return (
    <header>
      <h1 className="logo">
        <span className="lex">Lex</span>
        <span className="ora">ora</span>
      </h1>

      <nav>
        <h2><a href="#home">HOME</a></h2>
        <h2><a href="#section2">ABOUT</a></h2>
        <h2><a href="#practice">PRACTICE</a></h2>
        <h2><a href="#team">TEAM</a></h2>
        <h2><a href="#contact">CONTACT</a></h2>
        <h2><a href="#why-us">WHY US</a></h2>
      </nav>

      <div className="getintouch">
        <h2>GET IN TOUCH</h2>
        {/* Your toggle */}
        <div className="darkmode" onClick={toggleTheme}></div>
      </div>
    </header>
  );
};

export default Nav;