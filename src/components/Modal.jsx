import React from "react";
import './Modal.css';

const Modal = (props) =>  {
    
  return (
    <div className="modal-wrapper">
      <div className="modal-window">
         <div className="inside">{props.result}</div>
         <button className="btn-close dynamic-shadow" onClick={props.newGame}>New game</button>
      </div>
    </div> 
  )
}

export default Modal;