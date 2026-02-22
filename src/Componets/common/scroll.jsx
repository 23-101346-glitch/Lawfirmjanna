import React from 'react';
import './scroll.css';

const Scroll = () => {
  const handleScroll = () => {
    const section = document.getElementById('section2');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="scrolldiv" onClick={handleScroll}>
      <h3 className="scrolltext">SCROLL</h3>
      <div className="scrollicon"></div>
    </div>
  );
};

export default Scroll;