import { useEffect, useState } from "react";

export default function QuestionTimer({ time, onTimeout }) {
    const [progress, setProgress] = useState(time * 1000);

    useEffect(() => {
        const timeout = setTimeout(onTimeout, time * 1000);
        return () => clearTimeout(timeout);
    }, [onTimeout, time]);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                const next = prev - 100;
                if (next <= 0) {
                    clearInterval(interval);
                }
                return next;
            });
        }, 100);

        return () => clearInterval(interval);
    }, []);
    return <progress id="question-time" value={progress} max={time * 1000} />
}