import "./App.css";
import QuestionForm from "./QuestionForm";
import MagicEightBall from "./MagicEightBall";
import { useState } from "react";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [answer, setAnswer] = useState("");
  const answers = [
    "yes, definetly",
    "most likely",
    "very doubtful",
    "ask again later",
    "it is certain",
    "my sources say no",
    "better not tell you now",
    "signs point to yes",
  ];

  const questionSubmitted = () => {
    setIsSubmitted(true);
    const pickedAnswer = answers[Math.floor(Math.random() * answers.length)];
    setAnswer(pickedAnswer);
  };
  return (
    <div className="App">
      <QuestionForm onSubmit={questionSubmitted} />
      <MagicEightBall answer={answer} isSubmitted={isSubmitted} />
    </div>
  );
}

export default App;
