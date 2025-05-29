import { createPortal } from "react-dom";

export default function ResultModal({ ref, remainingTime, targetTime, handleReset }) {
    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(1);
    const score = ((1 - remainingTime / (targetTime * 1000)) * 100).toFixed(2)

    return createPortal(<dialog ref={ref} className="result-modal">
        {userLost && <h2>You lost</h2>}
        {!userLost && <h2>Your score is {score}</h2>}
        <p>Your target time was {targetTime} seconds.</p>
        <p>You stopped at {formattedRemainingTime} seconds.</p>
        <form method="dialog">
            <button onClick={handleReset}>OK</button>
        </form>
    </dialog>, document.getElementById("modal")
    );
}