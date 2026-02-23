import React from 'react';
import './team.css'

const Team = (props) => {
    return ( <>
   <div className="team-card">
  <img src={props.img} alt={props.teamtext} className="team-image" />
  <div className="overlay">
    <h3 className="teamtext">{props.teamtext}</h3>
    <p className="teamp">{props.teamp}</p>
    <span>{props.teams}</span>
  </div>
</div>
    </>);
}
 
export default Team; 