import { useState } from "react";
import QUESTIONS from "../questions";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestion = userAnswers.length;

    function handleSelectAnswer(answer) {
        setUserAnswers((prevAnswers) => [...prevAnswers, answer]);
    }

    return (
        <div id="quiz">
            <div id="question">
                <h2>{QUESTIONS[activeQuestion].text}</h2>
                <ul id="answers">
                    {QUESTIONS[activeQuestion].answers.map(answer => {
                        return <li key={answer} className="answer"><button onClick={() => handleSelectAnswer(answer)}>{answer}</button></li>
                    })}
                </ul>
            </div>
        </div>
    )
}