export default function GameOver({ winner, onClickRestart }) {
    return <div id="game-over">
        <h2>Game Over!</h2>
        {winner && <p>{winner} won!</p>}
        {!winner && <p>It's a tie!</p>}
        <p><button onClick={onClickRestart}>Restart </button></p>
    </div>
}