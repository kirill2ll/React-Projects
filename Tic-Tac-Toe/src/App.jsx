import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import { useState } from "react"
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from "./winning-combinations"
import GameOver from "./components/GameOver"

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
}
const INITIAL_GAME_BOARD = [
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

function deriveWinner(gameBoard, playersName){
  let winner = null;
  WINNING_COMBINATIONS.forEach(combination => {
    const firstSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSymbol = gameBoard[combination[2].row][combination[2].column];

    if (firstSymbol !== null && firstSymbol === secondSymbol && firstSymbol === thirdSymbol) {
      winner = playersName[firstSymbol];
    }
  })

  return winner;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map(arr => [...arr])];
  gameTurns.forEach(turn => {
    const { row, col } = turn.positions;
    gameBoard[row][col] = turn.player;
  });
  return gameBoard;
}

function App() {
  const [gameTurns, setGameTurns] = useState([])
  const [playersName, setPlayersName] = useState(PLAYERS)

  const activePlayer = deriveActivePlayer(gameTurns)
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, playersName);
  const isDraw = gameTurns.length === 9 && winner === null;
 

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns(prevTurns => {
      let currentActivePlayer = deriveActivePlayer(prevTurns);

      const updatedGameTurns = [{ positions: { row: rowIndex, col: colIndex }, player: currentActivePlayer }, ...prevTurns];

      return updatedGameTurns;

    })
  }

  function handleRestart() {
    setGameTurns([])
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayersName(prevPlayersName => {
      return {
        ...prevPlayersName,
        [symbol]: newName
      }
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name={PLAYERS.X} symbol="X" isActive={activePlayer === 'X'} onSaveName={handlePlayerNameChange} />
          <Player name={PLAYERS.O} symbol="O" isActive={activePlayer === 'O'} onSaveName={handlePlayerNameChange} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} gameBoard={gameBoard} />
        {(winner || isDraw) && <GameOver winner={winner} onClickRestart={handleRestart} />}
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  )
}

export default App
