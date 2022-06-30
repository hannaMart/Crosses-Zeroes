import React from 'react';
import Box from './Box';
import './Board.css';

const Board = ({boxes, click})=> {
  return (
    <div className = "board">
      {
        boxes.map((box, i)=> (
          <Box key={i} value = {box} click = {() => click(i)}/>
        ))
      }
    </div>
  ) 
}
export default Board;