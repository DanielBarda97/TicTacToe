import { CHANGE_TILE } from "../actions/actions"

const initState = {
  // 0 -> טייל נקי ,
  // 1 OR 2 -> belong to player 1 or 2
  board_ar: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  playerTurn: 1,
  scoreP1: 0,
  scoreP2: 0,
  // מספר תור בשביל לדעת אם יש תיקו
  turnNumber: 0,
  // כמה משחקים שיחקו
  gamePlayed: 0,
  gameOver:false,
  playerWin:0
}

export const TicReducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_TILE:
      return changeBoard(state, action)
    default:
      return state
  }
}

const changeBoard = (state, action) => {
  let temp_ar = [...state.board_ar]
  temp_ar[action.idTile] = action.playerNum
  return checkWinDraw({
    ...state,
    board_ar: temp_ar,
    turnNumber: state.turnNumber+1,
    playerTurn: action.playerNum === 1 ? 2 : 1,
    
  })
}

const checkWinDraw = (state) => {
  if(state.turnNumber == 9){
    return {...state, gameOver:true}
  }
  return state;
}