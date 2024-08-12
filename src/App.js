import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Question from './components/Questions/Question';

// static qs data
import { QUESTIONS } from './util/questions';

function App() {
  // state for checking the question index
  const [currentQuestionIndex, setCurrectQuestionIndex] = useState(0);
  const [allDone, setAllDone] = useState(false);


  // handle ans and showing the data locally
  const [answers, setAnswers] = useState([]);


  // for handling ans we can change it if we need to check the ans are correct or wrong. . .
  const handleAns = (ans) => {
    console.log(currentQuestionIndex); 
    if (currentQuestionIndex >= QUESTIONS.length) {
      return;
    }
    if(currentQuestionIndex < QUESTIONS.length - 1){ 
      setCurrectQuestionIndex(currentQuestionIndex + 1);
    }
    

    setAnswers([...answers, { question: QUESTIONS[currentQuestionIndex], ans }])
  }
  return (
    <div className='' style={{ width: '100vw', height: '100vh' }}>
      <Navbar />
      <Question question={QUESTIONS[currentQuestionIndex]} onAns={handleAns} allAnswered={allDone} answers={answers} />
    </div>
  )
}

export default App