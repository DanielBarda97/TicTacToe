import React from "react"
import { useSelector } from "react-redux"

function InfoPlayer(props) {
  const playerTurn = useSelector((state) => state.playerTurn)
  const turnNumber = useSelector((state) => state.turnNumber)

  return (
    <nav className="row info align-items-center mb-3">
      <div className="col-5">
        <span className="ticToe text-dark">React-Redux |</span> <h2 className="ticToe">Tic Tac Toe</h2>
      </div>
      <div className="col-7 p-2 text-end font-weight-bold">
        Player Turn: {playerTurn} | Turn Number: {turnNumber}
      </div>
    </nav>
  )
}

export default InfoPlayer
