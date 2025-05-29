import { useRef, useState } from "react"
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef();
    const dialog = useRef();
    const [timerStarted, setTimerStarted] = useState(false);
    const [timeIsOver, setTimeIsOver] = useState(false);

    function handleStart() {
        timer.current = setTimeout(() => {
            setTimeIsOver(true);
            dialog.current.showModal();
        }, targetTime * 1000);
        setTimerStarted(true);
    }

    function stopTimer() {
        clearTimeout(timer.current)
        setTimerStarted(false)
    }


    return(
    <>
        <ResultModal ref={dialog} targetTime={targetTime} result="lost"/>
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime === 1 ? '' : 's'}
            </p>
            <p><button onClick={timerStarted ? stopTimer : handleStart}>{timerStarted ? 'Stop' : 'Start'}</button></p>
            <p className={timerStarted ? 'active' : ''}>
                {timerStarted ? 'Timer is running' : 'Timer unactive'}
            </p>
        </section>
    </>)
}