export default function Log({ gameTurns }) {
    return <ol id="log">
        {gameTurns.map(turn => {
            return <li key={`${turn.positions.row}${turn.positions.col}`}>
                Player: {turn.player}, Row: {turn.positions.row}, Col: {turn.positions.col}
            </li>
        })}
    </ol>
}