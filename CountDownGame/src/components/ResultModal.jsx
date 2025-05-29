export default function ResultModal({ ref, result, targetTime }) {
    return <dialog ref={ref} className="result-modal">
        <h2>You {result}</h2>
        <p>Your target time was {targetTime} seconds.</p>
        <p>You stopped at </p>
        <form method="dialog">
            <button>OK</button>
        </form>
    </dialog>
}