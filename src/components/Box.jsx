import React from 'react';
import './Box.css';

const Box = (props) => { 
  return(
    <button className = "box dynamic-shadow-parent" onClick={props.click}> {props.value} 
    </button>
  )
}

export default Box;