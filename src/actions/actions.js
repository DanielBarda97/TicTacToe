export const CHANGE_TILE = "CHANGE_TILE";
export const DECLARE_WINNER = "DECLARE_WINNER";
//TODO scoreP1 and scoreP2 and gamePlayed


export const changeTile = (_idTile,_playerNum) => {
  return {
    type:CHANGE_TILE , 
    idTile:_idTile, 
    playerNum:_playerNum 
  }
}

export const declareWinner = (_whoWin) => {
  return{
    type:DECLARE_WINNER,
    whoWin:_whoWin
  }
}
