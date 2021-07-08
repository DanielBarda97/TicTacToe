import React from "react"
import { useSelector } from "react-redux"

function InfoPlayer(props) {
  const playerTurn = useSelector((state) => state.playerTurn)
  const turnNumber = useSelector((state) => state.turnNumber)

  return (
    <nav className="row bg-dark text-white align-items-center mb-3">
      <div className="col-lg-3">
        <h2 className="text-info">Tic tac toe</h2>
      </div>
      <div className="col-lg-3 p-2">
        Player Turn: {playerTurn} | Turn Number: {turnNumber}
      </div>
    </nav>
  )
}

export default InfoPlayer
