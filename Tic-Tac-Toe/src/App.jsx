import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import { useState } from "react"
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from "./winning-combinations"
import GameOver from "./components/GameOver"

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

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

  let gameBoard = initialGameBoard;
  gameTurns.forEach(turn => {
    const { row, col } = turn.positions;
    gameBoard[row][col] = turn.player;
  });

  let winner = null;
  const isDraw = gameTurns.length === 9 && winner === null;

  WINNING_COMBINATIONS.forEach(combination => {
    const firstSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSymbol = gameBoard[combination[2].row][combination[2].column];

    if (firstSymbol !== null && firstSymbol === secondSymbol && firstSymbol === thirdSymbol) {
      winner = firstSymbol;
    }
  })

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
        <GameBoard onSelectSquare={handleSelectSquare} gameBoard={gameBoard} />
        {(winner || isDraw) && <GameOver winner={winner} />}
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  )
}

export default App
