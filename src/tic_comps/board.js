import React from "react"
import Tile from "./tile"
import InfoPlayer from "./infoPlayer"
import { useSelector } from "react-redux"

function Board(props) {
  let board_ar = useSelector((state) => state.board_ar)
  let gameOver = useSelector((state) => state.gameOver)

  return (
    <div>
      <InfoPlayer />
      <div className="board mx-auto row">
        {board_ar.map((item, i) => {
          // ownedBy -> can be 0,1,2
          return <Tile key={i} id={i} ownedBy={item} />
        })}
      </div>
      <h2>
        {/* TODO: Show game over and who win or draw */}
        {gameOver ? "GameOver" : ""}
      </h2>
    </div>
  )
}

export default Board
