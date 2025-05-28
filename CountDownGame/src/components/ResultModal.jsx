export default function ResultModal({ result, targetTime }) {
    return <dialog className="result-modal">
        <h2>You {result}</h2>
        <p>Your target time was {targetTime} seconds.</p>
        <p>You stopped at </p>
        <form method="dialog">
            <button>OK</button>
        </form>
    </dialog>
}