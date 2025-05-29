import { useRef, useState } from "react"
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef();
    const dialog = useRef();
    const [remainingTime, setRemainingTime] = useState(targetTime * 1000);
    const timerIsActive = 0 <= remainingTime && remainingTime < targetTime * 1000;

    if (remainingTime <= 0) {
        clearInterval(timer.current);
        dialog.current.showModal();
    }

    function handleReset(){
        setRemainingTime(targetTime * 1000);
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setRemainingTime(remainingTime => remainingTime - 10 );
            // dialog.current.showModal();
        }, 10);
    }

    function handleStop() {
        clearInterval(timer.current)
        dialog.current.showModal();
    }


    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} remainingTime={remainingTime} handleReset={handleReset}/>
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime === 1 ? '' : 's'}
                </p>
                <p><button onClick={timerIsActive ? handleStop : handleStart}>{timerIsActive ? 'Stop' : 'Start'}</button></p>
                <p className={timerIsActive ? 'active' : ''}>
                    {timerIsActive ? 'Timer is running' : 'Timer unactive'}
                </p>
            </section>
        </>)
}