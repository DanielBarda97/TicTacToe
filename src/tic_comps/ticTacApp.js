import React from "react"
import Board from "./board"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { TicReducer } from "../reducers/ticReducer"

const composeEnhancers = composeWithDevTools({})
const myStore = createStore(TicReducer, composeEnhancers())

function TicTacApp(props) {
  return (
    <Provider store={myStore}>
      <div className="container mt-3">
        <Board />
      </div>
    </Provider>
  )
}

export default TicTacApp
