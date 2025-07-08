import { useState } from "react";
import QUESTIONS from "../questions";

import quizOver from "../assets/quiz-complete.png"
import QuestionTimer from "./QuestionTimer";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const isOverQuiz = userAnswers.length === QUESTIONS.length;

    function handleSelectAnswer(answer) {
        setUserAnswers((prevAnswers) => [...prevAnswers, answer]);
    }

    if (isOverQuiz) {
        return (
            <div id="summary">
                <img src={quizOver} alt="Quiz Complete" />
                <h2>Quiz Completed!</h2>
            </div>
        )
    }
    
    const activeQuestion = userAnswers.length;
    const shuffledAnswers = QUESTIONS[activeQuestion].answers.sort(() => Math.random() - 0.5);

    return (
        <div id="quiz">
            <div id="question">
                <QuestionTimer time={5} onTimeout={()=> handleSelectAnswer(null)}/>
                <h2>{QUESTIONS[activeQuestion].text}</h2>
                <ul id="answers">
                    {shuffledAnswers.map(answer => {
                        return <li key={answer} className="answer"><button onClick={() => handleSelectAnswer(answer)}>{answer}</button></li>
                    })}
                </ul>
            </div>
        </div>
    )
}