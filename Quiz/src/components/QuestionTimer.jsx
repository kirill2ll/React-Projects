import { useEffect, useState } from "react";

export default function QuestionTimer({ time, onTimeout }) {
    const [progress, setProgress] = useState(time * 1000);

    useEffect(() => {
        setTimeout(onTimeout, time * 1000);
    }, [onTimeout, progress]);
    useEffect(() => {
        setInterval(() => {
            setProgress(oldProgress => oldProgress - 100)
        }, 100)
    }, []);
    return <progress id="question-time" value={progress} max={time * 1000} />
}