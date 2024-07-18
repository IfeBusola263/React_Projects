import { useState } from "react";
import QUESTIONS from "../questions";
import quizCompletedLogo from "../assets/quiz-complete.png";

export default function Quiz() {
  const [playerAnswer, setPlayerAnswer] = useState([]);
  const activeQuestion = playerAnswer.length;
  const quizIsCompleted = activeQuestion === QUESTIONS.length;

  function handleSelectedAnswer(selectedAnswer) {
    setPlayerAnswer((prevAnswers) => {
      return [...prevAnswers, selectedAnswer];
    });
  }

  if (quizIsCompleted) {
    return (
      <div id="summary">
        <img src={quizCompletedLogo} alt="" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }
  
  const shuffedAnswers = [...QUESTIONS[activeQuestion].answers];
  shuffedAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="questions">
        <h2>{QUESTIONS[activeQuestion].text}</h2>
        <ul id="answers">
          {shuffedAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectedAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
