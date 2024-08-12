import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Question from './components/Questions/Question';
import "./App.css"

// static qs data
import { QUESTIONS } from './util/questions';

function App() {
  // state for checking the question index
  const [currentQuestionIndex, setCurrectQuestionIndex] = useState(0);
  const [allDone, setAllDone] = useState(false);

  // state management for render function handle
  const [childRenderFunction, setChildRenderFunction] = useState(null);


  // handle ans and showing the data locally
  const [answers, setAnswers] = useState([]);


  // for handling ans we can change it if we need to check the ans are correct or wrong. . .
  const handleAns = (ans) => {
    console.log(currentQuestionIndex);
    if (currentQuestionIndex >= QUESTIONS.length) {
      return;
    }
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrectQuestionIndex(currentQuestionIndex + 1);
    }


    setAnswers([...answers, { question: QUESTIONS[currentQuestionIndex], ans }])
  }


  const handleRenderFunction = (childFunction) => {
    setChildRenderFunction(childFunction)
  }
  return (
    <div className='outer-margin'>
      <div className='hor-border right'></div>
      <div className='app-wrapper'>
        <div className='app-items-nav'><Navbar /></div>
        <div className='app-items-questions'><Question question={QUESTIONS[currentQuestionIndex]} onAns={handleAns} allAnswered={allDone} answers={answers} sendToParent={handleRenderFunction} /></div>
        <div className='app-itesm-ans'>
          {childRenderFunction && childRenderFunction}
        </div>
      </div>
      <div className='hor-border left'></div>
    </div>

  )
}

export default App