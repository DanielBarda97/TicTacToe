import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTile } from '../actions/actions';

function Tile(props) {
  let playerTurn = useSelector(state => state.playerTurn);
  let gameOver = useSelector(state => state.gameOver);
  let dispatch = useDispatch();


  const tileClicked = () => {
    if (props.ownedBy === 0 && !gameOver) {
      dispatch(changeTile(props.id, playerTurn));
    }
  }

  const whatToShow = () => {
    if (props.ownedBy === 1) {
      return "X";
    }
    else if (props.ownedBy === 2) {
      return "O"
    }
    return "";
  }

  return (
    <div onClick={tileClicked} className="tile h1 m-0">
      {whatToShow()}
    </div>
  )
}


export default Tile