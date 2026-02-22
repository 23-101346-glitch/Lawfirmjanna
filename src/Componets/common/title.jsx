import React from 'react';
import './title.css';

const Title = ({ mainText, highlightText }) => {
  return (
    <h3 className="title">
      <span>{mainText} </span>
      <span className="gold">{highlightText}</span>
    </h3>
  );
};

export default Title;