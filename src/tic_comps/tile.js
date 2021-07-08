import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTile } from '../actions/actions';

function Tile(props){
  let playerTurn = useSelector(state => state.playerTurn);
  let dispatch = useDispatch();

  const tileClicked = () => {
    if(props.ownedBy === 0){
      dispatch(changeTile(props.id,playerTurn))
    }
  }

  const whatToShow = () => {
    if(props.ownedBy === 1){
      return "X";
    }
    else if (props.ownedBy === 2) {
      return "O";
    }
    return "";
  }

  return(
    <div onClick={tileClicked} className="tile">
      {whatToShow()}
    </div> 
  )
}

export default Tile