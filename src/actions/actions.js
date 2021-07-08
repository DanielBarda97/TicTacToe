export const CHANGE_TILE = "CHANGE_TILE"
//TODO scoreP1 and scoreP2 and gamePlayed

export const changeTile = (_idTile, _playerNum) => {
  return {
    type: CHANGE_TILE,
    idTile: _idTile,
    playerNum: _playerNum,
  }
}
