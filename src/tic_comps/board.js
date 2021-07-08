import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { declareWinner } from '../actions/actions';
import InfoPlayer from './infoPlayer';
import Tile from './tile';

function Board(props) {
  let dispatch = useDispatch();
  let board_ar = useSelector(state => state.board_ar);
  let gameOver = useSelector(state => state.gameOver);
  let turnNumber = useSelector(state => state.turnNumber);
  let playerWin = useSelector(state => state.playerWin);

  useEffect(() => {
    checkWinDraw()
  }, [board_ar])

  const checkWinDraw = () => {
    let whoWin = 0;
    let combo_win = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    combo_win.map(combo => {
      let tile1 = combo[0];
      let tile2 = combo[1];
      let tile3 = combo[2];
      if (board_ar[tile1] === board_ar[tile2] && board_ar[tile2] === board_ar[tile3] && board_ar[tile1] !== 0) {
        whoWin = board_ar[tile1]
      }
    })
    if (whoWin > 0) {
      dispatch(declareWinner(whoWin))
    }
    if (turnNumber >= 9) {
      dispatch(declareWinner(0))
    }
  }

  const checkGameOver = () => {
    let st = ""
    let win_ar = ["Draw", "Player 1 win", "Player 2 win"];
    if (gameOver) {
      st += "Game over! " + win_ar[playerWin];
    }
    return st;
  }


  return (
    <div>
      <InfoPlayer />
      <div className="board mx-auto row">
        {board_ar.map((item, i) => {
          // ownedBy -> can be 0,1,2   למי שייך בעצם הטייל
          // 0 -> לאף שחקן
          return (

            <Tile key={i} id={i} ownedBy={item} />
          )
        })}
      </div>
      <h2>
        {checkGameOver()}
      </h2>
    </div>
  )
}

export default Board