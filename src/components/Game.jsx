import React, { useState } from 'react';
import Board from "./Board";
import {isWinner} from '../isWinner';
import Modal from './Modal';
import './Game.css';

const Game = () => {
  const players = ['X', 'O'];
  const randomPlayer = players[Math.floor(Math.random() * 2)]; //Makes a random choice out of 2 including the max

  const[board, setBoard] = useState(Array(9).fill(null));
  const[currentPlayer, setCurrentPlayer] = useState(randomPlayer);
  const[step, setStep] = useState(0);
  const winner = isWinner(board);

  const click = (i) => {
    const boardCopy = [...board];
  
    if(winner || boardCopy[i]){
      return;
    }
    boardCopy[i] = currentPlayer;
    setBoard(boardCopy);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    setStep(step => step +1);
  };

  const newGame = () => {
    window.location.reload();
  };
   
  return (
    <div className = "game">
      <Board boxes={board} click={click}/>
      {winner ? <Modal newGame={newGame} result = {`Player ${winner} wins!!!`}/> : ''}
      {step === 9 && !winner ? <Modal newGame={newGame} result = {"Draw"}/> : ''}
    </div>
  )
};
export default Game;