import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import { useState } from "react"
import Log from "./components/Log"

function deriveActivePlayer(gameTurns) {
  let currentActivePlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === currentActivePlayer) {
    currentActivePlayer = 'O';
  }
  return currentActivePlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([])
  const activePlayer = deriveActivePlayer(gameTurns)

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns(prevTurns => {
      let currentActivePlayer = deriveActivePlayer(prevTurns);

      const updatedGameTurns = [{ positions: { row: rowIndex, col: colIndex }, player: currentActivePlayer }, ...prevTurns];

      return updatedGameTurns;

    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} gameTurns={gameTurns} />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  )
}

export default App
